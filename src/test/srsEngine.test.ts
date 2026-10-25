import { describe, it, expect } from 'vitest';
import { SRSEngine } from '../services/srsEngine';
import { SRSItem } from '../types';

describe('SRSEngine (SM-2 Algorithm)', () => {
  it('initializes a new card correctly', () => {
    const item = SRSEngine.getOrCreateItem('w1', {});
    expect(item.wordId).toBe('w1');
    expect(item.repetition).toBe(0);
    expect(item.interval).toBe(0);
    expect(item.easeFactor).toBe(2.5);
    expect(item.state).toBe('new');
  });

  it('resets interval and repetition when grade < 3 (failure/again)', () => {
    const existing: SRSItem = {
      id: 'srs_w1',
      wordId: 'w1',
      repetition: 3,
      interval: 10,
      easeFactor: 2.5,
      nextReviewDate: '2026-10-25',
      state: 'review'
    };

    const updated = SRSEngine.calculateNextReview(existing, 0); // 0 = Again
    expect(updated.repetition).toBe(0);
    expect(updated.interval).toBe(1);
    expect(updated.state).toBe('learning');
    expect(updated.easeFactor).toBeLessThan(2.5);
  });

  it('progresses intervals correctly on successful recall (grades 3, 4, 5)', () => {
    const item = SRSEngine.getOrCreateItem('w2', {});

    // First successful review (repetition 0 -> 1, interval = 1)
    const rev1 = SRSEngine.calculateNextReview(item, 4);
    expect(rev1.repetition).toBe(1);
    expect(rev1.interval).toBe(1);

    // Second review (repetition 1 -> 2, interval = 3)
    const rev2 = SRSEngine.calculateNextReview(rev1, 4);
    expect(rev2.repetition).toBe(2);
    expect(rev2.interval).toBe(3);

    // Third review (repetition 2 -> 3, interval = 6)
    const rev3 = SRSEngine.calculateNextReview(rev2, 4);
    expect(rev3.repetition).toBe(3);
    expect(rev3.interval).toBe(6);
  });

  it('enforces ease factor minimum boundary at 1.3', () => {
    let item = SRSEngine.getOrCreateItem('w3', {});
    // Repeated low grades should never push EF below 1.3
    for (let i = 0; i < 15; i++) {
      item = SRSEngine.calculateNextReview(item, 0);
    }
    expect(item.easeFactor).toBeGreaterThanOrEqual(1.3);
  });

  it('marks card as mastered when repetition >= 4 and interval >= 14', () => {
    const mature: SRSItem = {
      id: 'srs_w4',
      wordId: 'w4',
      repetition: 3,
      interval: 8,
      easeFactor: 2.5,
      nextReviewDate: '2026-10-25',
      state: 'review'
    };

    const updated = SRSEngine.calculateNextReview(mature, 5); // 5 = Easy
    expect(updated.repetition).toBe(4);
    expect(updated.interval).toBeGreaterThanOrEqual(14);
    expect(updated.state).toBe('mastered');
  });

  it('correctly determines if a card is due today', () => {
    const today = SRSEngine.getTodayString();
    const itemDue: SRSItem = {
      id: '1', wordId: 'w1', repetition: 1, interval: 1, easeFactor: 2.5,
      nextReviewDate: today, state: 'review'
    };
    const itemFuture: SRSItem = {
      id: '2', wordId: 'w2', repetition: 1, interval: 7, easeFactor: 2.5,
      nextReviewDate: '2099-01-01', state: 'review'
    };

    expect(SRSEngine.isDueToday(itemDue)).toBe(true);
    expect(SRSEngine.isDueToday(itemFuture)).toBe(false);
  });
});
