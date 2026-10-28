import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';

// Dark mode, eye care, backup and install live in the header's settings menu.
const openSettingsItem = (name: RegExp): HTMLElement => {
  fireEvent.click(screen.getByRole('button', { name: 'Ayarlar' }));
  return screen.getByRole(/Karanlık|Göz/.test(name.source) ? 'menuitemcheckbox' : 'menuitem', { name });
};

describe('App Integration & Complete Flow Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('opens on the Today screen', () => {
    render(<App />);
    expect(screen.getByText('Hazırlık')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bugün' })).toBeInTheDocument();
    expect(screen.getByText(/Tahmini YDS puanın/i)).toBeInTheDocument();
  });

  it('navigates across the 4 sections and into a topic', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    expect(screen.getByRole('heading', { name: 'Çalış' })).toBeInTheDocument();

    // Open a topic: the first question is shown right away
    fireEvent.click(screen.getByRole('button', { name: /Cloze Test/ }));
    expect(screen.getByText(/^Yeni \(/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^A\)/ })).toBeInTheDocument();

    // The tab takes you back to the topic list
    fireEvent.click(screen.getAllByRole('button', { name: 'Çalış' })[0]);
    expect(screen.getByRole('heading', { name: 'Çalış' })).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: 'Deneme' })[0]);
    expect(screen.getByText(/Gerçek sınav gibi: 80 soru, 180 dakika/i)).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: /Hatalarım/ })[0]);
    expect(screen.getByText(/Yanlış yaptığın sorular ve kelimeler burada/i)).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: 'Bugün' })[0]);
    fireEvent.click(screen.getByRole('button', { name: /30 günlük program/i }));
    expect(screen.getByText('30 Günlük Program')).toBeInTheDocument();
  });

  it('toggles dark mode class on document element', () => {
    render(<App />);

    const darkModeToggleBtn = openSettingsItem(/Karanlık mod/i);
    expect(darkModeToggleBtn).toBeInTheDocument();

    // Initially light mode
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Toggle dark mode
    fireEvent.click(darkModeToggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Toggle back to light mode
    fireEvent.click(darkModeToggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('opens and closes the PWA install guide modal', () => {
    render(<App />);

    const installHelpBtn = openSettingsItem(/kur/i);
    fireEvent.click(installHelpBtn);

    // Modal is opened
    expect(screen.getByText(/PWA Native Kurulum Rehberi/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Anladım, Kapat/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/PWA Native Kurulum Rehberi/i)).not.toBeInTheDocument();
  });
});
