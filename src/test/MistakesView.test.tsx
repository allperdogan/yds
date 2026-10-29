import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MistakesView } from '../components/MistakesView';
import { getUnifiedQuestionById } from '../data/ydsQuestions';

describe('MistakesView Functional & Button Tests', () => {
  it('renders empty state when no mistakes or bookmarks exist', () => {
    const onNavigatePractice = vi.fn();
    const onNavigateVocab = vi.fn();

    render(
      <MistakesView
        mistakeQuestionIds={[]}
        bookmarkedWords={[]}
        onRemoveMistake={vi.fn()}
        onRemoveBookmark={vi.fn()}
        onNavigateToPractice={onNavigatePractice}
        onNavigateToVocab={onNavigateVocab}
      />
    );

    // Empty questions state
    expect(screen.getByText(/Bekleyen hatalı soru yok/i)).toBeInTheDocument();

    // Click "Soru Bankasına Git" button
    const goPracticeBtn = screen.getByRole('button', { name: /Soru çözmeye git/i });
    fireEvent.click(goPracticeBtn);
    expect(onNavigatePractice).toHaveBeenCalledTimes(1);

    // Switch to words tab
    const wordsTabBtn = screen.getByText(/^Kelimeler \(\d+\)$/);
    fireEvent.click(wordsTabBtn);

    // Empty words state
    expect(screen.getByText(/Bekleyen kelime yok/i)).toBeInTheDocument();

    // Click "Kelimeleri İncele" button
    const goVocabBtn = screen.getByRole('button', { name: /Kelime çalışmaya git/i });
    fireEvent.click(goVocabBtn);
    expect(onNavigateVocab).toHaveBeenCalledTimes(1);
  });

  it('counts a right answer as one review step and keeps the card with its explanation', () => {
    const onMistakeCorrect = vi.fn();
    render(
      <MistakesView
        mistakeQuestionIds={['q1']}
        bookmarkedWords={[]}
        onRemoveMistake={vi.fn()}
        onMistakeCorrect={onMistakeCorrect}
        onRemoveBookmark={vi.fn()}
        onNavigateToPractice={vi.fn()}
        onNavigateToVocab={vi.fn()}
      />
    );

    expect(screen.getByText(/Hata #1/i)).toBeInTheDocument();
    const q1 = getUnifiedQuestionById('q1')!;
    fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${q1.answer}\\)`) }));
    expect(onMistakeCorrect).toHaveBeenCalledWith('q1');
    expect(screen.getByText(/Taktiksel Çözüm/)).toBeInTheDocument();
  });

  it('asks why a wrong answer happened and shows only mistakes due today', () => {
    const onMistakeWrong = vi.fn();
    const onSetMistakeCause = vi.fn();
    const q1 = getUnifiedQuestionById('q1')!;
    const wrong = (['A', 'B', 'C', 'D', 'E'] as const).find((k) => k !== q1.answer)!;
    render(
      <MistakesView
        mistakeQuestionIds={['q1', 'm_q1']}
        mistakeReviews={{
          q1: { streak: 1, due: '2000-01-01', cause: 'grammar' },
          m_q1: { streak: 0, due: '2999-01-01', cause: 'grammar' }
        }}
        bookmarkedWords={[]}
        onRemoveMistake={vi.fn()}
        onMistakeWrong={onMistakeWrong}
        onSetMistakeCause={onSetMistakeCause}
        onRemoveBookmark={vi.fn()}
        onNavigateToPractice={vi.fn()}
        onNavigateToVocab={vi.fn()}
      />
    );

    expect(screen.getByText(/^Bugün \(1\)$/)).toBeInTheDocument();
    expect(screen.getByText(/1 soru tekrar gününü bekliyor/)).toBeInTheDocument();
    expect(screen.getByText(/En çok yanlış nedenin/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${wrong}\\)`) }));
    expect(onMistakeWrong).toHaveBeenCalledWith('q1');
    expect(screen.getByText(/Yarın tekrar sorulacak/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Kelimeyi bilmedim' }));
    expect(onSetMistakeCause).toHaveBeenCalledWith('q1', 'vocab');
  });

  it('renders bookmarked words and calls onRemoveBookmark when delete button is clicked', () => {
    const onRemoveBookmark = vi.fn();

    render(
      <MistakesView
        mistakeQuestionIds={[]}
        bookmarkedWords={['w1']}
        onRemoveMistake={vi.fn()}
        onRemoveBookmark={onRemoveBookmark}
        onNavigateToPractice={vi.fn()}
        onNavigateToVocab={vi.fn()}
      />
    );

    // Switch to words tab
    const wordsTabBtn = screen.getByText(/^Kelimeler \(1\)$/);
    fireEvent.click(wordsTabBtn);

    // Find delete button
    const deleteBtn = screen.getByTitle(/Kaydedilenlerden Çıkar/i);
    fireEvent.click(deleteBtn);

    expect(onRemoveBookmark).toHaveBeenCalledWith('w1');
  });

  it('renders drill mistake words from pendingReviewWords and shows badge', () => {
    render(
      <MistakesView
        mistakeQuestionIds={[]}
        bookmarkedWords={[]}
        pendingReviewWords={['w14']}
        onRemoveMistake={vi.fn()}
        onRemoveBookmark={vi.fn()}
        onNavigateToPractice={vi.fn()}
        onNavigateToVocab={vi.fn()}
      />
    );

    // Switch to words tab
    const wordsTabBtn = screen.getByText(/^Kelimeler \(1\)$/);
    fireEvent.click(wordsTabBtn);

    expect(screen.getByRole('heading', { name: /compel/i })).toBeInTheDocument();
    expect(screen.getByText(/Soruda Yanlış Yapıldı/i)).toBeInTheDocument();
  });

  it('renders mock exam mistake questions cleanly using unified question lookup', () => {
    render(
      <MistakesView
        mistakeQuestionIds={['m_q1']}
        bookmarkedWords={[]}
        onRemoveMistake={vi.fn()}
        onRemoveBookmark={vi.fn()}
        onNavigateToPractice={vi.fn()}
        onNavigateToVocab={vi.fn()}
      />
    );

    expect(screen.getByText(/Hata #1/i)).toBeInTheDocument();
    expect(screen.getByText(/antibiotic-resistant bacteria/i)).toBeInTheDocument();
  });
});
