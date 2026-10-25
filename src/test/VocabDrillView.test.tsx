import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { VocabDrillView } from '../components/VocabDrillView';

describe('VocabDrillView Functional & Button Tests', () => {
  it('renders sentence with blank and 4 options', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Question sentence should be visible
    expect(screen.getByText(/_____/)).toBeInTheDocument();

    // 4 option buttons should be present
    expect(screen.getByRole('button', { name: /enhance/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /undermine/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /deteriorate/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /deplete/i })).toBeInTheDocument();

    // Action buttons before answering should be present
    expect(screen.getByText(/Bilmiyorum \(Tüm Şıkları Öğret\)/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Biliyorum \(Atla\)/i).length).toBeGreaterThanOrEqual(1);
  });

  it('handles choosing the correct answer: marks as known, removes from review, and opens mnemonics', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Click correct option "enhance"
    const enhanceBtn = screen.getByRole('button', { name: /enhance/i });
    fireEvent.click(enhanceBtn);

    // Verify correct handlers called
    expect(handleMarkKnown).toHaveBeenCalledWith('w1');
    expect(handleRemovePendingReview).toHaveBeenCalledWith('w1');

    // Mnemonic breakdown card should be displayed
    expect(screen.getByText(/Hafıza Teknikleri & Çözüm Formülü/i)).toBeInTheDocument();

    // "Sıradaki Soruya Geç" button should appear
    expect(screen.getByRole('button', { name: /Sıradaki Soruya Geç/i })).toBeInTheDocument();
  });

  it('handles choosing wrong answer: queues for re-test and displays mnemonics', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Click wrong option "undermine"
    const wrongBtn = screen.getByRole('button', { name: /undermine/i });
    fireEvent.click(wrongBtn);

    // Should NOT mark as known
    expect(handleMarkKnown).not.toHaveBeenCalled();
    // SHOULD queue for re-testing
    expect(handleMarkPendingReview).toHaveBeenCalledWith('w1');

    // Mnemonic card opens
    expect(screen.getByText(/Hafıza Teknikleri & Çözüm Formülü/i)).toBeInTheDocument();
  });

  it('handles clicking "Bilmiyorum (Tüm Şıkları Öğret)" button', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    const dontKnowBtn = screen.getByText(/Bilmiyorum \(Tüm Şıkları Öğret\)/i);
    fireEvent.click(dontKnowBtn);

    expect(handleMarkPendingReview).toHaveBeenCalledWith('w1');
    expect(screen.getByText(/Hafıza Teknikleri & Çözüm Formülü/i)).toBeInTheDocument();
  });

  it('handles clicking "Biliyorum (Atla)" button', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    const directKnowBtn = screen.getAllByText(/Biliyorum \(Atla\)/i)[0];
    fireEvent.click(directKnowBtn);

    expect(handleMarkKnown).toHaveBeenCalledWith('w1');
    expect(handleRemovePendingReview).toHaveBeenCalledWith('w1');
  });

  it('toggles the "Öğrendiklerim" Mastered Words modal open and close', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={['w1']}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Click the Mastered Words button
    const openModalBtn = screen.getByText(/1 Öğrendim \(Listele\)/i);
    fireEvent.click(openModalBtn);

    // Modal title should appear
    expect(screen.getByText(/Öğrendiğim Kelimeler Havuzu/i)).toBeInTheDocument();

    // Learned word "enhance" should be listed inside the document
    expect(screen.getAllByText(/^enhance$/i).length).toBeGreaterThanOrEqual(1);

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Pencereyi Kapat/i });
    fireEvent.click(closeBtn);

    // Modal should be closed
    expect(screen.queryByText(/Öğrendiğim Kelimeler Havuzu/i)).not.toBeInTheDocument();
  });

  it('switches between question categories (Bağlaçlar, Gramer, vb.)', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Switch to "Bağlaçlar" category
    const conjBtn = screen.getByRole('button', { name: /Bağlaçlar/i });
    fireEvent.click(conjBtn);

    // Tag should indicate Bağlaç Sorusu
    expect(screen.getByText(/Bağlaç Sorusu/i)).toBeInTheDocument();
    // Although option should appear
    expect(screen.getByRole('button', { name: /Although/i })).toBeInTheDocument();

    // Switch to "Gramer" category
    const gramBtn = screen.getByRole('button', { name: /Gramer/i });
    fireEvent.click(gramBtn);

    // Tag should indicate Gramer Formülü
    expect(screen.getByText(/Gramer Formülü/i)).toBeInTheDocument();
  });

  it('toggles the "Fiil & Bağlaç Atlası" reference modal', () => {
    render(
      <VocabDrillView
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={vi.fn()}
        onRemovePendingReview={vi.fn()}
      />
    );

    // Open Atlas modal
    const openAtlasBtn = screen.getByRole('button', { name: /Fiil & Bağlaç Atlası/i });
    fireEvent.click(openAtlasBtn);

    expect(screen.getByText(/ÖSYM Altın Fiil, Bağlaç & Sıfat Atlası/i)).toBeInTheDocument();
    expect(screen.getByText(/ZITLIK BAĞLAÇLARI/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Anladım, Kapat/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByText(/ÖSYM Altın Fiil, Bağlaç & Sıfat Atlası/i)).not.toBeInTheDocument();
  });
});
