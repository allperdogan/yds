import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { VocabListsView } from '../components/VocabListsView';
import { YDS_VOCABULARY_LIST } from '../data/ydsVocabulary';

describe('VocabListsView', () => {
  const [a, b] = YDS_VOCABULARY_LIST;

  it('shows learned, mistaken and never-seen words in separate lists', () => {
    render(
      <VocabListsView
        knownVocabIds={[a.id]}
        pendingReviewVocabIds={[b.id]}
        vocabReviews={{ [b.id]: { seen: 2, wrong: 2, box: 0, due: Date.now(), lastSeen: Date.now() } }}
        onBack={vi.fn()}
        onStudy={vi.fn()}
      />
    );

    expect(screen.getByRole('tab', { name: /Öğrendiklerim \(1\)/ })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Hata yaptıklarım \(1\)/ })).toBeInTheDocument();
    const unseen = (YDS_VOCABULARY_LIST.length - 2).toLocaleString('tr-TR');
    expect(screen.getByRole('tab', { name: new RegExp(`Hiç görmediklerim \\(${unseen}\\)`) })).toBeInTheDocument();
    expect(screen.getByText(a.word, { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: /Hata yaptıklarım/ }));
    expect(screen.getByText(/2 kez yanlış/)).toBeInTheDocument();
    expect(screen.getByText(/tekrar listende/)).toBeInTheDocument();
  });
});
