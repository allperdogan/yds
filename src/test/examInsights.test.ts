import { describe, it, expect } from 'vitest';
import { analyzeExam, estimateScoreRange, getPaceStatus } from '../services/examInsights';
import { YDS_FULL_MOCK_EXAM_1 } from '../data/ydsFullMockExam';

describe('Exam insights', () => {
  it('estimates a score range around the raw score', () => {
    const { score, low, high } = estimateScoreRange(60, 80);
    expect(score).toBe(75);
    expect(low).toBeLessThan(75);
    expect(high).toBeGreaterThan(75);
  });

  it('flags pace warnings after the target and at 1.5x the target', () => {
    expect(getPaceStatus(40, 'grammar')).toBe('ok');
    expect(getPaceStatus(50, 'grammar')).toBe('warn');
    expect(getPaceStatus(70, 'grammar')).toBe('over');
  });

  it('recommends the weakest question types first and reports slow types', () => {
    const answers: Record<string, string> = {};
    const seconds: Record<string, number> = {};
    YDS_FULL_MOCK_EXAM_1.forEach((q) => {
      // Everything right except reading, which is left blank and solved slowly
      if (q.type !== 'reading') answers[q.id] = q.answer;
      seconds[q.id] = q.type === 'reading' ? 200 : 30;
    });
    const insights = analyzeExam(YDS_FULL_MOCK_EXAM_1, answers, seconds);
    expect(insights.score).toBe(75);
    expect(insights.recommendations[0].type).toBe('reading');
    expect(insights.slowTypes.map((t) => t.type)).toEqual(['reading']);
  });
});
