import { describe, it, expect } from 'vitest';
import { PARAGRAPH_TYPE_BANKS } from '../data/banks';

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
