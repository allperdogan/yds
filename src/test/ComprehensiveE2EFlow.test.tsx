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

  it('verifies all main navigation tabs switch to active views cleanly', async () => {
    render(<App />);

    // 1. Default view: Kelime Soru Çözücü (vocab_drill)
    expect(screen.getByText(/1.412 kelimelik havuzdan test çöz/i)).toBeInTheDocument();

    // 2. Navigate to Sınav Taktikleri (tactics)
    const tacticsTab = screen.getByRole('button', { name: /2\. Soru Tipleri & Taktikler/i });
    fireEvent.click(tacticsTab);
    expect(screen.getByText(/10 Soru Tipi İçin Altın Taktik Kılavuzu/i)).toBeInTheDocument();

    // 3. Switch between Taktikler and ÖSYM Çeldirici Deşifresi
    const trapsBtn = screen.getByRole('button', { name: /ÖSYM Çeldirici Deşifresi/i });
    fireEvent.click(trapsBtn);
    expect(screen.getByText(/ÖSYM Çeldirici Psikolojisi & Son 5 Yıl Çıkmış Soru Deşifresi/i)).toBeInTheDocument();

    // 4. Navigate to Paragraf Labı (reading_lab)
    const readingTab = screen.getByRole('button', { name: /3\. Paragraf & Cümle Deşifre/i });
    fireEvent.click(readingTab);
    expect(screen.getByText(/Akademik Okuma & Ağır Cümle Deşifre Atölyesi/i)).toBeInTheDocument();

    // 5. Navigate to Tam Deneme (mock_exam)
    const mockExamTab = screen.getByRole('button', { name: /4\. 80 Soruluk Deneme/i });
    fireEvent.click(mockExamTab);
    expect(screen.getByText(/180 Dakika \/ 80 Soruluk Tam YDS Deneme Sınavı/i)).toBeInTheDocument();
    expect(screen.getByText(/Standart ÖSYM 2024 VIP Simülasyonu/i)).toBeInTheDocument();

    // 6. Navigate to 30 Günlük Plan (daily)
    const dailyTab = screen.getByRole('button', { name: /30 Günlük Plan/i });
    fireEvent.click(dailyTab);
    expect(screen.getByText(/30 Günlük YDS Master Yol Haritası/i)).toBeInTheDocument();

    // 7. Navigate to Hatalarım (mistakes)
    const mistakesTab = screen.getByRole('button', { name: /Hatalarım/i });
    fireEvent.click(mistakesTab);
    expect(screen.getByText(/Hata Defterim & Zayıf Noktalarım/i)).toBeInTheDocument();
  });

  it('verifies mistakes automatically record failed vocabulary words and questions into Hata Defterim', async () => {
    render(<App />);

    // In vocab_drill: Answer question incorrectly (undermine is incorrect for enhance)
    const wrongChoiceBtn = screen.getByRole('button', { name: /undermine/i });
    fireEvent.click(wrongChoiceBtn);

    // Mnemonic learning card opens and shows mistake feedback
    expect(screen.getByText(/Hata Defterim & Zor Kelimeler/i)).toBeInTheDocument();

    // Now go to Hatalarım
    const mistakesTab = screen.getByRole('button', { name: /Hatalarım/i });
    fireEvent.click(mistakesTab);

    // Switch to Zor Kelimeler tab
    const zorKelimelerTab = screen.getByRole('button', { name: /Zor Kelimeler/i });
    fireEvent.click(zorKelimelerTab);

    // The failed word "enhance" must appear in the list with mistake badge!
    expect(screen.getByRole('heading', { name: /enhance/i })).toBeInTheDocument();
    expect(screen.getByText(/Soruda Yanlış Yapıldı/i)).toBeInTheDocument();

    // Click "Öğrendim" button on the card to clear the mistake
    const ogrendimBtn = screen.getByRole('button', { name: /Öğrendim/i });
    fireEvent.click(ogrendimBtn);

    // Verify it is removed from mistakes list
    expect(screen.queryByText(/Soruda Yanlış Yapıldı/i)).not.toBeInTheDocument();
  });

  it('verifies 30-day curriculum day completion toggle updates progress and saves to localStorage', async () => {
    render(<App />);

    // Navigate to Daily Plan
    const dailyTab = screen.getByRole('button', { name: /30 Günlük Plan/i });
    fireEvent.click(dailyTab);

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
