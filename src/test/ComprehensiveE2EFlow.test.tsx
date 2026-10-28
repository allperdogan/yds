import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';
import { StorageService } from '../services/storageService';
import { SyncService } from '../services/syncService';

describe('Comprehensive E2E Function & Button Verification', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('verifies all main sections and sub-screens open cleanly', async () => {
    render(<App />);

    // 1. Default view: Today
    expect(screen.getByRole('heading', { name: 'Bugün' })).toBeInTheDocument();

    // 2. Study hub lists the vocabulary and every question topic
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    expect(screen.getByRole('button', { name: /^Kelime/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Anlamı Bozan Cümle/ })).toBeInTheDocument();

    // 3. A topic links to its tactics, which still offers the trap analysis
    fireEvent.click(screen.getByRole('button', { name: /Cloze Test/ }));
    fireEvent.click(screen.getByRole('button', { name: /Taktik/ }));
    expect(screen.getByText(/Soru Tipleri İçin Taktik Kılavuzu/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /ÖSYM Çeldirici Deşifresi/i }));
    expect(screen.getByText(/ÖSYM Çeldirici Psikolojisi & Son 5 Yıl Çıkmış Soru Deşifresi/i)).toBeInTheDocument();

    // 4. Mock exam
    fireEvent.click(screen.getAllByRole('button', { name: 'Deneme' })[0]);
    expect(screen.getByText(/180 Dakika \/ 80 Soruluk Tam YDS Deneme Sınavı/i)).toBeInTheDocument();
    expect(screen.getByText(/Standart Deneme/i)).toBeInTheDocument();

    // 5. 30-day plan opens from Today
    fireEvent.click(screen.getAllByRole('button', { name: 'Bugün' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /30 günlük program/i }));
    expect(screen.getByText('30 Günlük Program')).toBeInTheDocument();

    // 6. Mistakes
    fireEvent.click(screen.getAllByRole('button', { name: /Hatalarım/ })[0]);
    expect(screen.getByText(/Hata Defterim & Zayıf Noktalarım/i)).toBeInTheDocument();
  });

  it('moves a question from "learning" to "learned" once it is answered correctly', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /Cloze Test/ }));

    // Pick an option that is not the answer: the feedback names the right one
    fireEvent.click(screen.getByRole('button', { name: /^A\)/ }));
    const feedback = screen.getByText(/^(Doğru\.|Yanlış\.)/);
    let answer = 'A';
    if (feedback.textContent?.startsWith('Doğru')) {
      // A was right; answer the next question with a wrong option instead
      fireEvent.click(screen.getByRole('button', { name: /Sonraki soru/ }));
      fireEvent.click(screen.getByRole('button', { name: /^A\)/ }));
      const second = screen.getByText(/^(Doğru\.|Yanlış\.)/);
      if (second.textContent?.startsWith('Doğru')) {
        fireEvent.click(screen.getByRole('button', { name: /Sonraki soru/ }));
        fireEvent.click(screen.getByRole('button', { name: /^B\)/ }));
      }
    }
    const wrong = screen.getByText(/^Yanlış\. Doğru cevap ([A-E])/);
    answer = wrong.textContent!.match(/Doğru cevap ([A-E])/)![1];

    // It now counts as "öğreniyorum" and is waiting in the review list
    expect(screen.getByRole('button', { name: /Tekrar et \(1\)/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Tekrar et \(1\)/ }));
    fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${answer}\\)`) }));
    expect(screen.getByText(/^Doğru\./)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Tekrar et \(0\)/ })).toBeInTheDocument();

    // The hub shows nothing left to relearn in this topic
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    const clozeRow = screen.getByRole('button', { name: /Cloze Test/ });
    expect(clozeRow.textContent).toMatch(/0 öğreniyorum/);
    expect(clozeRow.textContent).toMatch(/[1-9]\d* öğrendim/);
  });

  it('verifies a vocabulary word marked as unknown lands in Hatalarım', async () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /^Kelime/ }));

    fireEvent.click(screen.getByText(/Bilmiyorum \(Tüm Şıkları Öğret\)/i));

    fireEvent.click(screen.getAllByRole('button', { name: /Hatalarım/ })[0]);
    fireEvent.click(screen.getByRole('button', { name: /Zor Kelimeler/i }));
    expect(screen.getByText(/Soruda Yanlış Yapıldı/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Öğrendim/i }));
    expect(screen.queryByText(/Soruda Yanlış Yapıldı/i)).not.toBeInTheDocument();
  });

  it('verifies 30-day curriculum day completion toggle updates progress and saves to localStorage', async () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /30 günlük program/i }));

    // Initial completion is 0
    expect(screen.getByText(/0 \/ 30 Gün/i)).toBeInTheDocument();

    // Toggle day 1 completed
    const day1ToggleBtn = screen.getByRole('button', { name: /Tamamlandı Olarak İşaretle/i });
    fireEvent.click(day1ToggleBtn);

    // Progress updates to 1 / 30 Gün (3%)
    expect(screen.getByText(/1 \/ 30 Gün/i)).toBeInTheDocument();

    // Check localStorage persistence
    const savedStats = StorageService.loadStats();
    expect(savedStats.completedDays).toContain(1);
  });

  it('verifies Dark Mode toggle button toggles class on documentElement and saves state', () => {
    render(<App />);

    // Find dark mode button in Navbar
    const darkModeBtn = screen.getByTitle(/iPhone \/ Bilgisayar Kurulumu/i).nextElementSibling as HTMLButtonElement;
    expect(darkModeBtn).toBeInTheDocument();

    // Click toggle to enable dark mode
    fireEvent.click(darkModeBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('yds_dark_mode')).toBe('true');

    // Click toggle again to disable dark mode
    fireEvent.click(darkModeBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('yds_dark_mode')).toBe('false');
  });

  it('verifies Cloud Backup / Sync modal opens, generates backup code, and exports valid payload', () => {
    const { container } = render(<App />);

    // Find and click Sync button in Navbar
    const syncBtn = screen.getByTitle(/İlerleme Yedekle & Cihaz Eşitle/i);
    fireEvent.click(syncBtn);

    // Modal should be open with stats summary
    expect(screen.getByText(/İlerleme Yedekleme & Cihaz Eşitleme/i)).toBeInTheDocument();
    expect(screen.getByText(/📤 Yedek Al \(Dışa Aktar\)/i)).toBeInTheDocument();

    // Get the textarea containing the backup code
    const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(textarea).not.toBeNull();
    expect(textarea.value.length).toBeGreaterThan(20);

    // Verify the backup code decodes to valid payload
    const decoded = SyncService.restoreFromBackupCode(textarea.value);
    expect(decoded).not.toBeNull();
    expect(decoded?.stats).toBeDefined();
    expect(decoded?.version).toBe(1);
  });
});
