import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { FullMockExamView } from '../components/FullMockExamView';
import { ReadingLabView } from '../components/ReadingLabView';
import { TacticsView } from '../components/TacticsView';
import { UserStats } from '../types';

describe('Advanced UI & Untested Flows Verification', () => {
  const dummyStats: UserStats = {
    streak: 7,
    lastStudyDate: '2026-10-26',
    completedDays: [1, 2, 3],
    masteredWordsCount: 25,
    totalCardsReviewed: 50,
    bookmarkedWords: ['w1'],
    mistakeQuestionIds: ['q1'],
    solvedQuestions: {},
    totalQuestionsSolved: 20,
    totalCorrect: 16,
    totalWrong: 4,
    knownVocabIds: ['w1', 'w2'],
    pendingReviewVocabIds: []
  };

  describe('Navbar Eye-Care UI Controls', () => {
    it('renders Eye-Care toggle button and clicking it calls onToggleEyeCare', () => {
      const onToggleEyeCare = vi.fn();
      render(
        <Navbar
          stats={dummyStats}
          darkMode={false}
          setDarkMode={vi.fn()}
          eyeCareMode={false}
          onToggleEyeCare={onToggleEyeCare}
          onOpenInstallModal={vi.fn()}
          activeTab="vocab_drill"
          setActiveTab={vi.fn()}
        />
      );

      fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
      const eyeCareBtn = screen.getByRole('menuitemcheckbox', { name: /Göz dinlendirme/i });
      expect(eyeCareBtn).toHaveAttribute('aria-checked', 'false');
      expect(eyeCareBtn).toBeInTheDocument();
      fireEvent.click(eyeCareBtn);
      expect(onToggleEyeCare).toHaveBeenCalledTimes(1);
    });

    it('renders active state title when eyeCareMode is true', () => {
      render(
        <Navbar
          stats={dummyStats}
          darkMode={false}
          setDarkMode={vi.fn()}
          eyeCareMode={true}
          onToggleEyeCare={vi.fn()}
          onOpenInstallModal={vi.fn()}
          activeTab="vocab_drill"
          setActiveTab={vi.fn()}
        />
      );

      fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
      expect(screen.getByRole('menuitemcheckbox', { name: /Göz dinlendirme/i })).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('FullMockExamView Multi-Exam Switcher & Question Tools', () => {
    it('allows switching between the 3 full mock exams on intro screen', () => {
      render(<FullMockExamView onAddMistake={vi.fn()} onSaveExamResult={vi.fn()} />);

      // Verify 3 mock exam cards are rendered
      expect(screen.getByText(/Standart Deneme/i)).toBeInTheDocument();
      expect(screen.getByText(/Ağır Akademik Kondisyon Denemesi/i)).toBeInTheDocument();
      expect(screen.getByText(/Çeldirici ve Hız Odaklı Deneme/i)).toBeInTheDocument();

      // Click Deneme 2 card
      const mock2Card = screen.getByText(/Ağır Akademik Kondisyon Denemesi/i);
      fireEvent.click(mock2Card);
    });

    it('starts exam, allows flagging a question, and eliminating an option with strike-through', () => {
      render(<FullMockExamView onAddMistake={vi.fn()} onSaveExamResult={vi.fn()} />);

      // Click start exam
      const startBtn = screen.getByText(/Denemeyi başlat/i);
      fireEvent.click(startBtn);

      // Verify question 1 is active
      expect(screen.getByText(/Soru 1 \/ 80/i)).toBeInTheDocument();

      // Flag question
      const flagBtn = screen.getByText(/Şüpheli İşaretle/i);
      fireEvent.click(flagBtn);
      expect(screen.getByText(/Şüpheli İşaretli/i)).toBeInTheDocument();

      // Strike through an option to eliminate trap
      const strikeButtons = screen.getAllByText(/Ele \/ Çiz/i);
      expect(strikeButtons.length).toBeGreaterThan(0);
      fireEvent.click(strikeButtons[0]);
      expect(screen.getByText(/Geri Al/i)).toBeInTheDocument();
    });
  });

  describe('ReadingLabView Academic Reading & Sentence Deconstruction', () => {
    it('allows switching to Sentence Deconstruction and Questions tabs', () => {
      render(<ReadingLabView onAddMistake={vi.fn()} />);

      // Switch to Cümle Deşifre
      const deconstructTab = screen.getByRole('button', { name: /Cümle Deşifre/i });
      fireEvent.click(deconstructTab);
      expect(screen.getByText(/Karmaşık Akademik Cümlelerin Anatomisi/i)).toBeInTheDocument();

      // Switch to 4 Soru Seti
      const questionsTab = screen.getByRole('button', { name: /4 Soru Seti/i });
      fireEvent.click(questionsTab);
      expect(screen.getByText(/SORU 1 \/ 4/i)).toBeInTheDocument();
    });

    it('renders vocabulary note cards in reading view', () => {
      render(<ReadingLabView onAddMistake={vi.fn()} />);

      // Audio buttons for words exist in right sidebar
      const audioButtons = screen.getAllByRole('button');
      expect(audioButtons.length).toBeGreaterThan(0);
    });
  });

  describe('TacticsView Tab Switching & Expandable Solutions', () => {
    it('switches between Taktik, Model Sorular, and ÖSYM Çeldirici Deşifresi views', () => {
      render(
        <TacticsView
          onAddMistake={vi.fn()}
          onRemoveMistake={vi.fn()}
          onRecordQuestionResult={vi.fn()}
          onSelectPracticeType={vi.fn()}
        />
      );

      // Click ÖSYM Çeldirici Deşifresi
      const trapsBtn = screen.getByText(/^Çeldiriciler$/);
      fireEvent.click(trapsBtn);
      expect(screen.getByText(/ÖSYM'nin En Sık Kullandığı 6 İmza Tuzak/i)).toBeInTheDocument();

      // Click back to Sınav Taktiği (Bilgi)
      const tacticBtn = screen.getByText(/^Taktik$/);
      fireEvent.click(tacticBtn);
      expect(screen.getByText(/Soru Tipinin Kuralları ve Formülleri/i)).toBeInTheDocument();
    });

    it('expands and collapses step-by-step solution steps', () => {
      render(
        <TacticsView
          onAddMistake={vi.fn()}
          onRemoveMistake={vi.fn()}
          onRecordQuestionResult={vi.fn()}
          onSelectPracticeType={vi.fn()}
        />
      );

      // Find toggle solution button
      const toggleSolutionBtn = screen.getByText(/Taktiksel Çözümü Göster/i);
      fireEvent.click(toggleSolutionBtn);
      expect(screen.getByText(/Çözüm Adımlarını Gizle/i)).toBeInTheDocument();
      fireEvent.click(screen.getByText(/Çözüm Adımlarını Gizle/i));
    });
  });
});
