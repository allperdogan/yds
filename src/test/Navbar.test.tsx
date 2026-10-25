import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { UserStats } from '../types';

describe('Navbar Functional & Button Tests', () => {
  const dummyStats: UserStats = {
    streak: 5,
    lastStudyDate: '2026-10-25',
    completedDays: [1, 2],
    masteredWordsCount: 12,
    totalCardsReviewed: 35,
    bookmarkedWords: ['w1'],
    mistakeQuestionIds: ['q1', 'q2'],
    solvedQuestions: {},
    totalQuestionsSolved: 10,
    totalCorrect: 8,
    totalWrong: 2,
    knownVocabIds: ['w1', 'w2'],
    pendingReviewVocabIds: ['w3']
  };

  it('renders brand and clicking it navigates to vocab_drill', () => {
    const setActiveTab = vi.fn();
    render(
      <Navbar
        stats={dummyStats}
        darkMode={false}
        setDarkMode={vi.fn()}
        onOpenInstallModal={vi.fn()}
        activeTab="daily"
        setActiveTab={setActiveTab}
      />
    );

    const brand = screen.getByText(/Master/i);
    fireEvent.click(brand);
    expect(setActiveTab).toHaveBeenCalledWith('vocab_drill');
  });

  it('renders all 4 navigation buttons and clicking each switches active tab', () => {
    const setActiveTab = vi.fn();
    render(
      <Navbar
        stats={dummyStats}
        darkMode={false}
        setDarkMode={vi.fn()}
        onOpenInstallModal={vi.fn()}
        activeTab="vocab_drill"
        setActiveTab={setActiveTab}
      />
    );

    // Click Paragraf & Cümle Deşifre
    const readingBtn = screen.getByText(/Paragraf & Cümle Deşifre/i);
    fireEvent.click(readingBtn);
    expect(setActiveTab).toHaveBeenCalledWith('reading_lab');

    // Click 80 Soruluk Deneme
    const mockBtn = screen.getByText(/80 Soruluk Deneme/i);
    fireEvent.click(mockBtn);
    expect(setActiveTab).toHaveBeenCalledWith('mock_exam');

    // Click Taktikler
    const tacticsBtn = screen.getByText(/Taktikler/i);
    fireEvent.click(tacticsBtn);
    expect(setActiveTab).toHaveBeenCalledWith('tactics');

    // Click 30 Günlük Plan
    const dailyBtn = screen.getByText(/30 Günlük Plan/i);
    fireEvent.click(dailyBtn);
    expect(setActiveTab).toHaveBeenCalledWith('daily');

    // Click Hatalarım
    const mistakesBtn = screen.getByText(/Hatalarım \(2\)/i);
    fireEvent.click(mistakesBtn);
    expect(setActiveTab).toHaveBeenCalledWith('mistakes');

    // Click Kelime
    const vocabBtn = screen.getByText(/Kelime/i);
    fireEvent.click(vocabBtn);
    expect(setActiveTab).toHaveBeenCalledWith('vocab_drill');
  });

  it('renders user streak counter correctly', () => {
    render(
      <Navbar
        stats={dummyStats}
        darkMode={false}
        setDarkMode={vi.fn()}
        onOpenInstallModal={vi.fn()}
        activeTab="vocab_drill"
        setActiveTab={vi.fn()}
      />
    );

    expect(screen.getByText('5 Gün')).toBeInTheDocument();
  });

  it('clicking mobile/PWA install button triggers onOpenInstallModal', () => {
    const onOpenInstallModal = vi.fn();
    render(
      <Navbar
        stats={dummyStats}
        darkMode={false}
        setDarkMode={vi.fn()}
        onOpenInstallModal={onOpenInstallModal}
        activeTab="vocab_drill"
        setActiveTab={vi.fn()}
      />
    );

    const installBtn = screen.getByTitle(/iPhone \/ Bilgisayar Kurulumu/i);
    fireEvent.click(installBtn);
    expect(onOpenInstallModal).toHaveBeenCalledTimes(1);
  });

  it('clicking dark mode toggle button toggles state', () => {
    const setDarkMode = vi.fn();
    render(
      <Navbar
        stats={dummyStats}
        darkMode={false}
        setDarkMode={setDarkMode}
        onOpenInstallModal={vi.fn()}
        activeTab="vocab_drill"
        setActiveTab={vi.fn()}
      />
    );

    // Button contains Moon icon when false
    const toggleButtons = screen.getAllByRole('button');
    const darkModeBtn = toggleButtons[toggleButtons.length - 1];
    fireEvent.click(darkModeBtn);
    expect(setDarkMode).toHaveBeenCalledWith(true);
  });
});
