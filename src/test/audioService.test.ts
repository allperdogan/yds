import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AudioService } from '../services/audioService';

describe('AudioService Unit Tests', () => {
  let mockSpeak: ReturnType<typeof vi.fn>;
  let mockCancel: ReturnType<typeof vi.fn>;
  let mockGetVoices: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockSpeak = vi.fn();
    mockCancel = vi.fn();
    mockGetVoices = vi.fn().mockReturnValue([
      { name: 'Google US English Natural', lang: 'en-US' },
      { name: 'Microsoft David Desktop', lang: 'en-US' },
      { name: 'Daniel', lang: 'en-GB' },
      { name: 'Turkish Female', lang: 'tr-TR' }
    ]);

    window.speechSynthesis.speak = mockSpeak;
    window.speechSynthesis.cancel = mockCancel;
    window.speechSynthesis.getVoices = mockGetVoices;
  });

  it('calls speechSynthesis.speak with text and en-US language', () => {
    AudioService.speak('deliberate');

    expect(mockCancel).toHaveBeenCalled();
    expect(mockSpeak).toHaveBeenCalledTimes(1);

    const utterance = mockSpeak.mock.calls[0][0];
    expect(utterance.text).toBe('deliberate');
    expect(utterance.lang).toBe('en-US');
  });

  it('supports custom speech rate', () => {
    AudioService.speak('vindicate', 0.8);

    expect(mockSpeak).toHaveBeenCalledTimes(1);
    const utterance = mockSpeak.mock.calls[0][0];
    expect(utterance.rate).toBe(0.8);
  });

  it('gracefully handles speech synthesis exceptions without crashing', () => {
    mockSpeak.mockImplementationOnce(() => {
      throw new Error('Audio synthesis hardware failure');
    });

    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    expect(() => AudioService.speak('resilience')).not.toThrow();
    expect(consoleWarnSpy).toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });
});
