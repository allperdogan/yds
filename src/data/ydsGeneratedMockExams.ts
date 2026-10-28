import { GrammarDrillQuestion, YdsQuestion } from '../types';
import { placeAnswerAt } from '../services/optionShuffle';
import { YDS_GRAMMAR_DRILL_BANK } from './ydsGrammarBank';
import { CLOZE_BANK } from './banks/clozeBank';
import { TRANSLATION_BANK } from './banks/translationBank';
import { READING_PASSAGE_BANK } from './banks/readingPassageBank';
import {
  XL_DIALOGUE_QUESTIONS,
  XL_IRRELEVANT_SENTENCE_QUESTIONS,
  XL_PARAGRAPH_COMPLETION_QUESTIONS,
  XL_RESTATEMENT_QUESTIONS,
  XL_SENTENCE_COMPLETION_QUESTIONS,
  XL_VOCABULARY_QUESTIONS
} from './banks/examLevel';

// Mock exams 4-9 follow the real paper: 6 vocabulary, 10 grammar, 2 cloze texts,
// 10 sentence completion, 3 + 3 translation, 5 reading texts x 4, 5 dialogue,
// 4 restatement, 4 paragraph completion, 5 irrelevant sentence = 80 questions.
// Vocabulary and questions 27-36 and 63-80 are exam-level items written only for
// these exams; grammar, cloze, translation and reading come from the banks, and
// no question is used in more than one of these exams.
export const GENERATED_MOCK_COUNT = 6;

// The ten grammar questions cover the topics in the proportions ÖSYM uses.
const GRAMMAR_PLAN: Array<[GrammarDrillQuestion['grammarCategory'], number]> = [
  ['tenses_time_clauses', 2],
  ['modals', 1],
  ['reductions_participles', 1],
  ['relative_noun_clauses', 1],
  ['conjunctions_transitions', 2],
  ['inversion_conditionals', 1],
  ['prepositions', 2]
];

const slice = <T>(items: T[], exam: number, size: number): T[] => items.slice(exam * size, exam * size + size);

const grammarFor = (exam: number): YdsQuestion[] =>
  GRAMMAR_PLAN.flatMap(([category, count]) => {
    const pool = YDS_GRAMMAR_DRILL_BANK.filter((q) => q.grammarCategory === category);
    // Harder items first, the rest in bank order.
    const rank = { Zor: 0, 'İleri': 1, Orta: 2 } as const;
    const ordered = [...pool].sort((a, b) => rank[a.difficulty] - rank[b.difficulty]);
    return slice(ordered, exam, count);
  });

// Cloze questions come in groups of five that share a passage.
const CLOZE_GROUPS: YdsQuestion[][] = (() => {
  const groups = new Map<string, YdsQuestion[]>();
  CLOZE_BANK.forEach((q) => {
    const key = q.passage || q.id;
    groups.set(key, [...(groups.get(key) || []), q]);
  });
  return [...groups.values()].filter((g) => g.length === 5);
})();

const EN_TR = TRANSLATION_BANK.filter((q) => q.type === 'translation_en_tr');
const TR_EN = TRANSLATION_BANK.filter((q) => q.type === 'translation_tr_en');

// Use the last thirty reading texts, which students reach latest in practice.
const READING_SOURCE = READING_PASSAGE_BANK.slice(-GENERATED_MOCK_COUNT * 5);

const readingFor = (exam: number): YdsQuestion[] =>
  slice(READING_SOURCE, exam, 5).flatMap((p) =>
    p.questions.map((q) => ({ ...q, type: 'reading' as const, title: p.title, passage: p.passageText }))
  );

const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;

// Bank questions keep their answers; each exam-level question takes the letter
// used least so far (never four in a row), so the 80-answer key stays balanced.
const balanceAnswers = (questions: YdsQuestion[]): YdsQuestion[] => {
  const fixed = (q: YdsQuestion) => !q.id.startsWith('xl_') || q.type === 'irrelevant_sentence';
  const count: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  questions.filter(fixed).forEach((q) => (count[q.answer] += 1));
  const result: YdsQuestion[] = [];
  for (const q of questions) {
    if (fixed(q)) {
      result.push(q);
      continue;
    }
    const recent = result.slice(-3).map((r) => r.answer);
    const streak = recent.length === 3 && recent.every((a) => a === recent[0]) ? recent[0] : null;
    const target = [...LETTERS]
      .filter((l) => l !== streak && l !== result[result.length - 1]?.answer)
      .sort((a, b) => count[a] - count[b] || a.localeCompare(b))[0];
    count[target] += 1;
    result.push(placeAnswerAt(q, target));
  }
  return result;
};

const buildExam = (exam: number): YdsQuestion[] =>
  balanceAnswers([
    ...slice(XL_VOCABULARY_QUESTIONS, exam, 6),
    ...grammarFor(exam),
    ...slice(CLOZE_GROUPS, exam, 2).flat(),
    ...slice(XL_SENTENCE_COMPLETION_QUESTIONS, exam, 10),
    ...slice(EN_TR, exam, 3),
    ...slice(TR_EN, exam, 3),
    ...readingFor(exam),
    ...slice(XL_DIALOGUE_QUESTIONS, exam, 5),
    ...slice(XL_RESTATEMENT_QUESTIONS, exam, 4),
    ...slice(XL_PARAGRAPH_COMPLETION_QUESTIONS, exam, 4),
    ...slice(XL_IRRELEVANT_SENTENCE_QUESTIONS, exam, 5)
  ]);

export const GENERATED_MOCK_EXAMS: Record<string, YdsQuestion[]> = Object.fromEntries(
  Array.from({ length: GENERATED_MOCK_COUNT }, (_, i) => [`exam_${i + 4}`, buildExam(i)])
);

export const GENERATED_MOCK_EXAMS_LIST = Array.from({ length: GENERATED_MOCK_COUNT }, (_, i) => ({
  id: `exam_${i + 4}`,
  title: `${i + 4}. Deneme: Sınav Seviyesi Deneme`,
  badge: 'Sınav Seviyesi',
  description: 'Kelime, cümle tamamlama ve 63-80 arası sorular gerçek sınav uzunluğunda, yalnızca bu deneme için yazıldı.',
  questionCount: 80,
  difficulty: 'ÖSYM Düzeyi'
}));

// Shown once under the exam list.
export const GENERATED_MOCK_NOTE =
  '4-9. denemelerde dil bilgisi, cloze, çeviri ve okuma soruları alıştırma bankalarından seçildi; alıştırmada çözdüğün bir soruyla karşılaşabilirsin.';
