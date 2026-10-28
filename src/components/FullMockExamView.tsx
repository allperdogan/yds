import React, { useState, useEffect } from 'react';
import { Timer, AlertTriangle, CheckCircle2, XCircle, Award, BarChart3, ChevronRight, ChevronLeft, Flag, HelpCircle, ShieldAlert, Sparkles, BookMarked, RotateCcw, Brain, BatteryCharging, Zap, Info } from 'lucide-react';
import { YdsQuestion, MockExamResult } from '../types';
import { YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3, YDS_MOCK_EXAMS_LIST } from '../data/ydsFullMockExam';
import { GENERATED_MOCK_EXAMS, GENERATED_MOCK_EXAMS_LIST, GENERATED_MOCK_NOTE } from '../data/ydsGeneratedMockExams';

const ALL_MOCK_EXAMS = [...YDS_MOCK_EXAMS_LIST, ...GENERATED_MOCK_EXAMS_LIST];
import { analyzeExam, formatSeconds, getPaceStatus, PACE_TARGET_SECONDS, QUESTION_TYPE_LABELS } from '../services/examInsights';

interface FullMockExamViewProps {
  onAddMistake: (questionId: string) => void;
  onSaveExamResult?: (result: MockExamResult) => void;
}

const SAVED_EXAM_KEY = 'yds_mock_in_progress_v1';

interface SavedMockExam {
  selectedExamId: string;
  currentIndex: number;
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  struckOptions: Record<string, Record<string, boolean>>;
  timeLeft: number;
  secondsSpent: Record<string, number>;
}

const loadSavedExam = (): SavedMockExam | null => {
  try {
    const raw = localStorage.getItem(SAVED_EXAM_KEY);
    const parsed = raw ? (JSON.parse(raw) as SavedMockExam) : null;
    return parsed && parsed.selectedExamId && parsed.timeLeft > 0 ? parsed : null;
  } catch {
    return null;
  }
};

const saveExam = (exam: SavedMockExam) => {
  try {
    localStorage.setItem(SAVED_EXAM_KEY, JSON.stringify(exam));
  } catch {
    // Storage full or blocked: the exam still works, it just is not resumable.
  }
};

const clearSavedExam = () => {
  try {
    localStorage.removeItem(SAVED_EXAM_KEY);
  } catch {
    // ignore
  }
};

export const FullMockExamView: React.FC<FullMockExamViewProps> = ({
  onAddMistake,
  onSaveExamResult
}) => {
  // An unfinished exam is saved so switching tabs or reloading does not lose it.
  // The clock only runs while this screen is open.
  const [saved] = useState<SavedMockExam | null>(loadSavedExam);

  // Sınav Seçimi (Deneme 1, 2, 3)
  const [selectedExamId, setSelectedExamId] = useState<string>(saved?.selectedExamId ?? 'exam_1');
  
  // Sınav Durumu
  const [examState, setExamState] = useState<'intro' | 'active' | 'review'>(saved ? 'active' : 'intro');
  const [currentIndex, setCurrentIndex] = useState<number>(saved?.currentIndex ?? 0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(saved?.userAnswers ?? {});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>(saved?.flaggedQuestions ?? {});
  const [struckOptions, setStruckOptions] = useState<Record<string, Record<string, boolean>>>(saved?.struckOptions ?? {});
  
  // 180 Dakika = 10,800 Saniye
  const [timeLeft, setTimeLeft] = useState<number>(saved?.timeLeft ?? 180 * 60);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  // Seconds spent on each question, for per-type pacing feedback
  const [secondsSpent, setSecondsSpent] = useState<Record<string, number>>(saved?.secondsSpent ?? {});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  // 60. Soru Glikoz & Zihinsel Kriz Kalkanı
  const [hasShownStaminaModal, setHasShownStaminaModal] = useState<boolean>(false);
  const [isStaminaModalOpen, setIsStaminaModalOpen] = useState<boolean>(false);
  const [isStaminaGuideOpen, setIsStaminaGuideOpen] = useState<boolean>(false);

  // Sınav Soru Havuzunu Seç
  const examMap: Record<string, YdsQuestion[]> = {
    exam_1: YDS_FULL_MOCK_EXAM_1,
    exam_2: YDS_FULL_MOCK_EXAM_2,
    exam_3: YDS_FULL_MOCK_EXAM_3,
    ...GENERATED_MOCK_EXAMS
  };
  const questions = examMap[selectedExamId] || YDS_FULL_MOCK_EXAM_1;
  const currentQ = questions[currentIndex] || questions[0];

  // 60. Soru Eşiği Tetikleyici
  useEffect(() => {
    if (examState === 'active' && currentIndex >= 59 && !hasShownStaminaModal) {
      setIsStaminaModalOpen(true);
      setHasShownStaminaModal(true);
    }
  }, [currentIndex, examState, hasShownStaminaModal]);

  // Sınav Zamanlayıcısı
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (examState === 'active' && !isTimerPaused && timeLeft > 0) {
      const activeQuestionId = currentQ.id;
      interval = setInterval(() => {
        setSecondsSpent((prev) => ({ ...prev, [activeQuestionId]: (prev[activeQuestionId] || 0) + 1 }));
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [examState, isTimerPaused, timeLeft, currentQ.id]);

  // Time is up: submit once, outside the state updater.
  useEffect(() => {
    if (examState === 'active' && timeLeft === 0) handleAutoSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examState, timeLeft]);

  useEffect(() => {
    if (examState !== 'active') return;
    saveExam({ selectedExamId, currentIndex, userAnswers, flaggedQuestions, struckOptions, timeLeft, secondsSpent });
  }, [examState, selectedExamId, currentIndex, userAnswers, flaggedQuestions, struckOptions, timeLeft, secondsSpent]);

  const handleStartExam = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setStruckOptions({});
    setSecondsSpent({});
    setTimeLeft(180 * 60);
    setCurrentIndex(0);
    setHasShownStaminaModal(false);
    setIsStaminaModalOpen(false);
    setExamState('active');
  };

  const handleSelectOption = (key: string) => {
    if (examState !== 'active') return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key
    }));
  };

  const handleToggleFlag = (qId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleToggleStrike = (e: React.MouseEvent, qId: string, optKey: string) => {
    e.stopPropagation();
    setStruckOptions((prev) => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || {}),
        [optKey]: !(prev[qId]?.[optKey])
      }
    }));
  };

  const handleAutoSubmit = () => {
    setIsSubmitModalOpen(false);
    calculateAndFinishExam();
  };

  const calculateAndFinishExam = () => {
    let correct = 0;
    let wrong = 0;
    let empty = 0;

    const categoryStats: Record<string, { total: number; correct: number; wrong: number }> = {};

    questions.forEach((q) => {
      const ans = userAnswers[q.id];
      const cat = q.type;

      if (!categoryStats[cat]) {
        categoryStats[cat] = { total: 0, correct: 0, wrong: 0 };
      }
      categoryStats[cat].total += 1;

      if (!ans) {
        empty += 1;
      } else if (ans === q.answer) {
        correct += 1;
        categoryStats[cat].correct += 1;
      } else {
        wrong += 1;
        categoryStats[cat].wrong += 1;
        onAddMistake(q.id);
      }
    });

    const score = Math.round(correct * 1.25 * 10) / 10;
    let level = 'Başlangıç (<50)';
    if (score >= 90) level = 'A Seviyesi (90-100 / Uzman)';
    else if (score >= 80) level = 'B Seviyesi (80-89 / İleri)';
    else if (score >= 70) level = 'C Seviyesi (70-79 / Baraj Geçildi)';
    else if (score >= 60) level = 'D Seviyesi (60-69 / Orta)';
    else if (score >= 50) level = 'E Seviyesi (50-59 / Temel)';

    const result: MockExamResult = {
      id: `mock_${Date.now()}`,
      examId: selectedExamId,
      date: new Date().toISOString().split('T')[0],
      score,
      correctCount: correct,
      wrongCount: wrong,
      emptyCount: empty,
      timeSpentSeconds: 180 * 60 - timeLeft,
      categoryBreakdown: categoryStats,
      level
    };

    if (onSaveExamResult) {
      onSaveExamResult(result);
    }

    clearSavedExam();
    setExamState('review');
    setIsSubmitModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24 md:pb-12 px-2">
      {/* 1. INTRO / BAŞLANGIÇ EKRANI */}
      {examState === 'intro' && (
        <div className="max-w-3xl mx-auto space-y-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Deneme</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Gerçek sınav gibi: 80 soru, 180 dakika. Bir deneme seç ve başlat; yarıda bırakırsan kaldığın yerden devam edersin.
            </p>
          </div>

          {/* DENEME SEÇİMİ */}
          <div
            role="radiogroup"
            aria-label="Deneme seç"
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl divide-y divide-slate-200 dark:divide-slate-800 overflow-hidden"
          >
            {ALL_MOCK_EXAMS.map((exam) => {
              const isSelected = selectedExamId === exam.id;
              const [name, subtitle] = exam.title.split(': ');
              return (
                <button
                  key={exam.id}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedExamId(exam.id)}
                  className={`w-full text-left flex items-start gap-3 px-4 py-3 transition-colors ${
                    isSelected ? 'bg-sky-50 dark:bg-sky-950/40' : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1 w-4 h-4 rounded-full border-2 shrink-0 ${
                      isSelected ? 'border-sky-600 bg-sky-600 ring-2 ring-inset ring-white dark:ring-slate-900' : 'border-slate-300 dark:border-slate-600'
                    }`}
                  />
                  <span className="flex-1 min-w-0">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-slate-900 dark:text-white">{name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">{exam.badge}</span>
                    </span>
                    {subtitle && !subtitle.startsWith(exam.badge) && <span className="block text-sm text-slate-600 dark:text-slate-400">{subtitle}</span>}
                    {isSelected && (
                      <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{exam.description}</span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{GENERATED_MOCK_NOTE}</p>

          <button
            onClick={handleStartExam}
            className="sticky bottom-20 md:bottom-4 z-10 shadow-lg shadow-sky-900/10 w-full px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-base active:scale-[0.99] transition-all"
          >
            Denemeyi başlat
          </button>

          {/* Sınav Dağılımı ve öneriler: açılır, ekranı kalabalıklaştırmaz */}
          <details className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-sm">
            <summary className="cursor-pointer font-semibold text-slate-800 dark:text-slate-200">Sınavın bölümleri</summary>
            <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400 tabular-nums">
              <li>1–6 · Kelime bilgisi (6 soru)</li>
              <li>7–16 · Dil bilgisi ve edat (10 soru)</li>
              <li>17–26 · Cloze test (10 soru)</li>
              <li>27–36 · Cümle tamamlama (10 soru)</li>
              <li>37–42 · Çeviri (6 soru)</li>
              <li>43–62 · Okuma, 5 paragraf (20 soru)</li>
              <li>63–80 · Diyalog, anlamca en yakın, paragraf tamamlama, anlamı bozan cümle</li>
            </ul>
          </details>

          <details
            open={isStaminaGuideOpen}
            onToggle={(e) => setIsStaminaGuideOpen((e.target as HTMLDetailsElement).open)}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-sm"
          >
            <summary className="cursor-pointer font-semibold text-slate-800 dark:text-slate-200">Deneme önerileri</summary>
            <div className="mt-2 space-y-2 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Çoğu adayda dikkat ikinci saatin sonunda, yaklaşık 60. soru civarında düşer. Sınava kadar en az{' '}
                <strong className="text-slate-800 dark:text-slate-200">10–12 tam denemeyi</strong> kesintisiz çözüp bu yorgunluğa alış.
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200">Kesintisiz otur:</strong> telefonu uçak moduna al, ara verme.
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200">60. soru molası:</strong> su iç, 20–30 saniye nefeslen.
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200">Son 6 hafta:</strong> haftada iki tam deneme, sınav saatinde (10:15) başlat.
              </p>
            </div>
          </details>
        </div>
      )}

      {/* 2. AKTİF SINAV & SORU ÇÖZÜM MODU */}
      {(examState === 'active' || examState === 'review') && (
        <div className="space-y-5">
          {/* Üst Bar: Süre, İlerleme ve Bitir Butonu */}
          <div className="bg-white dark:bg-slate-900 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 sticky top-16 z-30">
            <div className="flex items-center gap-3">
              {examState === 'active' ? (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 font-mono font-extrabold text-xs">
                  <Timer className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span>{formatTimer(timeLeft)}</span>
                </div>
              ) : (
                <span className="px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs">
                  Sınav Tamamlandı (İnceleme Modu)
                </span>
              )}

              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {answeredCount} / 80 İşaretlendi
              </span>

              {/* Bu sorudaki süre / hedef süre */}
              {examState === 'active' && (() => {
                const elapsed = secondsSpent[currentQ.id] || 0;
                const status = getPaceStatus(elapsed, currentQ.type);
                const tone =
                  status === 'over'
                    ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                    : status === 'warn'
                    ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
                return (
                  <span
                    data-testid="question-pace"
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg border ${tone}`}
                  >
                    <Zap className="w-3 h-3" />
                    <span>
                      Bu soru: {formatSeconds(elapsed)} / hedef {PACE_TARGET_SECONDS[currentQ.type]} sn
                      {status === 'over' && ' · Süre aşıldı, işaretle ve geç'}
                    </span>
                  </span>
                );
              })()}
            </div>

            <div className="flex items-center gap-2">
              {examState === 'active' && (
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Sınavı Bitir
                </button>
              )}
              {examState === 'review' && (
                <button
                  onClick={handleStartExam}
                  className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Yeniden Çöz</span>
                </button>
              )}
            </div>
          </div>

          {/* Sınav Karnesi & Sonuç Özeti (Yalnızca Review Modunda) */}
          {examState === 'review' && (
            <div className="bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-slate-900 dark:to-slate-900 border-2 border-indigo-200 dark:border-indigo-900 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-100 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase">
                    <Award className="w-4 h-4" />
                    <span>YDS Performans Raporu</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Sınav Sonucunuz: {Math.round(questions.filter((q) => userAnswers[q.id] === q.answer).length * 1.25 * 10) / 10} / 100
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 min-w-16">
                    <span className="text-xs text-slate-400 font-bold">Doğru</span>
                    <p className="text-lg font-black text-emerald-600">
                      {questions.filter((q) => userAnswers[q.id] === q.answer).length}
                    </p>
                  </div>
                  <div className="text-center bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 min-w-16">
                    <span className="text-xs text-slate-400 font-bold">Yanlış</span>
                    <p className="text-lg font-black text-rose-600">
                      {questions.filter((q) => userAnswers[q.id] && userAnswers[q.id] !== q.answer).length}
                    </p>
                  </div>
                  <div className="text-center bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 min-w-16">
                    <span className="text-xs text-slate-400 font-bold">Boş</span>
                    <p className="text-lg font-black text-slate-500">
                      {questions.filter((q) => !userAnswers[q.id]).length}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                💡 Yanlış yaptığınız tüm sorular otomatik olarak <strong>Hata Defteri</strong>'ne eklenmiştir. Aşağıdaki sorularda doğrudan doğru cevapları, soru taktiklerini ve ÖSYM çeldirici uyarılarını inceleyebilirsiniz.
              </p>

              {(() => {
                const insights = analyzeExam(questions, userAnswers, secondsSpent);
                return (
                  <div className="space-y-4" data-testid="exam-insights">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Tahmini YDS puanı</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">
                        {insights.score} <span className="text-sm font-bold text-slate-500">(gerçek sınavda muhtemel aralık {insights.scoreLow}-{insights.scoreHigh})</span>
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        Tek deneme bir örneklemdir; aralık daralsın diye en az 3 denemenin ortalamasına bak. 75 için 80 sorudan 60 doğru gerekir.
                      </p>
                    </div>

                    <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                            <th className="p-2.5 font-bold">Soru tipi</th>
                            <th className="p-2.5 font-bold">Doğru</th>
                            <th className="p-2.5 font-bold">75 hedefi</th>
                            <th className="p-2.5 font-bold">Ort. süre</th>
                          </tr>
                        </thead>
                        <tbody>
                          {insights.types.map((t) => (
                            <tr key={t.type} className="border-b last:border-0 border-slate-100 dark:border-slate-700/60">
                              <td className="p-2.5 font-bold text-slate-700 dark:text-slate-200">{t.label}</td>
                              <td className={`p-2.5 font-bold ${t.pointsBelowTarget > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                                {t.correct} / {t.total}
                              </td>
                              <td className="p-2.5 text-slate-500 dark:text-slate-400">{Math.ceil(t.targetRate * t.total)} / {t.total}</td>
                              <td className={`p-2.5 ${t.overTime ? 'text-amber-600 font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
                                {t.avgSeconds !== null ? `${t.avgSeconds} sn (hedef ${t.targetSeconds})` : '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {insights.recommendations.length > 0 && (
                      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 space-y-2">
                        <p className="text-xs font-black text-slate-700 dark:text-slate-200">Önce bunlara çalış</p>
                        <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                          {insights.recommendations.map((r) => (
                            <li key={r.type}>
                              <strong>{r.label}</strong> (hedefin {r.pointsBelowTarget} puan altında): {r.text}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {insights.slowTypes.length > 0 && (
                      <p className="text-xs text-amber-700 dark:text-amber-300">
                        Süre aşımı: {insights.slowTypes.map((t) => t.label).join(', ')} sorularında hedef sürenin üstündesin.
                      </p>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {/* Soru Navigasyon Optik Tablası (1-80) */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>Soru Seçim Tablası (1 - 80)</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Cevaplandı
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Şüpheli (Bayrak)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" /> Boş
                </span>
              </div>
            </div>

            <div className="grid grid-cols-10 sm:grid-cols-16 md:grid-cols-20 gap-1.5 max-h-36 overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const isCurrent = currentIndex === idx;
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = !!flaggedQuestions[q.id];
                const isCorrect = userAnswers[q.id] === q.answer;

                let btnColor = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                if (examState === 'review') {
                  if (!userAnswers[q.id]) btnColor = 'bg-slate-100 dark:bg-slate-800 text-slate-400';
                  else if (isCorrect) btnColor = 'bg-emerald-500 text-white';
                  else btnColor = 'bg-rose-500 text-white';
                } else {
                  if (isAnswered) btnColor = 'bg-sky-600 text-white';
                  if (isFlagged) btnColor = 'bg-amber-400 text-slate-900 font-black';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-7 rounded-lg text-[11px] font-bold transition-transform active:scale-90 flex items-center justify-center relative ${btnColor} ${
                      isCurrent ? 'ring-2 ring-indigo-500 ring-offset-1 scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                    {isFlagged && examState === 'active' && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 border border-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 60. Soru Eşiği Kondisyon Hatırlatıcısı (60 - 80. Sorularda Aktif) */}
          {examState === 'active' && currentIndex >= 59 && (
            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/30 rounded-2xl p-3.5 flex items-center justify-between gap-3 animate-in fade-in">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm font-black text-xs">
                  60+
                </div>
                <div>
                  <span className="text-xs font-black text-amber-900 dark:text-amber-300">
                    ⚠️ 60. Soru Eşiği (Kritik Kondisyon Etabı)
                  </span>
                  <p className="text-[11px] text-amber-800/80 dark:text-amber-400/80">
                    Yorgunluk bu noktada normaldir; pes etmeyin. Derin nefes alın, su için ve şık eleme tekniğiyle son 20 soruyu tamamlayın!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsStaminaModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-[11px] shadow-sm shrink-0"
              >
                Glikoz Kalkanı
              </button>
            </div>
          )}

          {/* Soru Kartı */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            {/* Header: Soru No, Tip, Bayrak Butonu */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-slate-900 dark:bg-slate-800 text-white px-2.5 py-1 rounded-lg">
                  SORU {currentIndex + 1} / 80
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  {currentQ.title || QUESTION_TYPE_LABELS[currentQ.type]}
                </span>
              </div>

              {examState === 'active' && (
                <button
                  onClick={() => handleToggleFlag(currentQ.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    flaggedQuestions[currentQ.id]
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-300'
                      : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flaggedQuestions[currentQ.id] ? 'Şüpheli İşaretli' : 'Şüpheli İşaretle'}</span>
                </button>
              )}
            </div>

            {/* Varsa Paragraf Metni */}
            {currentQ.passage && (
              <div className="bg-slate-50 dark:bg-slate-850 p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs md:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed max-h-72 overflow-y-auto">
                <p className="font-sans text-[10px] font-bold uppercase text-slate-400 mb-1">
                  YDS Paragraf Metni:
                </p>
                {currentQ.passage}
              </div>
            )}

            {/* Varsa Diyalog Konuşmacıları */}
            {currentQ.dialogueSpeaker && (
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Konuşmacılar: {currentQ.dialogueSpeaker}
              </p>
            )}

            {/* Soru Kökü */}
            <p className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
              {currentQ.question}
            </p>

            {/* Şıklar Listesi */}
            <div className="space-y-2.5">
              {(Object.keys(currentQ.options) as Array<keyof typeof currentQ.options>).map((optKey) => {
                const optText = currentQ.options[optKey];
                const isSelected = userAnswers[currentQ.id] === optKey;
                const isCorrect = optKey === currentQ.answer;
                const isStruck = struckOptions[currentQ.id]?.[optKey];

                let optionStyle = 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-slate-400';

                if (examState === 'review') {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-400 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-400 font-bold';
                  } else {
                    optionStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 ring-2 ring-sky-400 font-bold';
                }

                return (
                  <div
                    key={optKey}
                    onClick={() => handleSelectOption(optKey)}
                    className={`p-3.5 md:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-3 ${optionStyle} ${
                      isStruck && examState === 'active' ? 'opacity-35 line-through' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black text-xs flex items-center justify-center shrink-0">
                        {optKey}
                      </span>
                      <span className="text-xs md:text-sm pt-1 leading-snug">
                        {optText}
                      </span>
                    </div>

                    {/* Çeldirici Çizme Butonu (Aktif Sınavda) */}
                    {examState === 'active' && (
                      <button
                        type="button"
                        onClick={(e) => handleToggleStrike(e, currentQ.id, optKey)}
                        className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 text-[10px] font-bold"
                      >
                        {isStruck ? 'Geri Al' : 'Ele / Çiz'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Çözüm ve Taktik İncelemesi (Review Modunda) */}
            {examState === 'review' && (
              <div className="bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 mt-4 animate-in fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    Taktik: {currentQ.tacticUsed}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    Doğru Şık: {currentQ.answer}
                  </span>
                </div>

                {currentQ.trapWarning && (
                  <div className="bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>ÖSYM Çeldirici Tuzağı:</strong> {currentQ.trapWarning}
                    </div>
                  </div>
                )}

                <div className="text-xs md:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {currentQ.explanation}
                </div>
              </div>
            )}

            {/* Alt Gezinme Butonları */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Soru</span>
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-30"
              >
                <span>Sonraki Soru</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sınav Bitirme Onay Modalı */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 max-w-md w-full border border-slate-200 dark:border-slate-800 space-y-5 shadow-2xl">
            <div className="flex items-center gap-2 text-rose-600 font-extrabold text-lg">
              <AlertTriangle className="w-6 h-6" />
              <span>Sınavı Bitirmek İstiyor musunuz?</span>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <p>
                Toplam 80 sorudan <strong>{answeredCount}</strong> tanesini işaretlediniz.
              </p>
              {80 - answeredCount > 0 && (
                <p className="text-amber-600 dark:text-amber-400 font-bold">
                  ⚠️ <strong>{80 - answeredCount}</strong> soru boş bırakıldı!
                </p>
              )}
              <p>
                Sınavı bitirdiğinizde netleriniz hesaplanacak, yanlış yaptığınız sorular Hata Defteri'ne kaydedilecek ve tam soru çözümleri açılacaktır.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100"
              >
                Sınava Devam Et
              </button>
              <button
                onClick={calculateAndFinishExam}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md transition-colors"
              >
                Evet, Sınavı Tamamla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 60. Soru Glikoz & Zihinsel Kriz Kalkanı Modalı */}
      {isStaminaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 max-w-lg w-full border-2 border-amber-400 dark:border-amber-600 space-y-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/30 shrink-0">
                ⚠️
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  Kritik Eşik Uyarısı
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                  60. Soru Eşiği: Zihinsel Kriz Kalkanı!
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-amber-50/60 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-200/60 dark:border-amber-800/40">
              <p className="font-semibold text-amber-950 dark:text-amber-200">
                Tebrikler, 80 soruluk sınavın en zorlu virajına girdiniz! ÖSYM istatistiklerine göre adayların büyük kısmı 60. sorudan sonra zihinsel pes etme yaşar ve aceleyle yanlış işaretler.
              </p>
              
              <div className="space-y-2 pt-1 font-medium">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">🛑</span>
                  <span><strong>30 Saniyelik Reset:</strong> Ekrandan veya kağıttan gözlerini çek, arkana yaslan ve 3 derin diyafram nefesi al.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">💧</span>
                  <span><strong>Su & Mola:</strong> Bir yudum su iç veya şeker/kuru meyve desteği al; kısa bir mola dikkati toparlar.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">🎯</span>
                  <span><strong>Son 20 Soru Mantığı:</strong> Paragraf bitti! Kalan 20 soru (Diyalog, Anlamca En Yakın, Paragraf Tamamlama, Akışı Bozan) sadece <em>konu odağı, referans kelimeler (this, that, such)</em> ve <em>şık eleme mekaniğidir</em>.</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                onClick={() => setIsStaminaModalOpen(false)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition-all text-center"
              >
                Kondisyonumu Koruyorum, Kalan 20 Soruya Devam Et!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
