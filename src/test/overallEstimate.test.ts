import { describe, it, expect } from 'vitest';
import { estimateOverallScore, YDS_EXAM_DISTRIBUTION, SolvedRecord } from '../services/examInsights';
import { QuestionType } from '../types';

const many = (type: QuestionType, correct: number, wrong: number, seconds?: number): SolvedRecord[] => [
  ...Array.from({ length: correct }, () => ({ type, isCorrect: true, seconds })),
  ...Array.from({ length: wrong }, () => ({ type, isCorrect: false, seconds }))
];

describe('estimateOverallScore', () => {
  it('uses the real 80-question distribution', () => {
    expect(Object.values(YDS_EXAM_DISTRIBUTION).reduce((a, b) => a + b, 0)).toBe(80);
  });

  it('needs enough answers before claiming an estimate', () => {
    expect(estimateOverallScore(many('grammar', 5, 0)).hasEnoughData).toBe(false);
  });

  it('does not trust a few lucky answers', () => {
    const e = estimateOverallScore(many('grammar', 3, 0));
    const grammar = e.types.find((t) => t.type === 'grammar')!;
    expect(grammar.rate).toBeLessThan(0.7);
  });

  it('gives a high score to a strong, broad record and a range around it', () => {
    const types = Object.keys(YDS_EXAM_DISTRIBUTION) as QuestionType[];
    const e = estimateOverallScore(types.flatMap((t) => many(t, 45, 5)));
    expect(e.hasEnoughData).toBe(true);
    expect(e.score).toBeGreaterThan(80);
    expect(e.scoreLow).toBeLessThan(e.score);
    expect(e.scoreHigh).toBeGreaterThan(e.score);
    expect(e.untestedTypes).toHaveLength(0);
  });

  it('names the type that costs the most points, weighted by exam share', () => {
    const types = Object.keys(YDS_EXAM_DISTRIBUTION) as QuestionType[];
    const records = types.flatMap((t) => (t === 'reading' ? many(t, 20, 30) : many(t, 40, 5)));
    expect(estimateOverallScore(records).weakest?.type).toBe('reading');
  });

  it('flags the slowest type against its target time', () => {
    const records = [...many('grammar', 20, 5, 40), ...many('cloze', 20, 5, 120)];
    const e = estimateOverallScore(records);
    expect(e.slowest?.type).toBe('cloze');
  });

  it('counts recent mock exam results', () => {
    const mock = { categoryBreakdown: { reading: { total: 20, correct: 18, wrong: 2 } } };
    const e = estimateOverallScore([], [mock]);
    expect(e.answered).toBe(20);
    expect(e.types.find((t) => t.type === 'reading')!.rate).toBeGreaterThan(0.75);
  });
});
