import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { App } from '../App';
import { VocabDrillView } from '../components/VocabDrillView';
import { StorageService, localDateKey } from '../services/storageService';

// Bugs found while walking through the app as a user.

const restoreCode = (code: string) => {
  fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
  fireEvent.click(screen.getByRole('menuitem', { name: /Yedekle/ }));
  fireEvent.click(screen.getByRole('button', { name: /📥 Geri Yükle \(İçe Aktar\)/i }));
  fireEvent.change(screen.getByPlaceholderText(/Kopyaladığınız kodu buraya yapıştırın/i), { target: { value: code } });
  fireEvent.click(screen.getByRole('button', { name: /İlerlemeyi Geri Yükle/i }));
};

describe('Fixes from the end-to-end walkthrough', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('fills fields missing from an older backup instead of breaking the screens', () => {
    const stats = StorageService.normalizeStats({ streak: 2, completedDays: [1] });
    expect(stats.streak).toBe(2);
    expect(stats.completedDays).toEqual([1]);
    expect(stats.knownVocabIds).toEqual([]);
    expect(stats.vocabReviews).toEqual({});
    expect(stats.mockExamResults).toEqual([]);
  });

  it('restores a backup made before word lists existed and keeps working', () => {
    const old = {
      version: 1,
      timestamp: '2025-01-01T00:00:00.000Z',
      stats: {
        streak: 2,
        lastStudyDate: '2025-01-01',
        totalCardsReviewed: 0,
        masteredWordsCount: 0,
        totalQuestionsSolved: 1,
        totalCorrect: 1,
        totalWrong: 0,
        completedDays: [1, 2],
        bookmarkedWords: [],
        mistakeQuestionIds: [],
        solvedQuestions: {}
      },
      srsData: {}
    };
    render(<App />);
    restoreCode(btoa(JSON.stringify(old)));

    expect(screen.getByRole('heading', { name: 'Bugün' })).toBeInTheDocument();
    expect(screen.getByText('2/30 gün tamamlandı')).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    expect(screen.getByRole('heading', { name: 'Çalış' })).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: /Hatalarım/ })[0]);
    expect(screen.getByRole('heading', { name: 'Hatalarım' })).toBeInTheDocument();
    expect(StorageService.loadStats().knownVocabIds).toEqual([]);
  });

  it('"Biliyorum, geç" counts as studying today', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /^Kelime/ }));
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /Biliyorum, geç/ }));
    });
    const saved = StorageService.loadStats();
    expect(saved.lastStudyDate).toBe(localDateKey());
    expect(saved.streak).toBe(1);
  });

  it('a word answered correctly in the drill leaves the mistakes list', () => {
    const onRemoveMistake = vi.fn();
    const props = {
      initialSource: 'curated' as const,
      knownVocabIds: [],
      pendingReviewVocabIds: ['w1'],
      onMarkKnown: vi.fn(),
      onMarkPendingReview: vi.fn(),
      onRemovePendingReview: vi.fn(),
      onRemoveMistake
    };
    const { unmount } = render(<VocabDrillView {...props} />);
    fireEvent.click(screen.getByRole('button', { name: /enhance/i }));
    expect(onRemoveMistake).toHaveBeenCalledWith('vq1');
    unmount();

    onRemoveMistake.mockClear();
    render(<VocabDrillView {...props} />);
    fireEvent.click(screen.getByRole('button', { name: /Biliyorum, geç/ }));
    expect(onRemoveMistake).toHaveBeenCalledWith('vq1');
  });
});
