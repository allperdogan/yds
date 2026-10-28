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
    expect(screen.getByText(/Harika! Hata defterinde bekleyen soru yok/i)).toBeInTheDocument();

    // Click "Soru Bankasına Git" button
    const goPracticeBtn = screen.getByRole('button', { name: /Soru Bankasına Git/i });
    fireEvent.click(goPracticeBtn);
    expect(onNavigatePractice).toHaveBeenCalledTimes(1);

    // Switch to words tab
    const wordsTabBtn = screen.getByText(/Zor Kelimeler/i);
    fireEvent.click(wordsTabBtn);

    // Empty words state
    expect(screen.getByText(/Henüz kaydedilmiş kelime yok/i)).toBeInTheDocument();

    // Click "Kelimeleri İncele" button
    const goVocabBtn = screen.getByRole('button', { name: /Kelimeleri İncele/i });
    fireEvent.click(goVocabBtn);
    expect(onNavigateVocab).toHaveBeenCalledTimes(1);
  });

  it('renders mistaken question and calls onRemoveMistake when "Öğrendim (Kaldır)" is clicked', () => {
    const onRemoveMistake = vi.fn();

    render(
      <MistakesView
        mistakeQuestionIds={['q1']}
        bookmarkedWords={[]}
        onRemoveMistake={onRemoveMistake}
        onRemoveBookmark={vi.fn()}
        onNavigateToPractice={vi.fn()}
        onNavigateToVocab={vi.fn()}
      />
    );

    expect(screen.getByText(/Hata #1/i)).toBeInTheDocument();
    // The answer is hidden until the question is solved again.
    expect(screen.queryByRole('button', { name: /Öğrendim \(Kaldır\)/i })).not.toBeInTheDocument();
    const q1 = getUnifiedQuestionById('q1')!;
    fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${q1.answer}\\)`) }));

    const removeBtn = screen.getByRole('button', { name: /Öğrendim \(Kaldır\)/i });
    fireEvent.click(removeBtn);

    expect(onRemoveMistake).toHaveBeenCalledWith('q1');
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
    const wordsTabBtn = screen.getByText(/Zor Kelimeler \(1\)/i);
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
    const wordsTabBtn = screen.getByText(/Zor Kelimeler \(1\)/i);
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
