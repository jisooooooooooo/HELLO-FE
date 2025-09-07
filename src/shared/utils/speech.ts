import type { SpeechRecognitionCtorLike } from '@/shared/types/speech';

export const getRecognitionClass = (): SpeechRecognitionCtorLike | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  const win = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtorLike;
    webkitSpeechRecognition?: SpeechRecognitionCtorLike;
  };
  return win.SpeechRecognition ?? win.webkitSpeechRecognition;
};

export const isSecure = (): boolean => {
  if (typeof window === 'undefined') {
    return true;
  }
  return window.isSecureContext;
};

export const append = (prev: string, addition: string): string =>
  prev ? `${prev} ${addition}` : addition;
