import { describe, it, expect } from 'vitest';
import { SyncService, BackupPayload } from '../services/syncService';
import { UserStats, SRSItem } from '../types';

describe('SyncService Unit Tests', () => {
  const dummyStats: UserStats = {
    streak: 3,
    lastStudyDate: '2026-10-26',
    totalCardsReviewed: 15,
    masteredWordsCount: 5,
    totalQuestionsSolved: 20,
    totalCorrect: 18,
    totalWrong: 2,
    completedDays: [1],
    bookmarkedWords: ['w1', 'w2'],
    mistakeQuestionIds: ['q1'],
    knownVocabIds: ['w1', 'w2'],
    pendingReviewVocabIds: [],
    solvedQuestions: {}
  };

  const dummySRS: Record<string, SRSItem> = {
    w1: {
      id: 'w1',
      wordId: 'w1',
      interval: 4,
      repetition: 2,
      easeFactor: 2.5,
      nextReviewDate: '2026-10-30',
      state: 'learning'
    }
  };

  it('generates a valid portable base64 backup code and restores it accurately', () => {
    const code = SyncService.generateBackupCode(dummyStats, dummySRS);
    expect(typeof code).toBe('string');
    expect(code.length).toBeGreaterThan(20);

    const restored: BackupPayload | null = SyncService.restoreFromBackupCode(code);
    expect(restored).not.toBeNull();
    expect(restored?.stats.streak).toBe(3);
    expect(restored?.stats.totalCorrect).toBe(18);
    expect(restored?.stats.bookmarkedWords).toEqual(['w1', 'w2']);
    expect(restored?.srsData['w1'].interval).toBe(4);
  });

  it('returns null on invalid backup code', () => {
    const invalid = SyncService.restoreFromBackupCode('invalid_not_base64_code!!!');
    expect(invalid).toBeNull();
  });
});
