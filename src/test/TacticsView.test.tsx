import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TacticsView } from '../components/TacticsView';

describe('TacticsView Functional & Button Tests', () => {
  it('renders initial tactic guide with golden rules and pro tips', () => {
    const onSelectPracticeType = vi.fn();
    render(<TacticsView onSelectPracticeType={onSelectPracticeType} />);

    expect(screen.getByText(/80 Soruluk YDS Sınav Stratejisi/i)).toBeInTheDocument();
    expect(screen.getByText(/10 Soru Tipi İçin Altın Taktik Kılavuzu/i)).toBeInTheDocument();
    expect(screen.getByText(/Altın Sınav Tüyosu/i)).toBeInTheDocument();
    expect(screen.getByText(/Soru Tipinin Altın Kuralları & Formülleri/i)).toBeInTheDocument();
  });

  it('switches tactic view when clicking question type pill', () => {
    const onSelectPracticeType = vi.fn();
    render(<TacticsView onSelectPracticeType={onSelectPracticeType} />);

    // Click on Gramer / Zamanlar pill
    const grammarPill = screen.getByText(/Dilbilgisi, Zamanlar/i);
    fireEvent.click(grammarPill);

    // Active tactic title should update
    expect(screen.getByRole('heading', { level: 3, name: /Dilbilgisi, Zamanlar & Edatlar/i })).toBeInTheDocument();
    expect(screen.getAllByText(/7 - 16\. Sorular/i).length).toBeGreaterThanOrEqual(1);
  });

  it('calls onSelectPracticeType when top practice button is clicked', () => {
    const onSelectPracticeType = vi.fn();
    render(<TacticsView initialType="vocabulary" onSelectPracticeType={onSelectPracticeType} />);

    const practiceBtn = screen.getByRole('button', { name: /Bu Taktikten Soru Çöz/i });
    fireEvent.click(practiceBtn);

    expect(onSelectPracticeType).toHaveBeenCalledWith('vocabulary');
  });

  it('calls onSelectPracticeType when bottom practice button is clicked', () => {
    const onSelectPracticeType = vi.fn();
    render(<TacticsView initialType="reading" onSelectPracticeType={onSelectPracticeType} />);

    const bottomPracticeBtn = screen.getByRole('button', { name: /Soru Çözümüne Geç/i });
    fireEvent.click(bottomPracticeBtn);

    expect(onSelectPracticeType).toHaveBeenCalledWith('reading');
  });

  it('renders sample question with options and toggles step-by-step solution steps', () => {
    render(<TacticsView initialType="translation_en_tr" />);

    expect(screen.getByText(/Bu Taktik Soruda Nasıl Uygulanır\? \(Örnek Soru & Çözüm\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Glaciologists warn that/i)).toBeInTheDocument();

    // Toggle solution button
    const toggleBtn = screen.getByRole('button', { name: /Taktiksel Çözümü Göster/i });
    fireEvent.click(toggleBtn);

    // Solution steps should be visible
    expect(screen.getByText(/Adım Adım Taktiksel Çözüm:/i)).toBeInTheDocument();
    expect(screen.getByText(/ÖSYM Çeldirici Tuzağı Neredeydi\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Hızlı Refleks Tüyosu/i)).toBeInTheDocument();
  });

  it('switches to ÖSYM Çeldirici Deşifresi tab and renders traps and physical protocol', () => {
    render(<TacticsView />);

    // Click traps tab button
    const trapsBtn = screen.getByRole('button', { name: /ÖSYM Çeldirici Deşifresi/i });
    fireEvent.click(trapsBtn);

    expect(screen.getByText(/ÖSYM Çeldirici Psikolojisi & Son 5 Yıl Çıkmış Soru Deşifresi/i)).toBeInTheDocument();
    expect(screen.getByText(/Tuzak 1: Virgül ve Yapı Elemesi/i)).toBeInTheDocument();
    expect(screen.getByText(/Son 30 Gün Fiziki Çıkmış Soru Protokolü/i)).toBeInTheDocument();
  });
});
