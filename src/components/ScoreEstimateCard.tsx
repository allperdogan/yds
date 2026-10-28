import React, { useMemo } from 'react';
import { Gauge, Timer, TrendingUp, ArrowRight } from 'lucide-react';
import { MockExamResult, QuestionType, UserStats } from '../types';
import { STUDY_TOPICS } from '../services/studyTopics';
import {
  EASY_PRACTICE,
  estimateOverallScore,
  MIN_ANSWERS_FOR_ESTIMATE,
  QUESTION_TYPE_LABELS,
  SolvedRecord
} from '../services/examInsights';

interface ScoreEstimateCardProps {
  solvedQuestions: UserStats['solvedQuestions'];
  mockExamResults: MockExamResult[];
  vocabFirstAnswers?: UserStats['vocabFirstAnswers'];
  onPracticeType: (type: QuestionType) => void;
}

const QUESTION_BY_ID = new Map(STUDY_TOPICS.flatMap((t) => t.questions).map((q) => [q.id, q]));

export const ScoreEstimateCard: React.FC<ScoreEstimateCardProps> = ({
  solvedQuestions,
  mockExamResults,
  vocabFirstAnswers = {},
  onPracticeType
}) => {
  const estimate = useMemo(() => {
    const records: SolvedRecord[] = [];
    Object.entries(solvedQuestions).forEach(([id, s]) => {
      const q = QUESTION_BY_ID.get(id);
      if (q)
        records.push({
          type: q.type,
          isCorrect: s.firstIsCorrect ?? s.isCorrect,
          seconds: s.seconds,
          ...(q.id.startsWith('bank_') ? EASY_PRACTICE : {})
        });
    });
    // Vocabulary drill answers stand in for the exam's vocabulary questions.
    // Drill distractors are easier than ÖSYM's, so these count like easy practice.
    Object.values(vocabFirstAnswers).forEach((isCorrect) =>
      records.push({ type: 'vocabulary', isCorrect, ...EASY_PRACTICE })
    );
    return estimateOverallScore(records, mockExamResults);
  }, [solvedQuestions, mockExamResults, vocabFirstAnswers]);

  if (!estimate.hasEnoughData) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-3">
        <Gauge className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-sm font-black text-slate-900 dark:text-white">Tahmini YDS puanın</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Gerçekçi bir tahmin için en az {MIN_ANSWERS_FOR_ESTIMATE} soru çözmelisin. Şu an {estimate.answered} soru var.
          </p>
        </div>
      </div>
    );
  }

  const reaches75 = estimate.scoreLow >= 75;
  const scoreColor = reaches75
    ? 'text-emerald-600 dark:text-emerald-400'
    : estimate.score >= 75
    ? 'text-amber-600 dark:text-amber-400'
    : 'text-rose-600 dark:text-rose-400';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4" data-testid="score-estimate-card">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Gauge className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            Tahmini YDS puanın
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {estimate.answered} cevaba göre, gerçek sınavdaki soru dağılımıyla hesaplandı.
          </p>
        </div>
        <div className="text-right">
          <p className={`text-3xl font-black ${scoreColor}`}>{Math.round(estimate.score)}</p>
          <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            büyük olasılıkla {estimate.scoreLow}–{estimate.scoreHigh} arası
          </p>
        </div>
      </div>

      {estimate.weakest && (
        <div className="rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 p-3 space-y-2">
          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            En çok puan kaybettiğin tip: {estimate.weakest.label} (75 hedefine göre yaklaşık {estimate.weakest.pointsLost} puan)
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300">{estimate.weakest.text}</p>
          <button
            onClick={() => onPracticeType(estimate.weakest!.type)}
            className="inline-flex items-center gap-1 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 px-3 py-1.5 rounded-lg"
          >
            {estimate.weakest.label} çalış <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {estimate.slowest && (
        <p className="text-xs text-amber-800 dark:text-amber-300 flex items-start gap-1.5">
          <Timer className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          {estimate.slowest.label} sorularında ortalaman {estimate.slowest.avgSeconds} sn, hedef {estimate.slowest.targetSeconds} sn. Bu hızla sınavda süre yetmeyebilir.
        </p>
      )}

      {estimate.untestedTypes.length > 0 && (
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Henüz hiç çözmediğin tipler tahmini düşük tutuyor:{' '}
          {estimate.untestedTypes.map((t) => QUESTION_TYPE_LABELS[t]).join(', ')}.
        </p>
      )}
    </div>
  );
};
