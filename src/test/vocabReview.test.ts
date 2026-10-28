import { describe, it, expect } from 'vitest';
import { buildWordLists, orderForStudy, recordWordReview, requeueAfter } from '../services/vocabReview';

const DAY = 24 * 60 * 60 * 1000;
const NOW = 1_800_000_000_000;

describe('vocabReview', () => {
  it('pushes a known word further away with each correct answer and resets on a miss', () => {
    const r1 = recordWordReview(undefined, true, NOW);
    expect(r1.box).toBe(1);
    expect(r1.due).toBe(NOW + DAY);
    const r2 = recordWordReview(r1, true, NOW);
    expect(r2.due).toBe(NOW + 3 * DAY);
    const r3 = recordWordReview(r2, false, NOW);
    expect(r3).toMatchObject({ box: 0, wrong: 1, seen: 3, due: NOW });
  });

  it('orders missed words first, then due reviews, then new words, and not-due known words last', () => {
    const ids = ['known', 'new1', 'missed', 'due', 'new2', 'legacyKnown'];
    const order = orderForStudy(ids, (x) => x, {
      reviews: {
        known: { seen: 3, wrong: 0, box: 3, due: NOW + 5 * DAY, lastSeen: NOW },
        missed: { seen: 1, wrong: 1, box: 0, due: NOW, lastSeen: NOW },
        due: { seen: 1, wrong: 0, box: 1, due: NOW - DAY, lastSeen: NOW - DAY }
      },
      knownIds: ['known', 'due', 'legacyKnown'],
      pendingIds: []
    }, NOW);
    expect(order).toEqual(['missed', 'due', 'new1', 'new2', 'known', 'legacyKnown']);
  });

  it('keeps list order when there is no history', () => {
    const ids = ['a', 'b', 'c'];
    expect(orderForStudy(ids, (x) => x, { reviews: {}, knownIds: [], pendingIds: [] }, NOW)).toEqual(ids);
  });

  it('brings a missed question back a few places later, once', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const once = requeueAfter(list, 0, 'a', (x, y) => x === y);
    expect(once).toEqual(['a', 'b', 'c', 'd', 'e', 'a', 'f', 'g']);
    expect(requeueAfter(once, 1, 'a', (x, y) => x === y)).toBe(once);
    expect(requeueAfter(['a', 'b'], 1, 'b', (x, y) => x === y)).toEqual(['a', 'b', 'b']);
  });

  it('splits words into learned, mistakes and never seen', () => {
    const lists = buildWordLists(['w1', 'w2', 'w3', 'w4', 'w5'], {
      reviews: {
        w1: { seen: 2, wrong: 1, box: 1, due: NOW, lastSeen: NOW },
        w4: { seen: 3, wrong: 3, box: 0, due: NOW, lastSeen: NOW }
      },
      knownIds: ['w1', 'w2'],
      pendingIds: ['w4'],
      firstAnswers: { w5: false }
    });
    expect(lists.learned).toEqual(['w1', 'w2']);
    expect(lists.mistakes).toEqual(['w4', 'w1', 'w5']);
    expect(lists.unseen).toEqual(['w3']);
  });
});
