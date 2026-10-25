import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReadingLabView } from '../components/ReadingLabView';

describe('ReadingLabView Functional & Button Tests', () => {
  it('renders initial article text and vocabulary sidebar notes', () => {
    render(<ReadingLabView onAddMistake={vi.fn()} />);

    expect(screen.getByText(/The Economist & Nature Düzeyi Paragraf Laboratuvarı/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /The Neurological Foundations of Human Memory/i })).toBeInTheDocument();
    expect(screen.getByText(/Metnin Kritik YDS Kelimeleri/i)).toBeInTheDocument();
  });

  it('switches to sentence deconstruct view and displays grammatical breakdown', () => {
    render(<ReadingLabView onAddMistake={vi.fn()} />);

    // Click Cümle Deşifre tab
    const deconstructTab = screen.getByRole('button', { name: /Cümle Deşifre/i });
    fireEvent.click(deconstructTab);

    expect(screen.getByText(/Karmaşık Akademik Cümlelerin Anatomisi/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cümlenin Öznesi/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Cümlenin Ana Yüklemi/i).length).toBeGreaterThan(0);
  });

  it('switches to questions set and handles answering questions with feedback', () => {
    const onAddMistake = vi.fn();
    render(<ReadingLabView onAddMistake={onAddMistake} />);

    // Click 4 Soru Seti tab
    const questionsTab = screen.getByRole('button', { name: /4 Soru Seti/i });
    fireEvent.click(questionsTab);

    expect(screen.getByText(/SORU 1 \/ 4/i)).toBeInTheDocument();

    // Click option C on Question 1
    const optionC = screen.getByRole('button', { name: /was completely incapable of generating new brain cells/i });
    fireEvent.click(optionC);

    // Feedback should be displayed
    expect(screen.getByText(/Doğru Cevap: C/i)).toBeInTheDocument();
  });
});
