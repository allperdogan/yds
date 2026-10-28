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
        initialSource="curated"
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
    expect(screen.getByText(/^Bilmiyorum$/)).toBeInTheDocument();
    expect(screen.getAllByText(/Biliyorum, geç/i).length).toBeGreaterThanOrEqual(1);
  });

  it('handles choosing the correct answer: marks as known, removes from review, and opens mnemonics', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        initialSource="curated"
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
        initialSource="curated"
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

  it('calls onAddMistakeWord and onAddMistake when wrong answer is chosen', () => {
    const handleAddMistakeWord = vi.fn();
    const handleAddMistake = vi.fn();

    render(
      <VocabDrillView
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={vi.fn()}
        onRemovePendingReview={vi.fn()}
        onAddMistakeWord={handleAddMistakeWord}
        onAddMistake={handleAddMistake}
      />
    );

    const wrongBtn = screen.getByRole('button', { name: /undermine/i });
    fireEvent.click(wrongBtn);

    expect(handleAddMistakeWord).toHaveBeenCalledWith('w1');
    expect(handleAddMistake).toHaveBeenCalled();
    expect(screen.getByText(/Hata Defterim & Zor Kelimeler/i)).toBeInTheDocument();
    expect(screen.getByText(/Pekiştirene kadar takip edilecek/i)).toBeInTheDocument();
  });

  it('prevents question sequence shift when answering incorrectly (does not jump back to previous question)', () => {
    let pendingReviews: string[] = [];
    const handleMarkPendingReview = vi.fn((id: string) => {
      pendingReviews = [...pendingReviews, id];
    });

    const { rerender } = render(
      <VocabDrillView
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={pendingReviews}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={vi.fn()}
      />
    );

    // Question 1: target is "enhance" (w1). Answer it correctly and click Next
    const enhanceBtn = screen.getByRole('button', { name: /enhance/i });
    fireEvent.click(enhanceBtn);
    const nextBtn = screen.getByRole('button', { name: /Sıradaki Soruya Geç/i });
    fireEvent.click(nextBtn);

    // Now on Question 2: check that we are on Question 2 (Soru 2 / ...)
    expect(screen.getByText(/^2\/\d+$/)).toBeInTheDocument();

    // Answer Question 2 incorrectly (deteriorate is wrong for undermine)
    const wrongBtn = screen.getByRole('button', { name: /deteriorate/i });
    fireEvent.click(wrongBtn);

    // Re-render component with the updated pendingReviewVocabIds (simulating App state update)
    rerender(
      <VocabDrillView
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={pendingReviews}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={vi.fn()}
      />
    );

    // CRITICAL ASSERTION: The screen MUST STAY on Question 2! It must NOT jump back to Question 1!
    expect(screen.getByText(/^2\/\d+$/)).toBeInTheDocument();
    expect(screen.queryByText(/Soru 1 \//i)).not.toBeInTheDocument();
  });

  it('handles clicking "Bilmiyorum, şıkları öğret" button', () => {
    const handleMarkKnown = vi.fn();
    const handleMarkPendingReview = vi.fn();
    const handleRemovePendingReview = vi.fn();

    render(
      <VocabDrillView
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    const dontKnowBtn = screen.getByText(/^Bilmiyorum$/);
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
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    const directKnowBtn = screen.getAllByText(/Biliyorum, geç/i)[0];
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
        initialSource="curated"
        knownVocabIds={['w1']}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Click the Mastered Words button
    fireEvent.click(screen.getByRole('button', { name: 'Seçenekler' }));
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
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={handleMarkKnown}
        onMarkPendingReview={handleMarkPendingReview}
        onRemovePendingReview={handleRemovePendingReview}
      />
    );

    // Switch to "Bağlaçlar" category
    fireEvent.click(screen.getByRole('button', { name: 'Seçenekler' }));
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
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={vi.fn()}
        onRemovePendingReview={vi.fn()}
      />
    );

    // Open Atlas modal
    fireEvent.click(screen.getByRole('button', { name: 'Seçenekler' }));
    const openAtlasBtn = screen.getByRole('button', { name: /Fiil & Bağlaç Atlası/i });
    fireEvent.click(openAtlasBtn);

    expect(screen.getByText(/Fiil, Bağlaç ve Sıfat Listesi/i)).toBeInTheDocument();
    expect(screen.getByText(/ZITLIK BAĞLAÇLARI/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Anladım, Kapat/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByText(/Fiil, Bağlaç ve Sıfat Listesi/i)).not.toBeInTheDocument();
  });

  it('switches between "1. Adım: Günün Kelimelerini Öğren" and "2. Adım: Günün Testini Çöz"', () => {
    render(
      <VocabDrillView
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        initialDay={1}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={vi.fn()}
        onRemovePendingReview={vi.fn()}
      />
    );

    // Switch to Learn mode
    fireEvent.click(screen.getByRole('button', { name: 'Seçenekler' }));
    const learnTabBtn = screen.getByRole('button', { name: /1\. Adım: Günün Kelimelerini Öğren/i });
    fireEvent.click(learnTabBtn);

    // Verify learning card displays Day 1 vocabulary preview and mnemonic
    expect(screen.getByText(/GÜN 1 KELİME ÖN HAZIRLIĞI/i)).toBeInTheDocument();
    expect(screen.getByText(/Hafıza Kodu & Zihinsel Çağrışım/i)).toBeInTheDocument();

    // Click "Kelimeleri İnceledim, Günün Testini Başlat!"
    const startTestBtn = screen.getByText(/Kelimeleri İnceledim, Günün Testini Başlat!/i);
    fireEvent.click(startTestBtn);

    // Should return to test mode with blank question
    expect(screen.getByText(/_____/)).toBeInTheDocument();
  });
});

describe('VocabDrillView spaced repetition', () => {
  it('records a review and brings a missed word back later in the session', () => {
    const onRecordReview = vi.fn();
    render(
      <VocabDrillView
        initialSource="curated"
        knownVocabIds={[]}
        pendingReviewVocabIds={[]}
        onMarkKnown={vi.fn()}
        onMarkPendingReview={vi.fn()}
        onRemovePendingReview={vi.fn()}
        onRecordReview={onRecordReview}
      />
    );
    const total = Number(screen.getByText(/^1\/\d+$/).textContent!.split('/')[1]);
    fireEvent.click(screen.getByRole('button', { name: /undermine/i }));
    expect(onRecordReview).toHaveBeenCalledWith('w1', false);
    expect(screen.getByText(`1/${total + 1}`)).toBeInTheDocument();
  });
});
