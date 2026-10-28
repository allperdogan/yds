import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BottomTabBar } from '../components/BottomTabBar';

describe('BottomTabBar Functional & Button Tests', () => {
  it('renders the 4 main tabs and clicking each switches active tab', () => {
    const setActiveTab = vi.fn();
    render(<BottomTabBar activeTab="today" setActiveTab={setActiveTab} mistakesCount={3} pendingReviewCount={2} />);

    const expected: Array<[string, string]> = [
      ['Bugün', 'today'],
      ['Çalış', 'study'],
      ['Deneme', 'mock_exam'],
      ['Hatalarım', 'mistakes']
    ];
    expected.forEach(([label, id]) => {
      fireEvent.click(screen.getByText(label));
      expect(setActiveTab).toHaveBeenCalledWith(id);
    });
  });

  it('shows the mistakes badge only when there are mistakes', () => {
    const { rerender } = render(
      <BottomTabBar activeTab="today" setActiveTab={vi.fn()} mistakesCount={5} pendingReviewCount={4} />
    );
    expect(screen.getByText('5')).toBeInTheDocument();
    rerender(<BottomTabBar activeTab="today" setActiveTab={vi.fn()} mistakesCount={0} />);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});
