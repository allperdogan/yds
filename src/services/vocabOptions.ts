import { YdsWord } from '../types';
import { seededPermutation, shuffleArrayStable } from './optionShuffle';
import { blankExampleMatch } from './vocabBlank';
import { detectForm, inflectOption } from './vocabInflect';

export const VOCAB_OPTION_COUNT = 5;

// Curated distractors are mostly antonyms or look-alikes of the target and
// often mean the same thing as each other (ancient -> modern, recent,
// contemporary, novel). Four of them make the answer the odd one out, so at
// most two are used and the rest come from unrelated words of the same type.
export const MAX_CURATED_DISTRACTORS = 2;

type Relations = Map<string, Set<string>>;
const relationCache = new WeakMap<Record<string, YdsWord[]>, Relations>();

// Synonym links in both directions, built once per word list.
const getRelations = (byType: Record<string, YdsWord[]>): Relations => {
  let rel = relationCache.get(byType);
  if (rel) return rel;
  rel = new Map();
  const link = (a: string, b: string) => {
    if (!rel!.has(a)) rel!.set(a, new Set());
    rel!.get(a)!.add(b);
  };
  Object.values(byType).forEach((words) =>
    words.forEach((w) => {
      const word = w.word.toLowerCase();
      (w.synonyms || []).forEach((s) => {
        link(word, s.toLowerCase());
        link(s.toLowerCase(), word);
      });
    })
  );
  relationCache.set(byType, rel);
  return rel;
};

// Two words are too close when one lists the other as a synonym or they share one.
const tooClose = (a: string, b: string, rel: Relations): boolean => {
  if (a === b) return true;
  const ra = rel.get(a);
  const rb = rel.get(b);
  if (!ra || !rb) return false;
  if (ra.has(b) || rb.has(a)) return true;
  for (const s of ra) if (rb.has(s)) return true;
  return false;
};

export const pickVocabDistractors = (
  word: YdsWord,
  byType: Record<string, YdsWord[]>,
  // Extra filter for words that would not fit the blank's form (see buildVocabQuestion).
  accept: (candidate: string) => boolean = () => true
): string[] => {
  const needed = VOCAB_OPTION_COUNT - 1;
  const rel = getRelations(byType);
  const target = word.word.toLowerCase();
  // Synonyms would make a second correct option.
  const blocked = new Set([target, ...(word.synonyms || []).map((w) => w.toLowerCase())]);
  const curated = (word.distractors || []).filter((d) => !blocked.has(d.toLowerCase()));
  const curatedKeys = new Set(curated.map((d) => d.toLowerCase()));
  const picked: string[] = [];
  const fits = (candidate: string) => {
    const key = candidate.toLowerCase();
    return (
      accept(candidate) &&
      !blocked.has(key) &&
      !tooClose(key, target, rel) &&
      !picked.some((p) => tooClose(p.toLowerCase(), key, rel))
    );
  };

  for (const d of curated) {
    if (picked.length >= MAX_CURATED_DISTRACTORS) break;
    if (fits(d)) picked.push(d);
  }

  const sameType = byType[word.type] || [];
  const sameBand = sameType.filter((c) => c.frequency === word.frequency);
  for (const pool of [sameBand, sameType]) {
    for (const i of seededPermutation(pool.length, word.id)) {
      if (picked.length >= needed) break;
      const candidate = pool[i].word;
      if (!curatedKeys.has(candidate.toLowerCase()) && fits(candidate)) picked.push(candidate);
    }
  }
  // Very small pools: fall back to any remaining curated word.
  for (const d of curated) {
    if (picked.length >= needed) break;
    if (!picked.includes(d)) picked.push(d);
  }
  return picked;
};

export interface VocabQuestionParts {
  sentence: string;
  // Options as shown, in the same form the blank needs ("enhanced", "carried out").
  options: string[];
  answer: string;
  // Shown option -> dictionary form, for looking up meanings.
  baseOf: Record<string, string>;
}

const lexiconCache = new WeakMap<Record<string, YdsWord[]>, Map<string, YdsWord>>();
const getLexicon = (byType: Record<string, YdsWord[]>) => {
  let lex = lexiconCache.get(byType);
  if (!lex) {
    lex = new Map();
    Object.values(byType).forEach((words) => words.forEach((w) => lex!.set(w.word.toLowerCase(), w)));
    lexiconCache.set(byType, lex);
  }
  return lex;
};

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** The blanked example sentence with five options inflected to fit the blank. */
export const buildVocabQuestion = (word: YdsWord, byType: Record<string, YdsWord[]>): VocabQuestionParts => {
  const parts = word.word.split(/\s+/);
  const blank = blankExampleMatch(word.word, word.exampleEn);
  if (!blank) {
    const bases = shuffleArrayStable([word.word, ...pickVocabDistractors(word, byType)], `vocab_${word.id}`);
    return {
      sentence: `Anlamı "${word.meaning}" olan kelime: _____`,
      options: bases,
      answer: word.word,
      baseOf: Object.fromEntries(bases.map((b) => [b, b]))
    };
  }

  const start = blank.sentence.indexOf('_____');
  const before = word.exampleEn.slice(0, start);
  const form = detectForm(parts[0], blank.matched[0], word.type, before);
  const lex = getLexicon(byType);

  // A verb with its preposition ("succumb to", "inflict ... on"): blank only the
  // verb and leave the preposition in the sentence as the collocation clue.
  const verbOnly = word.type === 'verb' && parts.length > 1;
  const sentence = verbOnly
    ? word.exampleEn.slice(0, start) + '_____' + word.exampleEn.slice(start + blank.matched[0].length)
    : blank.sentence;

  const accept = (candidate: string) => {
    const words = candidate.split(/\s+/);
    // Single-word blanks take single-word verbs ("embarked on that..." is not English).
    if (word.type === 'verb' && !verbOnly && words.length > 1) return false;
    // A plural blank needs a countable noun: one whose own example or collocations use the plural.
    if (form === 's' && word.type === 'noun') {
      const entry = lex.get(candidate.toLowerCase());
      if (!entry) return true;
      const plural = new RegExp(`\\b${escapeRe(inflectOption(entry.word, 's', 'noun'))}\\b`, 'i');
      return plural.test(entry.exampleEn) || entry.collocations.some((c) => plural.test(c));
    }
    return true;
  };

  const bases = shuffleArrayStable([word.word, ...pickVocabDistractors(word, byType, accept)], `vocab_${word.id}`);
  const show = (base: string) => {
    if (base === word.word) {
      return verbOnly ? blank.matched[0].toLowerCase() : [blank.matched[0].toLowerCase(), ...parts.slice(1)].join(' ');
    }
    const inflected = inflectOption(base, form, word.type);
    return verbOnly ? inflected.split(/\s+/)[0] : inflected;
  };
  let options = bases.map(show);
  // An inflection that collides with another option is not worth the confusion.
  if (new Set(options.map((o) => o.toLowerCase())).size !== options.length) options = bases;
  return {
    sentence: options === bases ? blank.sentence : sentence,
    options,
    answer: options[bases.indexOf(word.word)],
    baseOf: Object.fromEntries(options.map((o, i) => [o, bases[i]]))
  };
};

/** Dictionary forms of the five options, in the order they are shown. */
export const buildVocabOptions = (word: YdsWord, byType: Record<string, YdsWord[]>): string[] => {
  const q = buildVocabQuestion(word, byType);
  return q.options.map((o) => q.baseOf[o]);
};
