import { describe, it, expect } from 'vitest';
import { PARAGRAPH_TYPE_BANKS } from '../data/banks';
import { READING_PASSAGE_BANK } from '../data/banks/readingPassageBank';

describe('paragraph type banks', () => {
  it('has unique ids and complete options', () => {
    const ids = new Set(PARAGRAPH_TYPE_BANKS.map((q) => q.id));
    expect(ids.size).toBe(PARAGRAPH_TYPE_BANKS.length);
    for (const q of PARAGRAPH_TYPE_BANKS) {
      for (const k of ['A', 'B', 'C', 'D', 'E'] as const) expect(q.options[k]).toBeTruthy();
      expect(q.explanation).toBeTruthy();
    }
  });

  it('has at least 100 questions per type and no answer letter dominates', () => {
    const byType = new Map<string, string[]>();
    for (const q of PARAGRAPH_TYPE_BANKS) {
      byType.set(q.type, [...(byType.get(q.type) || []), q.answer]);
    }
    for (const [, answers] of byType) {
      expect(answers.length).toBeGreaterThanOrEqual(100);
      for (const letter of ['A', 'B', 'C', 'D', 'E']) {
        const share = answers.filter((a) => a === letter).length / answers.length;
        expect(share).toBeLessThan(0.3);
      }
    }
  });
});

describe('reading passage bank', () => {
  it('has four complete questions per passage', () => {
    const ids = new Set(READING_PASSAGE_BANK.flatMap((p) => [p.id, ...p.questions.map((q) => q.id)]));
    expect(ids.size).toBe(READING_PASSAGE_BANK.length * 5);
    for (const p of READING_PASSAGE_BANK) {
      expect(p.questions).toHaveLength(4);
      expect(p.passageText.length).toBeGreaterThan(500);
      for (const q of p.questions) {
        for (const k of ['A', 'B', 'C', 'D', 'E'] as const) expect(q.options[k]).toBeTruthy();
        // Explanations name the correct option, so this also catches broken letter remapping.
        expect(q.explanation).toContain(`${q.answer} şıkkı`);
      }
    }
  });

  it('spreads answers across letters', () => {
    const answers = READING_PASSAGE_BANK.flatMap((p) => p.questions.map((q) => q.answer));
    for (const letter of ['A', 'B', 'C', 'D', 'E']) {
      expect(answers.filter((a) => a === letter).length / answers.length).toBeLessThan(0.3);
    }
  });
});
