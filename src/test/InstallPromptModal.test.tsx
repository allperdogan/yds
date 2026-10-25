import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InstallPromptModal } from '../components/InstallPromptModal';

describe('InstallPromptModal Functional & Button Tests', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(<InstallPromptModal isOpen={false} onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders modal and instructions when isOpen is true, and calls onClose when close button clicked', () => {
    const onClose = vi.fn();
    render(<InstallPromptModal isOpen={true} onClose={onClose} />);

    expect(screen.getByText(/PWA Native Kurulum Rehberi/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone \/ iPad \(Safari\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Bilgisayar \(PC \/ Mac - Chrome \/ Edge\)/i)).toBeInTheDocument();

    // Click close button
    const closeBtn = screen.getByRole('button', { name: /Anladım, Kapat/i });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
