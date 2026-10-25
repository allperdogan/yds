export class AudioService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static englishVoice: SpeechSynthesisVoice | null = null;

  private static initVoice() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize natural English US or GB voices
    this.englishVoice =
      voices.find(v => v.lang.startsWith('en-US') && v.name.includes('Natural')) ||
      voices.find(v => v.lang.startsWith('en-US')) ||
      voices.find(v => v.lang.startsWith('en-GB')) ||
      voices.find(v => v.lang.startsWith('en')) ||
      null;
  }

  public static speak(text: string, rate: number = 0.9): void {
    if (!this.synth) return;

    try {
      this.synth.cancel(); // Stop any currently playing audio

      if (!this.englishVoice) {
        this.initVoice();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.pitch = 1.0;

      if (this.englishVoice) {
        utterance.voice = this.englishVoice;
      }

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
    }
  }
}

// Preload voices when available
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Voices loaded in browser
  };
}
