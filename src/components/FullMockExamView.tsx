import React, { useState, useEffect } from 'react';
import { Timer, AlertTriangle, CheckCircle2, XCircle, Award, BarChart3, ChevronRight, ChevronLeft, Flag, HelpCircle, ShieldAlert, Sparkles, BookMarked, RotateCcw, Brain, BatteryCharging, Zap, Info } from 'lucide-react';
import { YdsQuestion, MockExamResult } from '../types';
import { YDS_FULL_MOCK_EXAM_1, YDS_FULL_MOCK_EXAM_2, YDS_FULL_MOCK_EXAM_3, YDS_MOCK_EXAMS_LIST } from '../data/ydsFullMockExam';

interface FullMockExamViewProps {
  onAddMistake: (questionId: string) => void;
  onSaveExamResult?: (result: MockExamResult) => void;
}

export const FullMockExamView: React.FC<FullMockExamViewProps> = ({
  onAddMistake,
  onSaveExamResult
}) => {
  // Sınav Seçimi (Deneme 1, 2, 3)
  const [selectedExamId, setSelectedExamId] = useState<string>('exam_1');
  
  // Sınav Durumu
  const [examState, setExamState] = useState<'intro' | 'active' | 'review'>('intro');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [struckOptions, setStruckOptions] = useState<Record<string, Record<string, boolean>>>({});
  
  // 180 Dakika = 10,800 Saniye
  const [timeLeft, setTimeLeft] = useState<number>(180 * 60);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  // 60. Soru Glikoz & Zihinsel Kriz Kalkanı
  const [hasShownStaminaModal, setHasShownStaminaModal] = useState<boolean>(false);
  const [isStaminaModalOpen, setIsStaminaModalOpen] = useState<boolean>(false);
  const [isStaminaGuideOpen, setIsStaminaGuideOpen] = useState<boolean>(false);

  // Sınav Soru Havuzunu Seç
  const examMap: Record<string, YdsQuestion[]> = {
    exam_1: YDS_FULL_MOCK_EXAM_1,
    exam_2: YDS_FULL_MOCK_EXAM_2,
    exam_3: YDS_FULL_MOCK_EXAM_3
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
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [examState, isTimerPaused, timeLeft]);

  const handleStartExam = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setStruckOptions({});
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

  const getRecommendedPacing = (idx: number) => {
    if (idx < 6) return '~45 sn (Kelime)';
    if (idx < 16) return '~40 sn (Gramer)';
    if (idx < 26) return '~1 dk (Cloze)';
    if (idx < 36) return '~1.5 dk (Cümle Tamamlama)';
    if (idx < 42) return '~1.5 dk (Çeviri)';
    if (idx < 62) return '~2.5 dk (Paragraf)';
    return '~1.5 dk (Son 20 Soru / Kondisyon)';
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24 md:pb-12 px-2">
      {/* 1. INTRO / BAŞLANGIÇ EKRANI */}
      {examState === 'intro' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 shadow-sm space-y-8 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-sky-500/20">
            <Timer className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                Gerçek ÖSYM Standartı
              </span>
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                3 Farklı Tam Deneme
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              180 Dakika / 80 Soruluk Tam YDS Deneme Sınavı
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto">
              Sınav kondisyonunu ve 3 saatlik zihinsel dayanıklılığı geliştirmek için birebir ÖSYM soru dağılımıyla hazırlanmış eksiksiz simülasyon.
            </p>
          </div>

          {/* DENEME SEÇİM KARTLARI */}
          <div className="space-y-2 text-left">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Çözmek İstediğiniz Denemeyi Seçin:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {YDS_MOCK_EXAMS_LIST.map((exam) => {
                const isSelected = selectedExamId === exam.id;
                return (
                  <div
                    key={exam.id}
                    onClick={() => setSelectedExamId(exam.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 ring-2 ring-sky-500/30 shadow-md'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {exam.badge}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">80 Soru</span>
                    </div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                      {exam.title.split(':')[1] || exam.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {exam.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 80-90 ALANLARIN KONDİSYON VE GLİKOZ PROTOKOLÜ (EXPANDABLE REHBER) */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800/70 rounded-2xl p-4 text-left space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-black text-xs md:text-sm">
                <Brain className="w-4 h-4 text-amber-600 shrink-0" />
                <span>🔥 Realist Olalım: Neden SADECE Bu App Yetmez? (12-15 Tam Deneme Şartı)</span>
              </div>
              <button
                onClick={() => setIsStaminaGuideOpen(!isStaminaGuideOpen)}
                className="text-xs font-extrabold text-amber-700 dark:text-amber-400 hover:underline shrink-0"
              >
                {isStaminaGuideOpen ? 'Kapat' : 'Protokolü Oku'}
              </button>
            </div>

            <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">
              Sınav 180 dakika ve 80 soru. Beyin 60. sorudan sonra glikoz yakmayı bırakıp pes eder. Gerçek bir 80-90 adayının sınava kadar en az <strong>12-15 tane tam denemeyi</strong> kesintisiz masada çözüp o 3 saatlik zihinsel felci defalarca yaşamış olması şarttır!
            </p>

            {isStaminaGuideOpen && (
              <div className="pt-2 border-t border-amber-200/80 dark:border-amber-800/80 space-y-2 text-xs text-amber-950 dark:text-amber-200">
                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 space-y-1">
                  <span className="font-extrabold text-amber-800 dark:text-amber-300">1. Kesintisiz 180 Dakika Masada Oturma Disiplini:</span>
                  <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                    Deneme çözerken telefonu uçak moduna alın, asla masadan kalkmayın ve ara vermeyin. Beyin ancak bu şekilde 180 dakikalık odaklanma kasını geliştirir.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 space-y-1">
                  <span className="font-extrabold text-amber-800 dark:text-amber-300">2. Glikoz ve Sıvı Desteği (60. Soru Krizi):</span>
                  <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                    Sınavın 60. dakikasında ve 60. sorusunda glikoz rezervi tükenir. Masanızda bir yudum su ve kuru üzüm/şeker bulundurun; anlık kan şekeri desteği mental yorgunluğu önler.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 space-y-1">
                  <span className="font-extrabold text-amber-800 dark:text-amber-300">3. Son 6 Hafta Maratonu (Haftada 2 Tam Deneme):</span>
                  <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                    Sınava son 1.5 ay kala her hafta Çarşamba ve Pazar saat 10:15'te tam deneme başlatın. Biyolojik saatiniz sınav saatinde en yüksek zihinsel performansa kilitlensin.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sınav Dağılım Tablosu */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-left text-xs font-medium">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-extrabold text-sky-600 dark:text-sky-400">1 - 6</span>
              <p className="text-slate-700 dark:text-slate-300">Kelime Bilgisi (6 Soru)</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-extrabold text-sky-600 dark:text-sky-400">7 - 16</span>
              <p className="text-slate-700 dark:text-slate-300">Gramer & Edat (10 Soru)</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-extrabold text-sky-600 dark:text-sky-400">17 - 26</span>
              <p className="text-slate-700 dark:text-slate-300">Cloze Test (10 Soru)</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-extrabold text-sky-600 dark:text-sky-400">27 - 36</span>
              <p className="text-slate-700 dark:text-slate-300">Cümle Tamamlama (10 Soru)</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-extrabold text-sky-600 dark:text-sky-400">37 - 42</span>
              <p className="text-slate-700 dark:text-slate-300">Çeviriler (6 Soru)</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="font-extrabold text-sky-600 dark:text-sky-400">43 - 62</span>
              <p className="text-slate-700 dark:text-slate-300">5 Paragraf (20 Soru)</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm shadow-xl shadow-sky-500/20 active:scale-95 transition-all"
            >
              180 Dakikalık Deneme Sınavını Başlat
            </button>
          </div>
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

              {/* Soru Başına İdeal Süre Rehberi */}
              {examState === 'active' && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  <Zap className="w-3 h-3 text-indigo-500" />
                  <span>İdeal Hız: {getRecommendedPacing(currentIndex)}</span>
                </span>
              )}
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
                    Beyin glikoz rezervini tüketti; pes etmeyin. Derin nefes alın, su için ve şık eleme tekniğiyle son 20 soruyu tamamlayın!
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
                  {currentQ.title || currentQ.type}
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
                  <span><strong>Glikoz & Su:</strong> Bir yudum su iç veya şeker/kuru meyve desteği al; beyin glikozsuz kaldığında eleme refleksini kaybeder.</span>
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
