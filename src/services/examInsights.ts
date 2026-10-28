import { QuestionType, YdsQuestion } from '../types';

// Target time per question type (seconds). Hitting these leaves ~60 minutes of
// the 180-minute exam for checking flagged questions.
export const PACE_TARGET_SECONDS: Record<QuestionType, number> = {
  vocabulary: 45,
  grammar: 45,
  cloze: 60,
  sentence_completion: 60,
  translation_en_tr: 60,
  translation_tr_en: 60,
  reading: 90,
  dialogue: 60,
  restatement: 75,
  paragraph_completion: 90,
  irrelevant_sentence: 75
};

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  vocabulary: 'Kelime',
  grammar: 'Dil Bilgisi',
  cloze: 'Cloze Test',
  sentence_completion: 'Cümle Tamamlama',
  translation_en_tr: 'Çeviri (EN-TR)',
  translation_tr_en: 'Çeviri (TR-EN)',
  reading: 'Okuma',
  dialogue: 'Diyalog',
  restatement: 'Anlamca En Yakın',
  paragraph_completion: 'Paragraf Tamamlama',
  irrelevant_sentence: 'Anlamı Bozan Cümle'
};

// Share of questions a 75+ candidate typically gets right per type (60 of 80 overall).
export const TARGET_RATE_FOR_75: Record<QuestionType, number> = {
  vocabulary: 5 / 6,
  grammar: 0.8,
  cloze: 0.8,
  sentence_completion: 0.7,
  translation_en_tr: 5 / 6,
  translation_tr_en: 5 / 6,
  reading: 0.7,
  dialogue: 0.8,
  restatement: 0.75,
  paragraph_completion: 0.75,
  irrelevant_sentence: 0.6
};

const RECOMMENDATIONS: Record<QuestionType, string> = {
  vocabulary: 'Her gün programdaki günün kelime grubunu (~100 kelime) antrenmanla çöz, kartlarla tekrar et; kelimeyi eş anlamlısı ve edatıyla birlikte çalış.',
  grammar: 'Tense uyumu, bağlaçlar ve edat kalıplarında günde 20 gramer sorusu çöz.',
  cloze: 'Boşluktan önceki ve sonraki cümleyi oku; bağlacın yönünü (+/-) belirle, sonra şıklara bak.',
  sentence_completion: 'Önce bağlacı ve zaman uyumunu kontrol et, sonra anlamca uymayanları ele.',
  translation_en_tr: 'Ana yüklemi ve özneyi eşleştir; yüklemi tutmayan şıkları ilk 15 saniyede ele.',
  translation_tr_en: 'Türkçe cümlenin yüklemini ve çatısını (etken/edilgen) bul, İngilizce şıklarda ara.',
  reading: 'Günde en az 3 akademik paragraf; önce soruyu oku, sonra metinde kanıt cümlesini bul.',
  dialogue: 'Boşluktan sonraki repliği oku; cevap çoğu zaman oradaki tepkiye göre seçilir.',
  restatement: 'Bağlaç, zaman ve kesinlik derecesini (may/must, all/some) birebir karşılaştır.',
  paragraph_completion: 'Boşluktan önceki ve sonraki cümleyle konu ve zamir bağını kur.',
  irrelevant_sentence: 'Her cümlenin konusunu iki kelimeyle özetle; akışı kıran cümleyi bul.'
};

export interface TypeInsight {
  type: QuestionType;
  label: string;
  total: number;
  correct: number;
  wrong: number;
  empty: number;
  rate: number;
  targetRate: number;
  pointsBelowTarget: number;
  avgSeconds: number | null;
  targetSeconds: number;
  overTime: boolean;
}

export interface ExamInsights {
  score: number;
  scoreLow: number;
  scoreHigh: number;
  types: TypeInsight[];
  recommendations: Array<{ type: QuestionType; label: string; text: string; pointsBelowTarget: number }>;
  slowTypes: TypeInsight[];
}

const POINTS_PER_QUESTION = 1.25;
const round1 = (n: number) => Math.round(n * 10) / 10;

/**
 * Estimated YDS score with a range. A single 80-question mock is a sample, so
 * the range is one standard error of the correct-answer proportion either side.
 */
export const estimateScoreRange = (correct: number, total: number) => {
  const score = round1(correct * POINTS_PER_QUESTION);
  if (total === 0) return { score, low: score, high: score };
  const p = correct / total;
  const margin = Math.sqrt(total * p * (1 - p)) * POINTS_PER_QUESTION;
  return {
    score,
    low: Math.max(0, Math.round(score - margin)),
    high: Math.min(100, Math.round(score + margin))
  };
};

export const analyzeExam = (
  questions: YdsQuestion[],
  answers: Record<string, string>,
  secondsSpent: Record<string, number> = {}
): ExamInsights => {
  const byType = new Map<QuestionType, TypeInsight & { timeSum: number; timed: number }>();

  questions.forEach((q) => {
    let entry = byType.get(q.type);
    if (!entry) {
      entry = {
        type: q.type,
        label: QUESTION_TYPE_LABELS[q.type] || q.type,
        total: 0,
        correct: 0,
        wrong: 0,
        empty: 0,
        rate: 0,
        targetRate: TARGET_RATE_FOR_75[q.type] ?? 0.75,
        pointsBelowTarget: 0,
        avgSeconds: null,
        targetSeconds: PACE_TARGET_SECONDS[q.type] ?? 60,
        overTime: false,
        timeSum: 0,
        timed: 0
      };
      byType.set(q.type, entry);
    }
    entry.total += 1;
    const ans = answers[q.id];
    if (!ans) entry.empty += 1;
    else if (ans === q.answer) entry.correct += 1;
    else entry.wrong += 1;

    const spent = secondsSpent[q.id];
    if (spent && spent > 0) {
      entry.timeSum += spent;
      entry.timed += 1;
    }
  });

  const types: TypeInsight[] = Array.from(byType.values()).map(({ timeSum, timed, ...t }) => {
    const rate = t.total ? t.correct / t.total : 0;
    const avgSeconds = timed ? Math.round(timeSum / timed) : null;
    return {
      ...t,
      rate,
      pointsBelowTarget: round1(Math.max(0, t.targetRate * t.total - t.correct) * POINTS_PER_QUESTION),
      avgSeconds,
      overTime: avgSeconds !== null && avgSeconds > t.targetSeconds
    };
  });

  const correct = types.reduce((sum, t) => sum + t.correct, 0);
  const { score, low, high } = estimateScoreRange(correct, questions.length);

  const recommendations = types
    .filter((t) => t.pointsBelowTarget > 0)
    .sort((a, b) => b.pointsBelowTarget - a.pointsBelowTarget)
    .slice(0, 3)
    .map((t) => ({ type: t.type, label: t.label, text: RECOMMENDATIONS[t.type], pointsBelowTarget: t.pointsBelowTarget }));

  const slowTypes = types
    .filter((t) => t.overTime)
    .sort((a, b) => (b.avgSeconds || 0) / b.targetSeconds - (a.avgSeconds || 0) / a.targetSeconds);

  return { score, scoreLow: low, scoreHigh: high, types, recommendations, slowTypes };
};

export type PaceStatus = 'ok' | 'warn' | 'over';

/** 'warn' once the target is passed, 'over' at 1.5x the target. */
export const getPaceStatus = (elapsedSeconds: number, type: QuestionType): PaceStatus => {
  const target = PACE_TARGET_SECONDS[type] ?? 60;
  if (elapsedSeconds > target * 1.5) return 'over';
  if (elapsedSeconds > target) return 'warn';
  return 'ok';
};

export const formatSeconds = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m} dk ${sec.toString().padStart(2, '0')} sn` : `${sec} sn`;
};

// Number of questions per type in a real 80-question YDS paper.
export const YDS_EXAM_DISTRIBUTION: Record<QuestionType, number> = {
  vocabulary: 6,
  grammar: 10,
  cloze: 10,
  sentence_completion: 10,
  translation_en_tr: 3,
  translation_tr_en: 3,
  reading: 20,
  dialogue: 5,
  restatement: 4,
  paragraph_completion: 4,
  irrelevant_sentence: 5
};

export interface SolvedRecord {
  type: QuestionType;
  isCorrect: boolean;
  seconds?: number;
  // How much the answer counts as evidence (default 1).
  weight?: number;
  // Share of a correct answer credited towards the exam rate (default 1).
  credit?: number;
}

// The generated practice banks (ids bank_*) and vocabulary drill questions are easier
// than real YDS items: they count half as much and a correct answer earns 85%
// credit, so a perfect record there cannot alone predict a perfect exam.
export const EASY_PRACTICE = { weight: 0.5, credit: 0.85 };

export interface OverallTypeEstimate {
  type: QuestionType;
  label: string;
  answered: number;
  rate: number;
  examQuestions: number;
  pointsLost: number;
  avgSeconds: number | null;
  targetSeconds: number;
  overTime: boolean;
}

export interface OverallEstimate {
  answered: number;
  hasEnoughData: boolean;
  score: number;
  scoreLow: number;
  scoreHigh: number;
  types: OverallTypeEstimate[];
  untestedTypes: QuestionType[];
  weakest: { type: QuestionType; label: string; text: string; pointsLost: number } | null;
  slowest: OverallTypeEstimate | null;
}

// With little data a type's rate is pulled towards this prior instead of
// trusting a lucky 3/3. Practice is untimed and repeatable, so the prior sits
// below 50% to keep the estimate on the cautious side.
const PRIOR_RATE = 0.4;
const PRIOR_WEIGHT = 4;
// A mock exam answer is timed and unseen, so it counts three times.
const MOCK_WEIGHT = 3;
const RECENT_MOCKS = 3;
export const MIN_ANSWERS_FOR_ESTIMATE = 20;

/**
 * Realistic YDS score from everything answered so far: per-type accuracy from
 * practice and recent mock exams, weighted by how many questions of each type
 * appear in the real exam.
 */
export const estimateOverallScore = (
  solved: SolvedRecord[],
  mockResults: Array<{ examId?: string; categoryBreakdown: Record<string, { total: number; correct: number; wrong: number }> }> = []
): OverallEstimate => {
  const acc = new Map<QuestionType, { weight: number; correct: number; answered: number; timeSum: number; timed: number }>();
  const get = (t: QuestionType) => {
    let e = acc.get(t);
    if (!e) {
      e = { weight: 0, correct: 0, answered: 0, timeSum: 0, timed: 0 };
      acc.set(t, e);
    }
    return e;
  };

  solved.forEach((s) => {
    if (!(s.type in YDS_EXAM_DISTRIBUTION)) return;
    const e = get(s.type);
    const w = s.weight ?? 1;
    e.weight += w;
    e.answered += 1;
    if (s.isCorrect) e.correct += w * (s.credit ?? 1);
    if (s.seconds && s.seconds > 0) {
      e.timeSum += s.seconds;
      e.timed += 1;
    }
  });

  // A retaken mock has been seen before, so only the first sitting of each counts.
  const seenExams = new Set<string>();
  const freshMocks = mockResults.filter((m) => {
    if (!m.examId) return true;
    if (seenExams.has(m.examId)) return false;
    seenExams.add(m.examId);
    return true;
  });

  freshMocks.slice(-RECENT_MOCKS).forEach((m) => {
    Object.entries(m.categoryBreakdown || {}).forEach(([type, b]) => {
      if (!(type in YDS_EXAM_DISTRIBUTION) || !b.total) return;
      const e = get(type as QuestionType);
      e.weight += b.total * MOCK_WEIGHT;
      e.correct += b.correct * MOCK_WEIGHT;
      e.answered += b.total;
    });
  });

  let expectedCorrect = 0;
  let variance = 0;
  const types: OverallTypeEstimate[] = (Object.keys(YDS_EXAM_DISTRIBUTION) as QuestionType[]).map((type) => {
    const n = YDS_EXAM_DISTRIBUTION[type];
    const e = acc.get(type);
    const weight = e ? e.weight : 0;
    const rate = ((e ? e.correct : 0) + PRIOR_RATE * PRIOR_WEIGHT) / (weight + PRIOR_WEIGHT);
    expectedCorrect += n * rate;
    // Uncertainty in the rate itself plus the luck of a single sitting.
    variance += (n * n * rate * (1 - rate)) / (weight + PRIOR_WEIGHT) + n * rate * (1 - rate);
    const avgSeconds = e && e.timed ? Math.round(e.timeSum / e.timed) : null;
    const targetSeconds = PACE_TARGET_SECONDS[type];
    return {
      type,
      label: QUESTION_TYPE_LABELS[type],
      answered: e ? e.answered : 0,
      rate,
      examQuestions: n,
      pointsLost: round1(Math.max(0, TARGET_RATE_FOR_75[type] - rate) * n * POINTS_PER_QUESTION),
      avgSeconds,
      targetSeconds,
      overTime: avgSeconds !== null && avgSeconds > targetSeconds
    };
  });

  const answered = types.reduce((sum, t) => sum + t.answered, 0);
  const score = round1(expectedCorrect * POINTS_PER_QUESTION);
  const margin = Math.sqrt(variance) * POINTS_PER_QUESTION;

  const weakestType = types
    .filter((t) => t.pointsLost > 0)
    .sort((a, b) => b.pointsLost - a.pointsLost)[0];
  const slowest = types
    .filter((t) => t.overTime)
    .sort((a, b) => (b.avgSeconds || 0) / b.targetSeconds - (a.avgSeconds || 0) / a.targetSeconds)[0];

  return {
    answered,
    hasEnoughData: answered >= MIN_ANSWERS_FOR_ESTIMATE,
    score,
    scoreLow: Math.max(0, Math.round(score - margin)),
    scoreHigh: Math.min(100, Math.round(score + margin)),
    types,
    untestedTypes: types.filter((t) => t.answered === 0).map((t) => t.type),
    weakest: weakestType
      ? { type: weakestType.type, label: weakestType.label, text: RECOMMENDATIONS[weakestType.type], pointsLost: weakestType.pointsLost }
      : null,
    slowest: slowest || null
  };
};
