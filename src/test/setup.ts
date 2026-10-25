import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Web Speech API for Node / jsdom environment
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'speechSynthesis', {
    value: {
      speak: vi.fn(),
      cancel: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      getVoices: vi.fn().mockReturnValue([])
    },
    writable: true
  });
}
