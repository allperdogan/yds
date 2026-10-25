import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BottomTabBar } from '../components/BottomTabBar';

describe('BottomTabBar Functional & Button Tests', () => {
  it('renders all mobile bottom tabs and clicking each switches active tab', () => {
    const setActiveTab = vi.fn();
    render(
      <BottomTabBar
        activeTab="vocab_drill"
        setActiveTab={setActiveTab}
        mistakesCount={3}
        pendingReviewCount={2}
      />
    );

    // Verify tabs rendered
    expect(screen.getByText('Kelime')).toBeInTheDocument();
    expect(screen.getByText('Paragraf')).toBeInTheDocument();
    expect(screen.getByText('Deneme')).toBeInTheDocument();
    expect(screen.getByText('Taktik')).toBeInTheDocument();
    expect(screen.getByText('Hatalar')).toBeInTheDocument();

    // Click Paragraf
    fireEvent.click(screen.getByText('Paragraf'));
    expect(setActiveTab).toHaveBeenCalledWith('reading_lab');

    // Click Deneme
    fireEvent.click(screen.getByText('Deneme'));
    expect(setActiveTab).toHaveBeenCalledWith('mock_exam');

    // Click Taktik
    fireEvent.click(screen.getByText('Taktik'));
    expect(setActiveTab).toHaveBeenCalledWith('tactics');

    // Click Hatalar
    fireEvent.click(screen.getByText('Hatalar'));
    expect(setActiveTab).toHaveBeenCalledWith('mistakes');

    // Click Kelime
    fireEvent.click(screen.getByText('Kelime'));
    expect(setActiveTab).toHaveBeenCalledWith('vocab_drill');
  });

  it('renders badges for pending reviews and mistakes when count > 0', () => {
    render(
      <BottomTabBar
        activeTab="vocab_drill"
        setActiveTab={vi.fn()}
        mistakesCount={5}
        pendingReviewCount={4}
      />
    );

    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
