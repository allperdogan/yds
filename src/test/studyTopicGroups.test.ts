import { describe, it, expect } from 'vitest';
import { getTopicById, questionGroupLabel } from '../services/studyTopics';
import { countDueWords } from '../services/vocabReview';

describe('study topic groups', () => {
  it('keeps each grammar subject together instead of jumping between them', () => {
    const labels = getTopicById('grammar')!.questions.map((q) => questionGroupLabel(q));
    const runs = labels.filter((l, i) => l !== labels[i - 1]);
    expect(new Set(runs).size).toBe(runs.length);
    expect(labels.every(Boolean)).toBe(true);
  });

  it('labels reading questions with their passage', () => {
    const q = getTopicById('reading')!.questions[0];
    expect(questionGroupLabel(q)).toBe(q.title);
  });

  it('counts missed and due words once', () => {
    const now = 1000;
    expect(
      countDueWords(
        {
          a: { seen: 1, wrong: 1, box: 0, due: now, lastSeen: now },
          b: { seen: 2, wrong: 0, box: 2, due: now + 1, lastSeen: now }
        },
        ['a', 'c'],
        now
      )
    ).toBe(2);
  });
});
