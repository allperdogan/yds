// Deterministic option shuffling.
// The source data was written with most correct answers in option A, so the
// options are reordered per question (seeded by the question id) to remove that
// pattern. The same id always produces the same order, so saved answers, the
// mistakes list and the mock exam report stay consistent across sessions.
// Letter references inside explanations ("C şıkkı", "(B ve E elenir)",
// "Doğru cevap A") are rewritten to follow the new order.

type Letter = 'A' | 'B' | 'C' | 'D' | 'E';
const LETTERS: Letter[] = ['A', 'B', 'C', 'D', 'E'];

type OptionSet = Record<Letter, string>;

interface ShufflableQuestion {
  id?: string;
  type?: string;
  options: OptionSet;
  answer: Letter;
}

const hashString = (str: string): number => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

// mulberry32
const seededRandom = (seed: number) => {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const seededPermutation = (length: number, seedKey: string): number[] => {
  const rand = seededRandom(hashString(seedKey));
  const order = Array.from({ length }, (_, i) => i);
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

/** Returns a copy of `items` in a stable pseudo-random order for `seedKey`. */
export const shuffleArrayStable = <T>(items: T[], seedKey: string): T[] =>
  seededPermutation(items.length, seedKey).map((i) => items[i]);

// Options that must keep their order (sentence numbers I-V, or ordered numbers).
const ROMAN_OPTIONS = /^\(?(I|II|III|IV|V)\)?\.?$/;
const isOrderedOptionSet = (options: OptionSet): boolean =>
  LETTERS.every((l) => ROMAN_OPTIONS.test((options[l] || '').trim()));

// Private-use placeholders so a letter is never remapped twice.
const PLACEHOLDER_BASE = 0xe000;
const IDENTITY = { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' } as Record<Letter, Letter>;
const toPlaceholder = (letter: string, map: Record<Letter, Letter>) =>
  String.fromCharCode(PLACEHOLDER_BASE + LETTERS.indexOf(map[letter as Letter]));
const fromPlaceholders = (text: string) =>
  text.replace(/[\ue000-\ue004]/g, (c) => LETTERS[c.charCodeAt(0) - PLACEHOLDER_BASE]);

const TR_LOWER = 'a-zçğıöşüâîû';
const LIST_SEP = `(?:,\\s*| ve | veya | ile | ya da |\\/|-(?=[A-E]\\b))`;
const LETTER_LIST = `[A-E](?:${LIST_SEP}[A-E])*`;

const LETTER_PATTERNS: RegExp[] = [
  // "(C)", "(B ve E elenir)", "(B, C, D, E)", "(D şıkkı)"
  new RegExp(`\\((${LETTER_LIST})(?=(?:\\s+(?:ş[ıi]k|seçenek|elen|elendi)[^)]*)?\\))`, 'g'),
  // "A ve C şıkları", "D şıkkı", "B seçeneği", "E'deki"
  new RegExp(`(?<![A-Za-z])(${LETTER_LIST})(?=\\s*(?:ş[ıi]k|seçenek|opsiyon)|['’][${TR_LOWER}])`, 'g'),
  // "Doğru cevap A", "Doğru Şık: D", "Cevap: B"
  new RegExp(`((?:[Cc]evap|[Yy]an[ıi]t|[Şş][ıi]k)(?:[ıi])?\\s*:?\\s*)([A-E])(?![A-Za-z])`, 'g'),
  // "A) negligible", "- B)"
  new RegExp(`(^|[\\n"“'‘:;,\\-–(]\\s*)([A-E])(?=\\))`, 'g'),
  // "B, C, D olumsuzdur", "C, D ve E konu dışı"
  new RegExp(`(?<![A-Za-z\\[\\]])([A-E](?:${LIST_SEP}[A-E])+)(?![A-Za-z\\]])`, 'g'),
  // 'A ("complete failure")'
  new RegExp(`(?<![A-Za-z])([A-E])(?= \\(["'“])`, 'g')
];

// Maps every letter in a list ("B, C ve E") and keeps the list alphabetical.
const remapList = (list: string, map: Record<Letter, Letter>): string => {
  const mapped = (list.match(/[A-E]/g) || []).map((l) => map[l as Letter]).sort();
  let i = 0;
  return list.replace(/[A-E]/g, () => toPlaceholder(mapped[i++], IDENTITY));
};

// "A'dır" is read "a", the others "be/ce/de/e": keep Turkish vowel harmony after remapping.
const BACK_TO_FRONT: Record<string, string> = { ı: 'i', a: 'e', u: 'ü', o: 'ö' };
const FRONT_TO_BACK: Record<string, string> = { i: 'ı', e: 'a', ü: 'u', ö: 'o' };
const fixSuffixHarmony = (text: string): string =>
  text.replace(/(?<![A-Za-z])([A-E])(['’])([a-zçğıöşü]+)/g, (_m, l: string, apos: string, suffix: string) => {
    const table = l === 'A' ? FRONT_TO_BACK : BACK_TO_FRONT;
    // The relative suffix "-ki" never changes ("A'daki", "B'deki").
    const keepKi = suffix.length > 2 && suffix.endsWith('ki');
    const head = keepKi ? suffix.slice(0, -2) : suffix;
    return l + apos + head.replace(/[ıaouieüö]/g, (v) => table[v] || v) + (keepKi ? 'ki' : '');
  });

export const remapLetterReferences = (text: string, map: Record<Letter, Letter>): string => {
  let out = text;
  out = out.replace(LETTER_PATTERNS[0], (_m, list: string) => '(' + remapList(list, map));
  out = out.replace(LETTER_PATTERNS[1], (list: string) => remapList(list, map));
  out = out.replace(LETTER_PATTERNS[2], (_m, prefix: string, l: string) => prefix + toPlaceholder(l, map));
  out = out.replace(LETTER_PATTERNS[3], (_m, prefix: string, l: string) => prefix + toPlaceholder(l, map));
  out = out.replace(LETTER_PATTERNS[4], (list: string) => remapList(list, map));
  out = out.replace(LETTER_PATTERNS[5], (l: string) => toPlaceholder(l, map));
  return fixSuffixHarmony(fromPlaceholders(out));
};

const TEXT_FIELDS = ['explanation', 'trapWarning', 'tacticUsed', 'trapExplanation', 'fastMethodTrick'] as const;

/** Reorders a question's A-E options and keeps answer and explanations in sync. */
export const shuffleQuestionOptions = <T extends ShufflableQuestion>(q: T, seedKey?: string): T => {
  if (!q || !q.options || isOrderedOptionSet(q.options)) return q;
  const key = seedKey || q.id || q.options.A;
  const order = seededPermutation(LETTERS.length, key);

  // New slot i shows the option that was originally at LETTERS[order[i]].
  const newOptions = {} as OptionSet;
  const oldToNew = {} as Record<Letter, Letter>;
  order.forEach((oldIdx, newIdx) => {
    newOptions[LETTERS[newIdx]] = q.options[LETTERS[oldIdx]];
    oldToNew[LETTERS[oldIdx]] = LETTERS[newIdx];
  });

  const result: T = { ...q, options: newOptions, answer: oldToNew[q.answer] };
  const record = result as unknown as Record<string, unknown>;
  TEXT_FIELDS.forEach((field) => {
    const value = record[field];
    if (typeof value === 'string') record[field] = remapLetterReferences(value, oldToNew);
  });
  if (Array.isArray(record.solutionSteps)) {
    record.solutionSteps = (record.solutionSteps as string[]).map((s) =>
      typeof s === 'string' ? remapLetterReferences(s, oldToNew) : s
    );
  }
  return result;
};

export const shuffleQuestionList = <T extends ShufflableQuestion>(list: T[]): T[] =>
  list.map((q) => shuffleQuestionOptions(q));
