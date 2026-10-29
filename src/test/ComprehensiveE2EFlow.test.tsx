import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';
import { StorageService } from '../services/storageService';
import { SyncService } from '../services/syncService';

// Dark mode, eye care, backup and install live in the header's settings menu.
const openSettingsItem = (name: RegExp): HTMLElement => {
  fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
  return screen.getByRole(/Karanlık|Göz/.test(name.source) ? 'menuitemcheckbox' : 'menuitem', { name });
};

describe('Comprehensive E2E Function & Button Verification', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
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
    expect(screen.getByText(/Soru tipini seç/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /^Çeldiriciler$/ }));
    expect(screen.getByText(/ÖSYM Çeldirici Psikolojisi & Son 5 Yıl Çıkmış Soru Deşifresi/i)).toBeInTheDocument();

    // 4. Mock exam
    fireEvent.click(screen.getAllByRole('button', { name: 'Deneme' })[0]);
    expect(screen.getByText(/Gerçek sınav gibi: 80 soru, 180 dakika/i)).toBeInTheDocument();
    expect(screen.getByText(/Standart Deneme/i)).toBeInTheDocument();

    // 5. 30-day plan opens from Today
    fireEvent.click(screen.getAllByRole('button', { name: 'Bugün' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /30 günlük program/i }));
    expect(screen.getByText('30 Günlük Program')).toBeInTheDocument();

    // 6. Mistakes
    fireEvent.click(screen.getAllByRole('button', { name: /Hatalarım/ })[0]);
    expect(screen.getByText(/Yanlış yaptığın sorular ve kelimeler burada/i)).toBeInTheDocument();
  });

  it('moves a question from "learning" to "learned" after three right answers on its review days', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    const { unmount } = render(<App />);
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

    // It now counts as "öğreniyorum" but only comes back tomorrow
    expect(screen.getByRole('button', { name: /Tekrar \(0\)/ })).toBeInTheDocument();
    unmount();

    // Right answers on the due days: tomorrow, 3 days later, 7 days later
    const start = new Date();
    let offset = 0;
    for (const [gap, feedback] of [
      [1, /^Doğru\. 1\/3 tamam, 3 gün sonra/],
      [3, /^Doğru\. 2\/3 tamam, 7 gün sonra/],
      [7, /^Doğru\. Bu soru öğrendiklerine eklendi/]
    ] as const) {
      offset += gap;
      vi.setSystemTime(new Date(start.getFullYear(), start.getMonth(), start.getDate() + offset, 12));
      const view = render(<App />);
      fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
      fireEvent.click(screen.getByRole('button', { name: /Cloze Test/ }));
      fireEvent.click(screen.getByRole('button', { name: /Tekrar \(1\)/ }));
      fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${answer}\\)`) }));
      expect(screen.getByText(feedback)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Tekrar \(0\)/ })).toBeInTheDocument();
      if (gap !== 7) view.unmount();
    }

    // The hub shows nothing left to relearn in this topic
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    const clozeRow = screen.getByRole('button', { name: /Cloze Test/ });
    expect(clozeRow.textContent).not.toMatch(/öğreniyorum/);
    expect(clozeRow.textContent).toMatch(/[1-9]\d* öğrendim/);
  });

  it('verifies a vocabulary word marked as unknown lands in Hatalarım', async () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /^Kelime/ }));

    fireEvent.click(screen.getByText(/^Bilmiyorum$/));

    fireEvent.click(screen.getAllByRole('button', { name: /Hatalarım/ })[0]);
    fireEvent.click(screen.getByRole('button', { name: /^Kelimeler \(\d+\)$/ }));
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
    const darkModeBtn = openSettingsItem(/Karanlık mod/i);
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
    const syncBtn = openSettingsItem(/Yedekle/i);
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
