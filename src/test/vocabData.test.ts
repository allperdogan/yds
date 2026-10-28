import { describe, expect, it } from 'vitest';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { blankExample } from '../services/vocabBlank';
import { buildVocabOptions, VOCAB_OPTION_COUNT } from '../services/vocabOptions';
import type { YdsWord } from '../types';

describe('vocabulary data', () => {
  const byType: Record<string, YdsWord[]> = {};
  YDS_VOCABULARY_LIST.forEach((w) => {
    (byType[w.type] ||= []).push(w);
  });

  it('has unique ids and unique words', () => {
    const ids = YDS_VOCABULARY_LIST.map((w) => w.id);
    expect(new Set(ids).size).toBe(ids.length);
    const words = YDS_VOCABULARY_LIST.map((w) => w.word.toLowerCase());
    expect(new Set(words).size).toBe(words.length);
  });

  it('gives every word a mnemonic', () => {
    const missing = YDS_VOCABULARY_LIST.filter((w) => !(w.mnemonic || '').startsWith('💡'));
    expect(missing.map((w) => w.word)).toEqual([]);
  });

  it('can blank every word in its example sentence', () => {
    const failing = YDS_VOCABULARY_LIST.filter((w) => blankExample(w.word, w.exampleEn) === null);
    expect(failing.map((w) => w.word)).toEqual([]);
  });

  it('builds 5 distinct options including the answer', () => {
    YDS_VOCABULARY_LIST.forEach((w) => {
      const opts = buildVocabOptions(w, byType);
      expect(opts).toHaveLength(VOCAB_OPTION_COUNT);
      expect(new Set(opts.map((o) => o.toLowerCase())).size).toBe(VOCAB_OPTION_COUNT);
      expect(opts).toContain(w.word);
    });
  });
});

describe('blankExample', () => {
  it('handles irregular, inflected, separable and correlative forms', () => {
    expect(blankExample('bring about', 'Reforms brought about change.')).toBe('Reforms _____ change.');
    expect(blankExample('imply', 'The data implies a trend.')).toBe('The data _____ a trend.');
    expect(blankExample('galvanize', 'It galvanised the public.')).toBe('It _____ the public.');
    expect(blankExample('impose on', 'They imposed new taxes on imports.')).toBe('They _____ new taxes _____ imports.');
    expect(blankExample('not only but also', 'It is not only cheap but also safe.')).toBe('It is _____ cheap _____ safe.');
    expect(blankExample('mitigate', 'No match here.')).toBeNull();
  });
});
