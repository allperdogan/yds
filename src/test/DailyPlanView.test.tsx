import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DailyPlanView } from '../components/DailyPlanView';

describe('DailyPlanView Functional & Button Tests', () => {
  it('renders overall 30-day curriculum progress', () => {
    render(
      <DailyPlanView
        completedDays={[1, 2, 3]}
        onToggleDayCompleted={vi.fn()}
        onNavigateToVocabDay={vi.fn()}
        onNavigateToTactic={vi.fn()}
        onNavigateToPractice={vi.fn()}
      />
    );

    // 3 of 30 is 10%
    expect(screen.getByText('10%')).toBeInTheDocument();
    expect(screen.getByText('3 / 30 Gün')).toBeInTheDocument();
    expect(screen.getByText('27 gün kaldı')).toBeInTheDocument();
  });

  it('filters missions when week buttons are clicked', () => {
    render(
      <DailyPlanView
        completedDays={[]}
        onToggleDayCompleted={vi.fn()}
        onNavigateToVocabDay={vi.fn()}
        onNavigateToTactic={vi.fn()}
        onNavigateToPractice={vi.fn()}
      />
    );

    // Initial week 1 shows Gün 1
    expect(screen.getByText('GÜN 1')).toBeInTheDocument();

    // Click 2. Hafta button
    const week2Btn = screen.getByText(/2. Hafta/i);
    fireEvent.click(week2Btn);

    // Should show Gün 8
    expect(screen.getByText('GÜN 8')).toBeInTheDocument();
    expect(screen.queryByText('GÜN 1')).not.toBeInTheDocument();
  });

  it('selects active day when day item in list is clicked', () => {
    render(
      <DailyPlanView
        completedDays={[]}
        onToggleDayCompleted={vi.fn()}
        onNavigateToVocabDay={vi.fn()}
        onNavigateToTactic={vi.fn()}
        onNavigateToPractice={vi.fn()}
      />
    );

    // Click Day 2
    const day2Item = screen.getByText('GÜN 2');
    fireEvent.click(day2Item);

    // Right card header should show GÜN 2 HEDEFİ
    expect(screen.getByText(/GÜN 2 HEDEFİ/i)).toBeInTheDocument();
  });

  it('toggles day completion when circle check button or header button is clicked', () => {
    const onToggleDayCompleted = vi.fn();
    render(
      <DailyPlanView
        completedDays={[]}
        onToggleDayCompleted={onToggleDayCompleted}
        onNavigateToVocabDay={vi.fn()}
        onNavigateToTactic={vi.fn()}
        onNavigateToPractice={vi.fn()}
      />
    );

    // Click the toggle button in the header
    const toggleBtn = screen.getByRole('button', { name: /Tamamlandı Olarak İşaretle/i });
    fireEvent.click(toggleBtn);

    expect(onToggleDayCompleted).toHaveBeenCalledWith(1);
  });

  it('navigates to vocab study, tactic study, and practice test via action buttons', () => {
    const onNavigateToVocabDay = vi.fn();
    const onNavigateToTactic = vi.fn();
    const onNavigateToPractice = vi.fn();

    render(
      <DailyPlanView
        completedDays={[]}
        onToggleDayCompleted={vi.fn()}
        onNavigateToVocabDay={onNavigateToVocabDay}
        onNavigateToTactic={onNavigateToTactic}
        onNavigateToPractice={onNavigateToPractice}
      />
    );

    // Click "Kelimeleri Çalış"
    const vocabBtn = screen.getByRole('button', { name: /Kelimeleri Çalış/i });
    fireEvent.click(vocabBtn);
    expect(onNavigateToVocabDay).toHaveBeenCalledWith(1);

    // Click "Taktiği Oku"
    const tacticBtn = screen.getByRole('button', { name: /Taktiği Oku/i });
    fireEvent.click(tacticBtn);
    expect(onNavigateToTactic).toHaveBeenCalled();

    // Click "Günün Soru Pratiğini Başlat"
    const practiceBtn = screen.getByRole('button', { name: /Günün Soru Pratiğini Başlat/i });
    fireEvent.click(practiceBtn);
    expect(onNavigateToPractice).toHaveBeenCalledWith(1);
  });

  it('calls onResetProgress when 0. Güne Sıfırla button is clicked and confirmed', () => {
    const onResetProgress = vi.fn();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);

    render(
      <DailyPlanView
        completedDays={[1, 2, 3]}
        onToggleDayCompleted={vi.fn()}
        onNavigateToVocabDay={vi.fn()}
        onNavigateToTactic={vi.fn()}
        onNavigateToPractice={vi.fn()}
        onResetProgress={onResetProgress}
      />
    );

    const resetBtn = screen.getByTitle(/İlerlemeyi Sıfırla \(0\. Güne Dön\)/i);
    fireEvent.click(resetBtn);

    expect(onResetProgress).toHaveBeenCalledTimes(1);
    confirmSpy.mockRestore();
  });
});
