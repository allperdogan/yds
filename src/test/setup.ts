import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Web Speech API for Node / jsdom environment
if (typeof window !== 'undefined') {
  class MockSpeechSynthesisUtterance {
    text: string;
    lang: string = 'en-US';
    rate: number = 1.0;
    pitch: number = 1.0;
    voice: any = null;
    constructor(text: string) {
      this.text = text;
    }
  }

  (window as any).SpeechSynthesisUtterance = MockSpeechSynthesisUtterance;
  (globalThis as any).SpeechSynthesisUtterance = MockSpeechSynthesisUtterance;

  Object.defineProperty(window, 'speechSynthesis', {
    value: {
      speak: vi.fn(),
      cancel: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      getVoices: vi.fn().mockReturnValue([])
    },
    writable: true,
    configurable: true
  });
}
