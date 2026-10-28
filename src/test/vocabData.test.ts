import { describe, expect, it } from 'vitest';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';
import { blankExample } from '../services/vocabBlank';
import { buildVocabOptions, buildVocabQuestion, MAX_CURATED_DISTRACTORS, VOCAB_OPTION_COUNT } from '../services/vocabOptions';
import { inflectOption } from '../services/vocabInflect';
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

describe('vocabulary questions', () => {
  const byType: Record<string, YdsWord[]> = {};
  YDS_VOCABULARY_LIST.forEach((w) => {
    (byType[w.type] ||= []).push(w);
  });
  const lexicon = new Set(YDS_VOCABULARY_LIST.map((w) => w.word.toLowerCase()));

  it('uses at most two curated distractors so the answer is not the odd one out', () => {
    for (const w of YDS_VOCABULARY_LIST) {
      const curated = new Set((w.distractors || []).map((d) => d.toLowerCase()));
      const used = buildVocabOptions(w, byType).filter((o) => curated.has(o.toLowerCase()));
      expect(used.length, w.word).toBeLessThanOrEqual(MAX_CURATED_DISTRACTORS);
    }
  });

  it('offers only real phrasal verbs as distractors', () => {
    const invented = ['piece up', 'iron up', 'map down', 'fend in', 'try back', 'sum off', 'zero up to'];
    for (const w of YDS_VOCABULARY_LIST.filter((x) => x.type === 'phrasal_verb')) {
      for (const d of w.distractors || []) expect(invented, w.word).not.toContain(d.toLowerCase());
    }
    const conj = YDS_VOCABULARY_LIST.find((w) => w.word === 'the moment')!;
    expect(conj.distractors).not.toContain('the same');
    expect(lexicon.size).toBeGreaterThan(2900);
  });

  it('shows the answer in the form the blank needs, with matching options', () => {
    for (const w of YDS_VOCABULARY_LIST) {
      const q = buildVocabQuestion(w, byType);
      expect(q.options, w.word).toHaveLength(VOCAB_OPTION_COUNT);
      expect(q.options, w.word).toContain(q.answer);
      expect(q.baseOf[q.answer], w.word).toBe(w.word);
      if (q.sentence.split('_____').length === 2 && !q.answer.includes(' ')) {
        expect(q.sentence.replace('_____', q.answer).toLowerCase(), w.word).toBe(w.exampleEn.toLowerCase());
      }
    }
    const hamper = buildVocabQuestion(YDS_VOCABULARY_LIST.find((w) => w.word === 'hamper')!, byType);
    expect(hamper.answer).toBe('hampered');
    expect(hamper.options.filter((o) => o.endsWith('ed')).length).toBeGreaterThanOrEqual(3);
    const succumb = buildVocabQuestion(YDS_VOCABULARY_LIST.find((w) => w.word === 'succumb to')!, byType);
    expect(succumb.answer).toBe('succumbed');
    expect(succumb.sentence).toContain('_____ to the');
  });

  it('inflects regular, irregular and phrasal verbs and plural nouns', () => {
    expect(inflectOption('carry out', 'ed', 'phrasal_verb')).toBe('carried out');
    expect(inflectOption('undermine', 'ed', 'verb')).toBe('undermined');
    expect(inflectOption('stop', 'ing', 'verb')).toBe('stopping');
    expect(inflectOption('occur', 'ed', 'verb')).toBe('occurred');
    expect(inflectOption('develop', 'ed', 'verb')).toBe('developed');
    expect(inflectOption('seek', 'ed', 'verb')).toBe('sought');
    expect(inflectOption('undertake', 'en', 'verb')).toBe('undertaken');
    expect(inflectOption('come out', 'en', 'phrasal_verb')).toBe('come out');
    expect(inflectOption('rely', 's', 'verb')).toBe('relies');
    expect(inflectOption('analysis', 's', 'noun')).toBe('analyses');
    expect(inflectOption('phenomenon', 's', 'noun')).toBe('phenomena');
    expect(inflectOption('policy', 's', 'noun')).toBe('policies');
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
