import { YdsQuestion } from '../types';

const GROUPED_TYPES = new Set(['cloze', 'reading']);

/**
 * Cloze and reading questions come in groups that share one text, but the
 * source data only attaches the text to the first question of each group.
 * Copies it forward so every question can be shown (and reviewed) on its own.
 */
export const fillGroupPassages = (questions: YdsQuestion[]): YdsQuestion[] => {
  let last: { type: string; passage: string } | null = null;
  return questions.map((q) => {
    if (!GROUPED_TYPES.has(q.type)) {
      last = null;
      return q;
    }
    if (q.passage) {
      last = { type: q.type, passage: q.passage };
      return q;
    }
    return last && last.type === q.type ? { ...q, passage: last.passage } : q;
  });
};
