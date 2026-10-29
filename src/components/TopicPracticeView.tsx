import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Timer, Lightbulb } from 'lucide-react';
import { MistakeCause, MistakeReview, QuestionType, UserStats, YdsQuestion } from '../types';
import { StudyTopic, getQuestionStatus, questionGroupLabel } from '../services/studyTopics';
import { getPaceStatus, PACE_TARGET_SECONDS } from '../services/examInsights';
import { CORRECT_TO_RETIRE, describeDue, isMistakeDue } from '../services/mistakeReview';
import { MistakeCausePicker } from './MistakeCausePicker';

type Mode = 'new' | 'review' | 'all';

interface TopicPracticeViewProps {
  topic: StudyTopic;
  solvedQuestions: UserStats['solvedQuestions'];
  mistakeIds: string[];
  mistakeReviews?: Record<string, MistakeReview>;
  onRecordQuestionResult: (questionId: string, selected: string, isCorrect: boolean, seconds?: number) => void;
  onAddMistake: (questionId: string) => void;
  onMistakeCorrect: (questionId: string) => void;
  onSetMistakeCause?: (questionId: string, cause: MistakeCause) => void;
  onBack: () => void;
  onOpenTactic?: (type: QuestionType) => void;
  // Which list to open with; defaults to new questions, or review when none are left.
  initialMode?: Mode;
}

const OPTION_KEYS = ['A', 'B', 'C', 'D', 'E'] as const;

export const TopicPracticeView: React.FC<TopicPracticeViewProps> = ({
  topic,
  solvedQuestions,
  mistakeIds,
  mistakeReviews = {},
  onRecordQuestionResult,
  onAddMistake,
  onMistakeCorrect,
  onSetMistakeCause,
  onBack,
  onOpenTactic,
  initialMode
}) => {
  const buildList = (mode: Mode): YdsQuestion[] => {
    if (mode === 'all') return topic.questions;
    const mistakes = new Set(mistakeIds);
    // Review holds only the mistakes whose day has come; the rest wait.
    if (mode === 'review') return topic.questions.filter((q) => mistakes.has(q.id) && isMistakeDue(mistakeReviews[q.id]));
    return topic.questions.filter((q) => getQuestionStatus(q.id, solvedQuestions, mistakes) === 'new');
  };

  const mistakeSet = new Set(mistakeIds);
  const newCount = topic.questions.filter((q) => getQuestionStatus(q.id, solvedQuestions, mistakeSet) === 'new').length;
  const mistakeCount = topic.questions.filter((q) => mistakeSet.has(q.id)).length;
  const reviewCount = topic.questions.filter((q) => mistakeSet.has(q.id) && isMistakeDue(mistakeReviews[q.id])).length;
  const waitingCount = mistakeCount - reviewCount;
  const solvedCount = topic.questions.length - newCount - mistakeCount;

  const [mode, setMode] = useState<Mode>(() =>
    initialMode === 'review' && reviewCount > 0 ? 'review' : newCount === 0 && reviewCount > 0 ? 'review' : 'new'
  );
  // The list is fixed for a session so answering never reshuffles the questions.
  const [list, setList] = useState<YdsQuestion[]>(() => buildList(mode));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [seconds, setSeconds] = useState(0);
  const [showPassage, setShowPassage] = useState(true);
  // The clock is optional: a running timer is pressure while learning a topic.
  const [showTimer, setShowTimer] = useState(() => {
    try {
      return localStorage.getItem('yds_show_timer') === 'true';
    } catch {
      return false;
    }
  });
  const toggleTimer = () => {
    setShowTimer((v) => {
      try {
        localStorage.setItem('yds_show_timer', String(!v));
      } catch {
        // ignore
      }
      return !v;
    });
  };
  const topRef = useRef<HTMLDivElement>(null);

  const startMode = (next: Mode) => {
    setMode(next);
    setList(buildList(next));
    setIndex(0);
    setAnswers({});
    setSeconds(0);
  };

  const q = list[index];
  const selected = q ? answers[q.id] : undefined;
  const answered = Boolean(selected);

  // Where this question sits in its sub-group (grammar subject or reading
  // passage), so a change of subject or passage is visible.
  const group = q ? questionGroupLabel(q) : undefined;
  const groupMembers = group ? topic.questions.filter((x) => questionGroupLabel(x) === group) : [];
  const groupPosition = q ? groupMembers.indexOf(q) + 1 : 0;

  useEffect(() => {
    if (!q || answered) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [q, answered]);

  const choose = (key: string) => {
    if (!q || answered) return;
    setAnswers((prev) => ({ ...prev, [q.id]: key }));
    const isCorrect = key === q.answer;
    onRecordQuestionResult(q.id, key, isCorrect, seconds);
    if (isCorrect) onMistakeCorrect(q.id);
    else onAddMistake(q.id);
  };

  const next = () => {
    setIndex((i) => i + 1);
    setSeconds(0);
    setShowPassage(true);
    topRef.current?.scrollIntoView?.({ block: 'start' });
  };

  const pace = q ? getPaceStatus(seconds, q.type) : 'ok';
  const paceClass =
    pace === 'over'
      ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
      : pace === 'warn'
      ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300';

  return (
    <div ref={topRef} className="max-w-3xl mx-auto space-y-3 pb-24 md:pb-8 scroll-mt-20">
      {/* One compact bar: back, topic, counter, timer */}
      <div className="flex items-center gap-2">
        <button
          onClick={onBack}
          aria-label="Konulara dön"
          className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-slate-900 dark:text-white truncate flex-1">{topic.label}</h2>
        {q && (
          <>
            <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {index + 1}/{list.length}
            </span>
            <button
              onClick={toggleTimer}
              aria-label={showTimer ? 'Süreyi gizle' : 'Süreyi göster'}
              title={`Hedef süre: ${PACE_TARGET_SECONDS[q.type]} sn`}
              className={`text-xs font-semibold px-2 py-1.5 rounded-md tabular-nums inline-flex items-center gap-1 ${
                showTimer ? paceClass : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Timer className="w-4 h-4" />
              {showTimer && `${seconds}/${PACE_TARGET_SECONDS[q.type]} sn`}
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap">
        <button
          onClick={() => startMode('new')}
          className={`px-3 py-2 rounded-lg ${
            mode === 'new' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Yeni ({newCount})
        </button>
        <button
          onClick={() => startMode('review')}
          className={`px-3 py-2 rounded-lg ${
            mode === 'review' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Tekrar ({reviewCount})
        </button>
        <button
          onClick={() => startMode('all')}
          className={`px-3 py-2 rounded-lg ${
            mode === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Hepsi ({topic.questions.length})
        </button>
        {onOpenTactic && (
          <button
            onClick={() => onOpenTactic(topic.types[0])}
            className="ml-auto inline-flex items-center gap-1 px-2 py-2 text-sky-700 dark:text-sky-400"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Taktik
          </button>
        )}
      </div>

      {mode === 'new' && solvedCount > 0 && index === 0 && !answered && (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Daha önce doğru çözdüğün {solvedCount} soru bu listede yok. Hepsini sırayla görmek için "Hepsi"ye bas.
        </p>
      )}

      {!q ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center space-y-3">
          <p className="font-semibold text-slate-900 dark:text-white">
            {mode === 'all'
              ? 'Bu konunun tüm sorularını bitirdin.'
              : mode === 'new'
              ? list.length === 0
                ? 'Bu konuda yeni soru kalmadı.'
                : 'Bu turdaki soruları bitirdin.'
              : list.length === 0
              ? 'Tekrar edilecek soru yok.'
              : 'Tekrar turunu bitirdin.'}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Yanlış yaptığın sorular ertesi gün, sonra 3 ve 7 gün sonra "Tekrar" listesine gelir. Üç kez doğru çözünce öğrendiklerine geçer.
          </p>
          {waitingCount > 0 && (
            <p className="text-sm text-slate-600 dark:text-slate-400">Tekrar günü henüz gelmemiş {waitingCount} yanlışın var.</p>
          )}
          <div className="flex flex-wrap justify-center gap-2">
            {reviewCount > 0 && (
              <button onClick={() => startMode('review')} className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-semibold">
                Yanlışlarımı tekrar et ({reviewCount})
              </button>
            )}
            {newCount > 0 && (
              <button onClick={() => startMode('new')} className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold">
                Yeni sorulara devam et ({newCount})
              </button>
            )}
            <button onClick={onBack} className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold">
              Konulara dön
            </button>
          </div>
        </div>
      ) : (
        <div key={q.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 md:p-6 space-y-4">
          {group && (
            <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">
              {q.type === 'reading' ? 'Metin: ' : ''}
              {group} · {groupPosition}/{groupMembers.length}
            </p>
          )}
          {q.passage && (
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setShowPassage((s) => !s)}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300"
              >
                {showPassage ? 'Metni gizle' : 'Metni göster'}
              </button>
              {showPassage && (
                <p className="px-3 pb-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line max-h-[35vh] overflow-y-auto">
                  {q.passage}
                </p>
              )}
            </div>
          )}

          <p className="text-base md:text-lg font-medium text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
            {q.question}
          </p>

          <div className="space-y-2">
            {OPTION_KEYS.map((key) => {
              const text = q.options[key];
              if (!text) return null;
              const isAnswer = key === q.answer;
              const isPicked = key === selected;
              let cls =
                'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800';
              if (answered) {
                if (isAnswer) cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200';
                else if (isPicked) cls = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
                else cls = 'border-slate-200 dark:border-slate-800 opacity-50';
              }
              return (
                <button
                  key={key}
                  onClick={() => choose(key)}
                  disabled={answered}
                  className={`w-full text-left flex gap-3 px-3 py-2.5 rounded-xl border text-sm md:text-base transition-colors ${cls}`}
                >
                  <span className="font-bold shrink-0">{key})</span>
                  <span>{text}</span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="space-y-3 pt-1">
              <p
                className={`text-sm font-bold ${
                  selected === q.answer ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
                }`}
              >
                {selected === q.answer
                  ? mistakeSet.has(q.id)
                    ? `Doğru. ${mistakeReviews[q.id]?.streak ?? 0}/${CORRECT_TO_RETIRE} tamam, ${describeDue(
                        mistakeReviews[q.id]?.due ?? ''
                      )} tekrar sorulacak.`
                    : 'Doğru. Bu soru öğrendiklerine eklendi.'
                  : `Yanlış. Doğru cevap ${q.answer}. Soru yarın tekrar sorulacak.`}
              </p>
              {selected !== q.answer && onSetMistakeCause && (
                <MistakeCausePicker value={mistakeReviews[q.id]?.cause} onPick={(cause) => onSetMistakeCause(q.id, cause)} />
              )}
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3">
                {q.explanation}
                {q.trapWarning && <span className="block mt-2 text-amber-800 dark:text-amber-300">Dikkat: {q.trapWarning}</span>}
              </div>
              <button
                onClick={next}
                className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold inline-flex items-center justify-center gap-2"
              >
                {index < list.length - 1 ? 'Sonraki soru' : 'Turu bitir'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
