import { UserStats } from '../types';

const STATS_KEY = 'yds_user_stats_v1';

// Local calendar day (YYYY-MM-DD); toISOString would roll over at 03:00 in Turkey.
export const localDateKey = (d: Date = new Date()): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const daysBetween = (from: string, to: string): number => {
  const [fy, fm, fd] = from.split('-').map(Number);
  const [ty, tm, td] = to.split('-').map(Number);
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86400000);
};

export class StorageService {
  public static getInitialStats(): UserStats {
    return {
      streak: 0,
      lastStudyDate: '',
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
      solvedQuestions: {},
      mockExamResults: [],
      vocabFirstAnswers: {}
    };
  }

  public static loadStats(): UserStats {
    try {
      const raw = localStorage.getItem(STATS_KEY);
      if (raw) {
        const stats: UserStats = JSON.parse(raw);
        // Ensure new arrays and objects exist for backward compatibility
        if (!stats.knownVocabIds) stats.knownVocabIds = [];
        if (!stats.pendingReviewVocabIds) stats.pendingReviewVocabIds = [];
        if (!stats.bookmarkedWords) stats.bookmarkedWords = [];
        if (!stats.mistakeQuestionIds) stats.mistakeQuestionIds = [];
        if (!stats.completedDays) stats.completedDays = [];
        if (!stats.solvedQuestions) stats.solvedQuestions = {};
        if (!stats.mockExamResults) stats.mockExamResults = [];
        if (!stats.vocabFirstAnswers) stats.vocabFirstAnswers = {};
        this.expireStreakIfMissed(stats);
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

  // Opening the app is not studying: a missed day only clears the streak here.
  private static expireStreakIfMissed(stats: UserStats): void {
    if (stats.lastStudyDate && daysBetween(stats.lastStudyDate, localDateKey()) > 1) stats.streak = 0;
  }

  /** Counts today as a study day; call when a question, card or word is answered. */
  public static withStudyToday(stats: UserStats): UserStats {
    const today = localDateKey();
    if (stats.lastStudyDate === today) return stats;
    const gap = stats.lastStudyDate ? daysBetween(stats.lastStudyDate, today) : Infinity;
    return { ...stats, streak: gap === 1 ? stats.streak + 1 : 1, lastStudyDate: today };
  }
}
