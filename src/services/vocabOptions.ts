import { YdsWord } from '../types';
import { seededPermutation, shuffleArrayStable } from './optionShuffle';

export const VOCAB_OPTION_COUNT = 5;

// Curated distractors first, then words of the same part of speech
// (same frequency band first) so no option stands out by form.
export const pickVocabDistractors = (word: YdsWord, byType: Record<string, YdsWord[]>): string[] => {
  const needed = VOCAB_OPTION_COUNT - 1;
  // Synonyms would make a second correct option.
  const seen = new Set([word.word, ...(word.synonyms || [])].map((w) => w.toLowerCase()));
  const picked: string[] = [];
  const add = (candidate: string) => {
    const key = candidate.toLowerCase();
    if (picked.length < needed && !seen.has(key)) {
      seen.add(key);
      picked.push(candidate);
    }
  };

  (word.distractors || []).forEach(add);

  const sameType = byType[word.type] || [];
  const sameBand = sameType.filter((c) => c.frequency === word.frequency);
  for (const pool of [sameBand, sameType]) {
    if (picked.length >= needed) break;
    for (const i of seededPermutation(pool.length, word.id)) {
      if (picked.length >= needed) break;
      add(pool[i].word);
    }
  }
  return picked;
};

export const buildVocabOptions = (word: YdsWord, byType: Record<string, YdsWord[]>): string[] =>
  shuffleArrayStable([word.word, ...pickVocabDistractors(word, byType)], `vocab_${word.id}`);
