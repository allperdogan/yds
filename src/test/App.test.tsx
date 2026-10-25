import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';

describe('App Integration & Complete Flow Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders default VocabDrill view on mount', () => {
    render(<App />);

    // Brand should be visible
    expect(screen.getByText('Master')).toBeInTheDocument();

    // Default tab is Vocab Drill
    expect(screen.getByText(/🎯 Kelime/i)).toBeInTheDocument();
    expect(screen.getByText(/🌟 Tüm Sorular/i)).toBeInTheDocument();
  });

  it('navigates across all views via top navbar and bottom tab bar', () => {
    render(<App />);

    // Switch to 30-Day Plan via Navbar
    const dailyBtn = screen.getByText(/30 Günlük Plan/i);
    fireEvent.click(dailyBtn);
    expect(screen.getByText(/30 Günlük YDS Master Yol Haritası/i)).toBeInTheDocument();

    // Switch to Paragraf & Cümle Deşifre via Navbar
    const readingBtn = screen.getByText(/Paragraf & Cümle Deşifre/i);
    fireEvent.click(readingBtn);
    expect(screen.getByText(/Akademik Okuma & Ağır Cümle Deşifre Atölyesi/i)).toBeInTheDocument();

    // Switch to 80 Soruluk Deneme via Navbar
    const mockBtn = screen.getByText(/80 Soruluk Deneme/i);
    fireEvent.click(mockBtn);
    expect(screen.getByText(/180 Dakika \/ 80 Soruluk Tam YDS Deneme Sınavı/i)).toBeInTheDocument();

    // Switch to Taktikler via Navbar
    const tacticsBtn = screen.getByText(/Taktikler/i);
    fireEvent.click(tacticsBtn);
    expect(screen.getByText(/10 Soru Tipi İçin Altın Taktik Kılavuzu/i)).toBeInTheDocument();

    // Switch to Hatalarım via Navbar
    const mistakesNavBtn = screen.getByText(/Hatalarım/i);
    fireEvent.click(mistakesNavBtn);
    expect(screen.getByText(/Hata Defterim & Zayıf Noktalarım/i)).toBeInTheDocument();

    // Switch back to Kelime via Mobile Bottom Bar
    const bottomVocabBtn = screen.getByRole('button', { name: /^Kelime$/i });
    fireEvent.click(bottomVocabBtn);
    expect(screen.getByText(/🌟 Tüm Sorular/i)).toBeInTheDocument();
  });

  it('toggles dark mode class on document element', () => {
    render(<App />);

    const darkModeToggleBtn = screen.getByTitle(/iPhone \/ Bilgisayar Kurulumu/i).nextElementSibling as HTMLElement;
    expect(darkModeToggleBtn).toBeInTheDocument();

    // Initially light mode
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Toggle dark mode
    fireEvent.click(darkModeToggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Toggle back to light mode
    fireEvent.click(darkModeToggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('opens and closes the PWA install guide modal', () => {
    render(<App />);

    const installHelpBtn = screen.getByTitle(/iPhone \/ Bilgisayar Kurulumu/i);
    fireEvent.click(installHelpBtn);

    // Modal is opened
    expect(screen.getByText(/PWA Native Kurulum Rehberi/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Anladım, Kapat/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/PWA Native Kurulum Rehberi/i)).not.toBeInTheDocument();
  });
});
