import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionPracticeView } from '../components/QuestionPracticeView';

describe('QuestionPracticeView Functional & Button Tests', () => {
  it('renders question and choices', () => {
    render(
      <QuestionPracticeView
        mistakeIds={[]}
        onAddMistake={vi.fn()}
        onRemoveMistake={vi.fn()}
        onRecordQuestionResult={vi.fn()}
      />
    );

    // Initial question should be rendered
    expect(screen.getByText(/SORU 1 \//i)).toBeInTheDocument();
    expect(screen.getByText(/Şıkkın üzerine tıklayarak seçin/i)).toBeInTheDocument();
  });

  it('allows striking through options (eliminating traps) without answering', () => {
    render(
      <QuestionPracticeView
        mistakeIds={[]}
        onAddMistake={vi.fn()}
        onRemoveMistake={vi.fn()}
        onRecordQuestionResult={vi.fn()}
      />
    );

    const strikeButtons = screen.getAllByRole('button', { name: /Ele \/ Çiz/i });
    expect(strikeButtons.length).toBeGreaterThan(0);

    // Click to strike option A
    fireEvent.click(strikeButtons[0]);

    // Button text toggles to "Geri Al"
    expect(screen.getByRole('button', { name: /Geri Al/i })).toBeInTheDocument();
  });

  it('selects option, records result, and reveals tactical explanation', () => {
    const onRecordResult = vi.fn();
    const onAddMistake = vi.fn();

    render(
      <QuestionPracticeView
        mistakeIds={[]}
        onAddMistake={onAddMistake}
        onRemoveMistake={vi.fn()}
        onRecordQuestionResult={onRecordResult}
      />
    );

    // Click first option
    const optionContainers = screen.getAllByText(/^[A-E]$/);
    const optionA = optionContainers[0].closest('div');
    if (optionA) {
      fireEvent.click(optionA);
    }

    expect(onRecordResult).toHaveBeenCalled();
    // Explanation card appears
    expect(screen.getByText(/Uygulanan Taktik:/i)).toBeInTheDocument();
  });

  it('adds and removes question from mistake booklet', () => {
    const onAddMistake = vi.fn();
    const onRemoveMistake = vi.fn();

    const { rerender } = render(
      <QuestionPracticeView
        mistakeIds={[]}
        onAddMistake={onAddMistake}
        onRemoveMistake={onRemoveMistake}
        onRecordQuestionResult={vi.fn()}
      />
    );

    // Click "Hata Defterine Ekle"
    const addBtn = screen.getByRole('button', { name: /Hata Defterine Ekle/i });
    fireEvent.click(addBtn);
    expect(onAddMistake).toHaveBeenCalled();

    // Rerender with mistake already added
    rerender(
      <QuestionPracticeView
        mistakeIds={['q1']}
        onAddMistake={onAddMistake}
        onRemoveMistake={onRemoveMistake}
        onRecordQuestionResult={vi.fn()}
      />
    );

    // Click "Hata Defterinde" to remove
    const removeBtn = screen.getByRole('button', { name: /Hata Defterinde/i });
    fireEvent.click(removeBtn);
    expect(onRemoveMistake).toHaveBeenCalled();
  });

  it('navigates next and previous questions', () => {
    render(
      <QuestionPracticeView
        mistakeIds={[]}
        onAddMistake={vi.fn()}
        onRemoveMistake={vi.fn()}
        onRecordQuestionResult={vi.fn()}
      />
    );

    expect(screen.getByText(/SORU 1 \//i)).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: /Sonraki Soru/i });
    fireEvent.click(nextBtn);

    expect(screen.getByText(/SORU 2 \//i)).toBeInTheDocument();

    const prevBtn = screen.getByRole('button', { name: /Önceki Soru/i });
    fireEvent.click(prevBtn);

    expect(screen.getByText(/SORU 1 \//i)).toBeInTheDocument();
  });

  it('toggles question timer pause and resume', () => {
    render(
      <QuestionPracticeView
        mistakeIds={[]}
        onAddMistake={vi.fn()}
        onRemoveMistake={vi.fn()}
        onRecordQuestionResult={vi.fn()}
      />
    );

    const pauseBtn = screen.getByRole('button', { name: /Durdur/i });
    fireEvent.click(pauseBtn);

    expect(screen.getByRole('button', { name: /Başlat/i })).toBeInTheDocument();

    const resumeBtn = screen.getByRole('button', { name: /Başlat/i });
    fireEvent.click(resumeBtn);

    expect(screen.getByRole('button', { name: /Durdur/i })).toBeInTheDocument();
  });
});
