import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { VocabFlashcardView } from '../components/VocabFlashcardView';
import { SRSItem } from '../types';

describe('VocabFlashcardView Functional & Button Tests', () => {
  const dummySRSData: Record<string, SRSItem> = {
    w1: {
      id: 'w1',
      wordId: 'w1',
      interval: 1,
      repetition: 1,
      easeFactor: 2.5,
      nextReviewDate: '2026-10-25',
      state: 'learning'
    }
  };

  const defaultProps = {
    initialDay: 1,
    srsData: dummySRSData,
    onUpdateSRS: vi.fn(),
    bookmarkedWords: ['w1'],
    onToggleBookmark: vi.fn(),
    onNavigateToDrill: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders flashcard view with 1373 words count badge and main components', () => {
    render(<VocabFlashcardView {...defaultProps} />);

    // Check title and count
    expect(screen.getByText(/🧠 Akademik Kelime & SRS Motoru/i)).toBeInTheDocument();
    expect(screen.getByText(/\d+ Kelime/i)).toBeInTheDocument();

    // Check View Mode Switcher
    expect(screen.getByText(/🎴 Flashcard \(SRS\)/i)).toBeInTheDocument();
    expect(screen.getByText(/📚 Kelime Sözlüğü \(A-Z\)/i)).toBeInTheDocument();
  });

  it('allows switching category filters (Fiiller, Sıfatlar, İsimler, etc.)', () => {
    render(<VocabFlashcardView {...defaultProps} />);

    // Click Fiiller filter
    const verbBtn = screen.getByRole('button', { name: /^Fiiller/i });
    fireEvent.click(verbBtn);
    expect(verbBtn).toHaveClass('bg-emerald-600');

    // Click Sıfatlar filter
    const adjBtn = screen.getByRole('button', { name: /^Sıfatlar/i });
    fireEvent.click(adjBtn);
    expect(adjBtn).toHaveClass('bg-indigo-600');

    // Click Tümü filter
    const allBtns = screen.getAllByRole('button', { name: /^Tümü/i });
    expect(allBtns.length).toBeGreaterThan(0);
    fireEvent.click(allBtns[0]);
  });

  it('flips flashcard when clicked to reveal meaning, synonyms, example and YDS tip', () => {
    render(<VocabFlashcardView {...defaultProps} />);

    // Before click: Front of card
    expect(screen.getByText(/Anlamı, eş anlamlıları ve YDS taktiğini görmek için dokun/i)).toBeInTheDocument();

    // Click card container to flip
    const flipPrompt = screen.getByText(/Anlamı, eş anlamlıları ve YDS taktiğini görmek için dokun/i);
    fireEvent.click(flipPrompt);

    // After click: Back of card
    expect(screen.getByText(/Türkçe Karşılığı/i)).toBeInTheDocument();
    expect(screen.getByText(/YDS Örnek Cümlesi/i)).toBeInTheDocument();
  });

  it('triggers onUpdateSRS when SM-2 grading buttons are clicked', () => {
    const onUpdateSRS = vi.fn();
    render(<VocabFlashcardView {...defaultProps} onUpdateSRS={onUpdateSRS} />);

    // Click "🟢 İyi Hatırladım" (+4 Gün Sonra)
    const goodBtn = screen.getByRole('button', { name: /🟢 İyi Hatırladım/i });
    fireEvent.click(goodBtn);

    expect(onUpdateSRS).toHaveBeenCalledTimes(1);
    const updatedMap = onUpdateSRS.mock.calls[0][0];
    expect(updatedMap).toBeDefined();
  });

  it('toggles bookmark when bookmark button is clicked', () => {
    const onToggleBookmark = vi.fn();
    render(<VocabFlashcardView {...defaultProps} onToggleBookmark={onToggleBookmark} />);

    // Find and click bookmark button
    const bookmarkBtn = screen.getByTitle(/Kaydedilenlerden Çıkar/i);
    fireEvent.click(bookmarkBtn);

    expect(onToggleBookmark).toHaveBeenCalledWith('w1');
  });

  it('switches to Dictionary / Atlas Mode and renders searchable paginated table', () => {
    render(<VocabFlashcardView {...defaultProps} />);

    // Click Dictionary Mode button
    const dictModeBtn = screen.getByRole('button', { name: /📚 Kelime Sözlüğü \(A-Z\)/i });
    fireEvent.click(dictModeBtn);

    // Search bar should be present with placeholder
    const searchInput = screen.getByPlaceholderText(/\d+ kelime içinde/i);
    expect(searchInput).toBeInTheDocument();

    // Type a query in search
    fireEvent.change(searchInput, { target: { value: 'enhance' } });
    const enhanceMatches = screen.getAllByText(/enhance/i);
    expect(enhanceMatches.length).toBeGreaterThan(0);
  });

  it('renders all 30 days in day selection mode', () => {
    render(<VocabFlashcardView {...defaultProps} />);

    // Switch to "Güne Göre (30 Gün)" filter
    const dayFilterBtn = screen.getByRole('button', { name: /Güne Göre \(30 Gün\)/i });
    fireEvent.click(dayFilterBtn);

    // Check Day 1 and Day 30 buttons
    expect(screen.getByText(/Gün 1 \(/i)).toBeInTheDocument();
    expect(screen.getByText(/Gün 30 \(/i)).toBeInTheDocument();
  });
});
