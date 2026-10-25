import { UserStats } from '../types';

const STATS_KEY = 'yds_user_stats_v1';

export class StorageService {
  public static getInitialStats(): UserStats {
    const today = new Date().toISOString().split('T')[0];
    return {
      streak: 1,
      lastStudyDate: today,
      totalCardsReviewed: 0,
      masteredWordsCount: 0,
      totalQuestionsSolved: 0,
      totalCorrect: 0,
      totalWrong: 0,
      completedDays: [],
      bookmarkedWords: [],
      mistakeQuestionIds: [],
      knownVocabIds: [],
      pendingReviewVocabIds: [],
      solvedQuestions: {}
    };
  }

  public static loadStats(): UserStats {
    try {
      const raw = localStorage.getItem(STATS_KEY);
      if (raw) {
        const stats: UserStats = JSON.parse(raw);
        // Ensure new arrays exist for backward compatibility
        if (!stats.knownVocabIds) stats.knownVocabIds = [];
        if (!stats.pendingReviewVocabIds) stats.pendingReviewVocabIds = [];
        this.updateStreakIfNeeded(stats);
        return stats;
      }
    } catch (e) {
      console.error('Failed to load stats', e);
    }
    const fresh = this.getInitialStats();
    this.saveStats(fresh);
    return fresh;
  }

  public static saveStats(stats: UserStats): void {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save stats', e);
    }
  }

  private static updateStreakIfNeeded(stats: UserStats): void {
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastStudyDate === today) return;

    const last = new Date(stats.lastStudyDate);
    const curr = new Date(today);
    const diffTime = Math.abs(curr.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      stats.streak += 1;
    } else if (diffDays > 1) {
      stats.streak = 1; // streak reset
    }
    stats.lastStudyDate = today;
  }
}
