import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SyncModal } from '../components/SyncModal';
import { UserStats, SRSItem } from '../types';
import { SyncService } from '../services/syncService';

describe('SyncModal Functional & Button Tests', () => {
  const dummyStats: UserStats = {
    streak: 7,
    lastStudyDate: '2026-10-26',
    totalCardsReviewed: 50,
    masteredWordsCount: 15,
    totalQuestionsSolved: 30,
    totalCorrect: 25,
    totalWrong: 5,
    completedDays: [1, 2],
    bookmarkedWords: ['w1'],
    mistakeQuestionIds: [],
    knownVocabIds: ['w1'],
    pendingReviewVocabIds: [],
    solvedQuestions: {}
  };

  const dummySRS: Record<string, SRSItem> = {
    w1: {
      id: 'w1',
      wordId: 'w1',
      interval: 7,
      repetition: 3,
      easeFactor: 2.5,
      nextReviewDate: '2026-11-02',
      state: 'mastered'
    }
  };

  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    stats: dummyStats,
    srsData: dummySRS,
    onRestore: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders stats summary and export tab with backup code', () => {
    render(<SyncModal {...defaultProps} />);

    expect(screen.getByText(/İlerleme Yedekleme & Cihaz Eşitleme/i)).toBeInTheDocument();
    expect(screen.getByText(/7 Gün/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Kodu Kopyala/i })).toBeInTheDocument();
  });

  it('switches between tabs (Export, Import, Guide)', () => {
    render(<SyncModal {...defaultProps} />);

    // Switch to Import Tab
    const importTabBtn = screen.getByRole('button', { name: /📥 Geri Yükle \(İçe Aktar\)/i });
    fireEvent.click(importTabBtn);
    expect(screen.getByPlaceholderText(/Kopyaladığınız kodu buraya yapıştırın\.\.\./i)).toBeInTheDocument();

    // Switch to Guide Tab
    const guideTabBtn = screen.getByRole('button', { name: /🌐 7\/24 Dışarıda Açma/i });
    fireEvent.click(guideTabBtn);
    expect(screen.getByText(/En Kolay Yol: Netlify Drop/i)).toBeInTheDocument();
  });

  it('handles restoring progress when valid code is submitted', () => {
    const onRestore = vi.fn();
    render(<SyncModal {...defaultProps} onRestore={onRestore} />);

    // Switch to Import Tab
    const importTabBtn = screen.getByRole('button', { name: /📥 Geri Yükle \(İçe Aktar\)/i });
    fireEvent.click(importTabBtn);

    const validCode = SyncService.generateBackupCode(dummyStats, dummySRS);
    const textarea = screen.getByPlaceholderText(/Kopyaladığınız kodu buraya yapıştırın\.\.\./i);
    fireEvent.change(textarea, { target: { value: validCode } });

    const restoreBtn = screen.getByRole('button', { name: /İlerlemeyi Geri Yükle/i });
    fireEvent.click(restoreBtn);

    expect(onRestore).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/başarıyla geri yüklendi/i)).toBeInTheDocument();
  });
});
