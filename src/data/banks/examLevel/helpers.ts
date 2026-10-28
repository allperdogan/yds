import { QuestionType, YdsQuestion } from '../../../types';

type Letter = 'A' | 'B' | 'C' | 'D' | 'E';
const LETTERS: Letter[] = ['A', 'B', 'C', 'D', 'E'];

export interface ExamItem {
  q: string;
  // The correct option comes first; options are shuffled per question id later.
  o: [string, string, string, string, string];
  // Why the answer is right, in Turkish.
  why: string;
  // Which distractor is the main trap and why, in Turkish.
  trap: string;
  tactic: string;
  passage?: string;
}

// A lone option letter ("D Type 3 yapısına kayar") becomes "D şıkkı ..." so the
// option shuffle, which only rewrites recognisable references, can follow it.
// Letters in lists ("B ve E", "B, C") are already recognised and stay as they are.
export const markOptionLetters = (text: string): string =>
  text.replace(
    /(^|[\s;:.(])([A-E])(?= )(?! (?:ve|veya|ile|ya da) [A-E]\b)(?! ?ş[ıi]k)/g,
    (m, pre: string, letter: string, offset: number, all: string) => {
      const before = all.slice(Math.max(0, offset - 6), offset + pre.length);
      if (/(?:[A-E](?:,| ve| veya| ile| ya da) ?)$/.test(before) || /[A-E], $/.test(before)) return m;
      return `${pre}${letter} şıkkı`;
    }
  );

/** Turns compact exam-level items into questions. Ids look like `xl_sc_001`. */
export const toQuestions = (
  prefix: string,
  type: QuestionType,
  items: ExamItem[],
  difficulty: YdsQuestion['difficulty'] = 'Zor'
): YdsQuestion[] =>
  items.map((it, i) => ({
    id: `xl_${prefix}_${String(i + 1).padStart(3, '0')}`,
    type,
    ...(it.passage ? { passage: it.passage } : {}),
    question: it.q,
    options: { A: it.o[0], B: it.o[1], C: it.o[2], D: it.o[3], E: it.o[4] },
    answer: 'A',
    explanation: `${markOptionLetters(it.why)} Doğru cevap A.`,
    tacticUsed: it.tactic,
    trapWarning: markOptionLetters(it.trap),
    difficulty
  }));

export interface IrrelevantItem {
  // Five numbered sentences, I-V.
  s: [string, string, string, string, string];
  // 1-based number of the sentence that breaks the flow (2-5: ÖSYM almost never uses I).
  odd: 2 | 3 | 4 | 5;
  why: string;
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export const toIrrelevantQuestions = (prefix: string, items: IrrelevantItem[]): YdsQuestion[] =>
  items.map((it, i) => ({
    id: `xl_${prefix}_${String(i + 1).padStart(3, '0')}`,
    type: 'irrelevant_sentence',
    question: it.s.map((sentence, k) => `(${ROMAN[k]}) ${sentence}`).join('\n'),
    options: { A: 'I', B: 'II', C: 'III', D: 'IV', E: 'V' },
    answer: LETTERS[it.odd - 1],
    explanation: `${it.why} Doğru cevap ${LETTERS[it.odd - 1]}.`,
    tacticUsed: 'Odak takibi: cümle konuyla ilgili ama paragrafın anlattığı yöne hizmet etmiyor',
    trapWarning: 'Akışı bozan cümle aynı konudan ve aynı anahtar kelimelerle bahseder; konu değil, odak değişir.',
    difficulty: 'Zor'
  }));
