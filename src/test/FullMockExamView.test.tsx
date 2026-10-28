import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FullMockExamView } from '../components/FullMockExamView';

describe('FullMockExamView Functional & Button Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('resumes an unfinished exam after leaving the screen', () => {
    const first = render(<FullMockExamView onAddMistake={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /Denemeyi başlat/i }));
    expect(screen.getByText(/Sınavı Bitir/i)).toBeInTheDocument();
    first.unmount();

    render(<FullMockExamView onAddMistake={vi.fn()} />);
    expect(screen.getByText(/Sınavı Bitir/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Denemeyi başlat/i })).not.toBeInTheDocument();
  });

  it('renders intro screen with 180 min information and start button', () => {
    render(<FullMockExamView onAddMistake={vi.fn()} />);

    expect(screen.getByText(/Gerçek sınav gibi: 80 soru, 180 dakika/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Denemeyi başlat/i })).toBeInTheDocument();
  });

  it('starts exam and navigates questions with optical grid and prev/next buttons', () => {
    render(<FullMockExamView onAddMistake={vi.fn()} />);

    // Start exam
    fireEvent.click(screen.getByRole('button', { name: /Denemeyi başlat/i }));

    // Should be in active mode
    expect(screen.getByText(/SORU 1 \/ 80/i)).toBeInTheDocument();
    expect(screen.getByText(/0 \/ 80 İşaretlendi/i)).toBeInTheDocument();

    // Select an option on Question 1
    const optionContainers = screen.getAllByText(/^[A-E]$/);
    const optionB = optionContainers[1].closest('div');
    if (optionB) {
      fireEvent.click(optionB);
    }

    // Question 1 is answered
    expect(screen.getByText(/1 \/ 80 İşaretlendi/i)).toBeInTheDocument();

    // Toggle Flag / Şüpheli
    const flagBtn = screen.getByRole('button', { name: /Şüpheli İşaretle/i });
    fireEvent.click(flagBtn);
    expect(screen.getByRole('button', { name: /Şüpheli İşaretli/i })).toBeInTheDocument();

    // Navigate to next question
    const nextBtn = screen.getByRole('button', { name: /Sonraki Soru/i });
    fireEvent.click(nextBtn);
    expect(screen.getByText(/SORU 2 \/ 80/i)).toBeInTheDocument();

    // Click on optical grid for Question 10
    const q10Btn = screen.getByRole('button', { name: /^10$/ });
    fireEvent.click(q10Btn);
    expect(screen.getByText(/SORU 10 \/ 80/i)).toBeInTheDocument();
  });

  it('submits exam, displays performance scorecard, and enters review mode', () => {
    const onSaveExamResult = vi.fn();
    render(<FullMockExamView onAddMistake={vi.fn()} onSaveExamResult={onSaveExamResult} />);

    // Start exam
    fireEvent.click(screen.getByRole('button', { name: /Denemeyi başlat/i }));

    // Click Sınavı Bitir
    const finishBtn = screen.getByRole('button', { name: /Sınavı Bitir/i });
    fireEvent.click(finishBtn);

    // Confirmation modal opens
    expect(screen.getByText(/Sınavı Bitirmek İstiyor musunuz\?/i)).toBeInTheDocument();

    // Confirm submission
    const confirmBtn = screen.getByRole('button', { name: /Evet, Sınavı Tamamla/i });
    fireEvent.click(confirmBtn);

    // Review mode active with report
    expect(screen.getByText(/YDS Performans Raporu/i)).toBeInTheDocument();
    expect(screen.getByText(/Sınav Sonucunuz:/i)).toBeInTheDocument();
    expect(onSaveExamResult).toHaveBeenCalledTimes(1);
  });
});
