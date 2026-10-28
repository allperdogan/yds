import React from 'react';
import { ChevronRight } from 'lucide-react';
import { UserStats } from '../types';
import { STUDY_TOPICS, TopicProgress, getTopicProgress, getVocabProgress } from '../services/studyTopics';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';

interface StudyHubViewProps {
  solvedQuestions: UserStats['solvedQuestions'];
  mistakeQuestionIds: string[];
  knownVocabIds: string[];
  pendingReviewVocabIds: string[];
  onOpenTopic: (topicId: string) => void;
  onOpenVocab: () => void;
  onOpenWordLists?: () => void;
}

export const ProgressBar: React.FC<{ progress: TopicProgress }> = ({ progress }) => {
  const pct = (n: number) => (progress.total ? (n / progress.total) * 100 : 0);
  return (
    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex" aria-hidden="true">
      <div className="bg-emerald-500" style={{ width: `${pct(progress.learned)}%` }} />
      <div className="bg-amber-400" style={{ width: `${pct(progress.learning)}%` }} />
    </div>
  );
};

export const ProgressNumbers: React.FC<{ progress: TopicProgress; unit?: string }> = ({ progress, unit = 'soru' }) => (
  <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
    {progress.total.toLocaleString('tr-TR')} {unit} · {progress.solved.toLocaleString('tr-TR')} çözdüm ·{' '}
    <span className="text-emerald-700 dark:text-emerald-400">{progress.learned.toLocaleString('tr-TR')} öğrendim</span> ·{' '}
    <span className="text-amber-700 dark:text-amber-400">{progress.learning.toLocaleString('tr-TR')} öğreniyorum</span>
  </p>
);

const TopicRow: React.FC<{ label: string; progress: TopicProgress; unit?: string; onClick: () => void }> = ({
  label,
  progress,
  unit,
  onClick
}) => (
  <button
    onClick={onClick}
    className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
  >
    <div className="flex-1 min-w-0 space-y-1.5">
      <p className="font-semibold text-slate-900 dark:text-white">{label}</p>
      <ProgressBar progress={progress} />
      <ProgressNumbers progress={progress} unit={unit} />
    </div>
    <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
  </button>
);

export const StudyHubView: React.FC<StudyHubViewProps> = ({
  solvedQuestions,
  mistakeQuestionIds,
  knownVocabIds,
  pendingReviewVocabIds,
  onOpenTopic,
  onOpenVocab,
  onOpenWordLists
}) => {
  const vocab = getVocabProgress(YDS_VOCABULARY_LIST.length, knownVocabIds, pendingReviewVocabIds);

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-24 md:pb-8">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Çalış</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Bir konu seç. Önce yeni soruları çöz, sonra yanlışlarını tekrar et.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl divide-y divide-slate-200 dark:divide-slate-800 overflow-hidden">
        <TopicRow label="Kelime" progress={vocab} unit="kelime" onClick={onOpenVocab} />
        {onOpenWordLists && (
          <button
            onClick={onOpenWordLists}
            className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-sky-700 dark:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
          >
            <span className="flex-1">Listelerim: öğrendiklerim, hata yaptıklarım, hiç görmediklerim</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        )}
        {STUDY_TOPICS.map((t) => (
          <TopicRow
            key={t.id}
            label={t.label}
            progress={getTopicProgress(t.questions, solvedQuestions, mistakeQuestionIds)}
            onClick={() => onOpenTopic(t.id)}
          />
        ))}
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3">
        <span className="inline-flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Öğrendim: son denemede doğru
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Öğreniyorum: yanlış yaptım, henüz düzeltmedim
        </span>
      </p>
    </div>
  );
};
