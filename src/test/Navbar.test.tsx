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

  it('renders brand and clicking it navigates to today', () => {
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

    fireEvent.click(screen.getByText('Hazırlık'));
    expect(setActiveTab).toHaveBeenCalledWith('today');
  });

  it('renders the 4 main sections and clicking each switches active tab', () => {
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

    fireEvent.click(screen.getByRole('button', { name: 'Bugün' }));
    expect(setActiveTab).toHaveBeenCalledWith('today');
    fireEvent.click(screen.getByRole('button', { name: 'Çalış' }));
    expect(setActiveTab).toHaveBeenCalledWith('study');
    fireEvent.click(screen.getByRole('button', { name: 'Deneme' }));
    expect(setActiveTab).toHaveBeenCalledWith('mock_exam');
    // Mistake count is shown next to the label
    fireEvent.click(screen.getByRole('button', { name: /Hatalarım\s*2/ }));
    expect(setActiveTab).toHaveBeenCalledWith('mistakes');
  });

  it('keeps the parent section highlighted on sub-screens', () => {
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
    expect(screen.getByRole('button', { name: 'Çalış' }).className).toContain('shadow-sm');
    expect(screen.getByRole('button', { name: 'Bugün' }).className).not.toContain('shadow-sm');
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

    fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
    fireEvent.click(screen.getByRole('menuitem', { name: /Telefona \/ bilgisayara kur/i }));
    expect(onOpenInstallModal).toHaveBeenCalledTimes(1);
    // Picking an action closes the menu
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
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

    fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
    fireEvent.click(screen.getByRole('menuitemcheckbox', { name: /Karanlık mod/i }));
    expect(setDarkMode).toHaveBeenCalledWith(true);
  });
});
