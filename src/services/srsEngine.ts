import { SRSItem, SRSGrade } from '../types';

export class SRSEngine {
  private static STORAGE_KEY = 'yds_srs_data_v1';

  public static getTodayString(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  public static loadSRSData(): Record<string, SRSItem> {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error('Failed to load SRS data from storage', e);
    }
    return {};
  }

  public static saveSRSData(data: Record<string, SRSItem>): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save SRS data to storage', e);
    }
  }

  public static getOrCreateItem(wordId: string, allItems: Record<string, SRSItem>): SRSItem {
    if (allItems[wordId]) {
      return allItems[wordId];
    }
    const newItem: SRSItem = {
      id: `srs_${wordId}`,
      wordId,
      repetition: 0,
      interval: 0,
      easeFactor: 2.5,
      nextReviewDate: this.getTodayString(),
      state: 'new'
    };
    return newItem;
  }

  public static calculateNextReview(item: SRSItem, grade: SRSGrade): SRSItem {
    const today = new Date();
    let { repetition, interval, easeFactor } = item;

    // SM-2 Algorithm Implementation
    if (grade < 3) {
      // Failed recall
      repetition = 0;
      interval = 1;
    } else {
      // Successful recall
      if (repetition === 0) {
        interval = 1;
      } else if (repetition === 1) {
        interval = 3;
      } else if (repetition === 2) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetition += 1;
    }

    // Calculate new Ease Factor
    // EF' = EF + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02))
    const efDelta = 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02);
    easeFactor = Math.max(1.3, easeFactor + efDelta);

    // Calculate next review date
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + interval);
    const nextReviewDate = nextDate.toISOString().split('T')[0];

    // Determine card state
    let state: SRSItem['state'] = 'learning';
    if (repetition >= 4 && interval >= 14) {
      state = 'mastered';
    } else if (repetition > 0) {
      state = 'review';
    }

    return {
      ...item,
      repetition,
      interval,
      easeFactor,
      nextReviewDate,
      state,
      lastReviewed: this.getTodayString()
    };
  }

  public static isDueToday(item: SRSItem): boolean {
    const today = this.getTodayString();
    return item.nextReviewDate <= today;
  }
}
