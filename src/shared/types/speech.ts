export interface Options {
  lang?: string;
  interimResults?: boolean;
  continuous?: boolean;
  onFinalResult?: (_: string) => void;
}

export interface UseSpeechToTextReturn {
  isSupported: boolean;
  isRecording: boolean;
  transcript: string;
  partialTranscript: string;
  error: string | null;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<{ isFinal?: boolean; 0: { transcript: string } }>;
}

export interface SpeechRecognitionInstance {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((_: SpeechRecognitionEventLike) => void) | null;
  onerror: ((_: unknown) => void) | null;
  onend: (() => void) | null;
  onstart?: () => void;
  start: () => void;
  stop: () => void;
}

export interface SpeechRecognitionCtorLike {
  new (): SpeechRecognitionInstance;
}
