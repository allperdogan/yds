import React from 'react';
import { ArrowRight, CalendarDays, Layers } from 'lucide-react';
import { MockExamResult, QuestionType, UserStats } from '../types';
import { STUDY_TOPICS, TopicProgress, getTopicProgress, getVocabProgress, topicForType } from '../services/studyTopics';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { ScoreEstimateCard } from './ScoreEstimateCard';
import { dueMistakeIds } from '../services/mistakeReview';
import { ProgressBar, ProgressNumbers } from './StudyHubView';

interface TodayViewProps {
  stats: UserStats;
  dueWordCount: number;
  onOpenTopic: (topicId: string, mode?: 'new' | 'review') => void;
  onOpenVocab: () => void;
  onOpenFlashcards: () => void;
  onOpenPlan: () => void;
}

const sumProgress = (items: TopicProgress[]): TopicProgress =>
  items.reduce(
    (acc, p) => ({
      total: acc.total + p.total,
      solved: acc.solved + p.solved,
      learned: acc.learned + p.learned,
      learning: acc.learning + p.learning
    }),
    { total: 0, solved: 0, learned: 0, learning: 0 }
  );

export const TodayView: React.FC<TodayViewProps> = ({ stats, dueWordCount, onOpenTopic, onOpenVocab, onOpenFlashcards, onOpenPlan }) => {
  const topicProgress = STUDY_TOPICS.map((t) => ({
    topic: t,
    progress: getTopicProgress(t.questions, stats.solvedQuestions, stats.mistakeQuestionIds)
  }));
  const questions = sumProgress(topicProgress.map((t) => t.progress));
  const vocab = getVocabProgress(YDS_VOCABULARY_LIST.length, stats.knownVocabIds, stats.pendingReviewVocabIds);

  // Continue where the student left off: mistakes due today first, then the
  // topic with the smallest share already solved.
  const due = new Set(dueMistakeIds(stats.mistakeQuestionIds, stats.mistakeReviews));
  const withMistakes = topicProgress
    .map((t) => ({ ...t, due: t.topic.questions.filter((q) => due.has(q.id)).length }))
    .filter((t) => t.due > 0)
    .sort((a, b) => b.due - a.due)[0];
  const leastSolved = topicProgress
    .filter((t) => t.progress.solved < t.progress.total)
    .sort((a, b) => a.progress.solved / a.progress.total - b.progress.solved / b.progress.total)[0];
  const next = withMistakes
    ? { topic: withMistakes.topic, mode: 'review' as const, text: `${withMistakes.topic.label}: bugün ${withMistakes.due} yanlışını tekrar et` }
    : leastSolved
    ? { topic: leastSolved.topic, mode: 'new' as const, text: `${leastSolved.topic.label}: yeni sorularla devam et` }
    : null;

  const mockResults: MockExamResult[] = stats.mockExamResults || [];

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-24 md:pb-8">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Bugün</h1>

      {next && (
        <button
          onClick={() => onOpenTopic(next.topic.id, next.mode)}
          className="w-full text-left flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl px-4 py-4"
        >
          <div className="flex-1">
            <p className="text-xs opacity-80">Sıradaki</p>
            <p className="font-semibold">{next.text}</p>
          </div>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-4">
        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Sorular</p>
          <ProgressBar progress={questions} />
          <ProgressNumbers progress={questions} />
        </div>
        <button onClick={onOpenVocab} className="w-full text-left space-y-1.5">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Kelimeler</p>
          <ProgressBar progress={vocab} />
          <ProgressNumbers progress={vocab} unit="kelime" />
        </button>
      </div>

      <ScoreEstimateCard
        solvedQuestions={stats.solvedQuestions}
        mockExamResults={mockResults}
        vocabFirstAnswers={stats.vocabFirstAnswers}
        onPracticeType={(type: QuestionType) => {
          const t = topicForType(type);
          if (t) onOpenTopic(t.id);
        }}
      />

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onOpenFlashcards}
          className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-left"
        >
          <Layers className="w-5 h-5 text-slate-500" />
          <span className="text-sm">
            <span className="block font-semibold text-slate-900 dark:text-white">Kelime tekrarı</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{dueWordCount} kelime bugün tekrar bekliyor</span>
          </span>
        </button>
        <button
          onClick={onOpenPlan}
          className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-left"
        >
          <CalendarDays className="w-5 h-5 text-slate-500" />
          <span className="text-sm">
            <span className="block font-semibold text-slate-900 dark:text-white">30 günlük program</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{stats.completedDays.length}/30 gün tamamlandı</span>
          </span>
        </button>
      </div>
    </div>
  );
};
