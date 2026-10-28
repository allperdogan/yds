// Puts vocabulary options in the same form as the word the blank removed,
// so a blank that needs "enhanced" offers "enhanced / undermined / ...",
// not the bare dictionary forms. ÖSYM always gives options that fit the
// sentence grammatically; only the meaning should decide the answer.
import { IRREGULAR } from './vocabBlank';
import { WordType } from '../types';

export type WordForm = 'base' | 's' | 'ed' | 'en' | 'ing';

const IRREGULAR_PLURALS: Record<string, string> = {
  phenomenon: 'phenomena', criterion: 'criteria', stimulus: 'stimuli', nucleus: 'nuclei', fungus: 'fungi',
  curriculum: 'curricula', medium: 'media', bacterium: 'bacteria', datum: 'data', child: 'children',
  man: 'men', woman: 'women', foot: 'feet', tooth: 'teeth', mouse: 'mice', life: 'lives', leaf: 'leaves',
  half: 'halves', shelf: 'shelves', thief: 'thieves', wolf: 'wolves', knife: 'knives', wife: 'wives',
  hero: 'heroes', potato: 'potatoes', tomato: 'tomatoes', echo: 'echoes', veto: 'vetoes'
};

// Two-syllable verbs stressed on the last syllable double their final consonant.
const DOUBLING = new Set([
  'admit', 'commit', 'compel', 'control', 'deter', 'emit', 'equip', 'expel', 'forbid', 'incur', 'occur',
  'omit', 'patrol', 'permit', 'prefer', 'propel', 'rebel', 'recur', 'refer', 'regret', 'submit', 'transfer',
  'transmit', 'confer', 'defer', 'infer', 'acquit', 'excel', 'repel', 'dispel', 'abhor', 'outwit', 'upset'
]);

const doublesFinal = (verb: string): boolean => {
  if (DOUBLING.has(verb)) return true;
  // One-syllable consonant-vowel-consonant verbs: stop -> stopped, plan -> planned
  const syllables = verb.match(/[aeiouy]+/g) || [];
  return syllables.length === 1 && /[^aeiou][aeiou][bdgklmnprt]$/.test(verb);
};

const regularPast = (v: string): string => {
  if (v.endsWith('e')) return `${v}d`;
  if (/[^aeiou]y$/.test(v)) return `${v.slice(0, -1)}ied`;
  if (doublesFinal(v)) return `${v}${v.slice(-1)}ed`;
  if (v.endsWith('c')) return `${v}ked`;
  return `${v}ed`;
};

const presentParticiple = (v: string): string => {
  if (v.endsWith('ie')) return `${v.slice(0, -2)}ying`;
  if (v.endsWith('e') && !/(ee|ye|oe)$/.test(v)) return `${v.slice(0, -1)}ing`;
  if (doublesFinal(v)) return `${v}${v.slice(-1)}ing`;
  if (v.endsWith('c')) return `${v}king`;
  return `${v}ing`;
};

const addS = (w: string): string => {
  if (IRREGULAR_PLURALS[w]) return IRREGULAR_PLURALS[w];
  if (w.endsWith('sis')) return `${w.slice(0, -3)}ses`;
  if (/(s|x|z|ch|sh)$/.test(w)) return `${w}es`;
  if (/[^aeiou]y$/.test(w)) return `${w.slice(0, -1)}ies`;
  return `${w}s`;
};

const thirdPerson = (v: string): string => {
  if (v === 'have') return 'has';
  if (v === 'be') return 'is';
  if (/(s|x|z|ch|sh|o)$/.test(v)) return `${v}es`;
  if (/[^aeiou]y$/.test(v)) return `${v.slice(0, -1)}ies`;
  return `${v}s`;
};

const inflectWord = (w: string, form: WordForm, isNoun: boolean): string => {
  const lower = w.toLowerCase();
  if (form === 'base') return w;
  if (form === 's') return isNoun ? addS(lower) : thirdPerson(lower);
  if (form === 'ing') return presentParticiple(lower);
  const irregular = IRREGULAR[lower];
  if (irregular && irregular.length) {
    return form === 'en' ? irregular[irregular.length - 1] : irregular[0];
  }
  return regularPast(lower);
};

/** Inflects a word or phrasal verb ("carry out" -> "carried out"); only the first word changes. */
export const inflectOption = (option: string, form: WordForm, type: WordType): string => {
  if (form === 'base') return option;
  const [first, ...rest] = option.split(/\s+/);
  return [inflectWord(first, form, type === 'noun'), ...rest].join(' ');
};

const PERFECT_OR_PASSIVE = /\b(have|has|had|having|be|is|are|was|were|been|being|get|gets|got|gotten)\s+(?:\w+ly\s+|not\s+|also\s+|already\s+|just\s+|never\s+|recently\s+|since\s+)*$/i;

/**
 * Which form of the head word the example used. `before` is the sentence
 * text up to the blank, used to tell a past tense ("charged") from a past
 * participle ("was charged") when a distractor is irregular.
 */
export const detectForm = (head: string, matched: string, type: WordType, before: string): WordForm => {
  const h = head.toLowerCase();
  const m = matched.toLowerCase();
  if (m === h || m.replace(/is/g, 'iz') === h.replace(/is/g, 'iz')) return 'base';
  if (type !== 'verb' && type !== 'phrasal_verb' && type !== 'noun') return 'base';
  const irregular = IRREGULAR[h] || [];
  const i = irregular.indexOf(m);
  if (i >= 0) {
    if (irregular.length === 2) return i === 0 ? 'ed' : 'en';
    return PERFECT_OR_PASSIVE.test(before) ? 'en' : 'ed';
  }
  if (type === 'noun') return m.endsWith('s') ? 's' : 'base';
  if (m.endsWith('ing')) return 'ing';
  if (m.endsWith('ed') || m.endsWith('d')) return PERFECT_OR_PASSIVE.test(before) ? 'en' : 'ed';
  if (m.endsWith('s')) return 's';
  return 'base';
};
