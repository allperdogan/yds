import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService } from '../services/storageService';
import { UserStats } from '../types';

describe('StorageService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads fresh initial stats when storage is empty', () => {
    const stats = StorageService.loadStats();
    expect(stats.streak).toBe(0);
    expect(stats.knownVocabIds).toEqual([]);
    expect(stats.pendingReviewVocabIds).toEqual([]);
    expect(stats.totalQuestionsSolved).toBe(0);
  });

  it('saves and reloads stats accurately', () => {
    const initial = StorageService.getInitialStats();
    initial.knownVocabIds = ['w1', 'w2'];
    initial.pendingReviewVocabIds = ['w3'];
    initial.mistakeQuestionIds = ['q1'];
    initial.streak = 5;

    StorageService.saveStats(initial);
    const reloaded = StorageService.loadStats();

    expect(reloaded.knownVocabIds).toContain('w1');
    expect(reloaded.knownVocabIds).toContain('w2');
    expect(reloaded.pendingReviewVocabIds).toContain('w3');
    expect(reloaded.mistakeQuestionIds).toContain('q1');
    expect(reloaded.streak).toBe(5);
  });
});
