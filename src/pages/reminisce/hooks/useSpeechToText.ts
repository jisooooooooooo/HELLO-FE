import { useCallback, useEffect, useRef, useState } from 'react';

import type {
  Options,
  UseSpeechToTextReturn,
  SpeechRecognitionEventLike,
  SpeechRecognitionCtorLike,
  SpeechRecognitionInstance,
} from '@/shared/types/speech';
import { append, getRecognitionClass, isSecure } from '@/shared/utils/speech';

const useSpeechToText = (options?: Options): UseSpeechToTextReturn => {
  const {
    lang = 'ko-KR',
    interimResults = true,
    continuous = false,
    onFinalResult,
  } = options || {};

  const RecognitionClass = getRecognitionClass() as SpeechRecognitionCtorLike | undefined;
  const isSupported = !!RecognitionClass;

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const interimRef = useRef('');
  const hasFinalRef = useRef(false);

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [partialTranscript, setPartialTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  const start = useCallback(() => {
    if (!isSupported) {
      return;
    }
    if (isRecording) {
      return;
    }

    if (!isSecure()) {
      setError('insecure_context');
      return;
    }

    try {
      if (!recognitionRef.current && RecognitionClass) {
        recognitionRef.current = new RecognitionClass();
      }
      const recognition = recognitionRef.current;
      if (!recognition) {
        return;
      }

      recognition.lang = lang;
      recognition.interimResults = interimResults;
      recognition.continuous = continuous;

      recognition.onresult = (event: SpeechRecognitionEventLike) => {
        let finalText = '';
        let interimText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const r = event.results[i];
          if ((r as { isFinal?: boolean }).isFinal) {
            finalText += r[0].transcript;
          } else {
            interimText += r[0].transcript;
          }
        }
        interimRef.current = interimText;
        setPartialTranscript(interimText);
        if (finalText) {
          const cleaned = finalText.trim();
          hasFinalRef.current = true;
          setTranscript((prev) => append(prev, cleaned));
          onFinalResult?.(cleaned);
        }
      };

      recognition.onerror = (e: unknown) => {
        const err = (e as { error?: string })?.error ?? 'speech_recognition_error';
        setError(err);
      };

      recognition.onstart = () => {
        setError(null);
      };

      recognition.onend = () => {
        const flushed = interimRef.current.trim();
        if (!hasFinalRef.current && flushed) {
          setTranscript((prev) => append(prev, flushed));
          onFinalResult?.(flushed);
        }
        interimRef.current = '';
        hasFinalRef.current = false;
        setPartialTranscript('');
        setIsRecording(false);
      };

      setIsRecording(true);
      interimRef.current = '';
      hasFinalRef.current = false;
      setPartialTranscript('');
      setError(null);
      recognition.start();
    } catch (e: unknown) {
      const err = (e as { message?: string })?.message || 'speech_recognition_start_failed';
      setError(err);
      setIsRecording(false);
    }
  }, [RecognitionClass, continuous, interimResults, isSupported, lang, onFinalResult, isRecording]);

  const stop = useCallback(() => {
    try {
      recognitionRef.current?.stop();
    } catch (err) {
      void err;
    } finally {
      setIsRecording(false);
    }
  }, []);

  const reset = useCallback(() => {
    setTranscript('');
    setPartialTranscript('');
    setError(null);
  }, []);

  useEffect(() => {
    return () => {
      try {
        recognitionRef.current?.stop();
      } catch (err) {
        void err;
      }
      const rec = recognitionRef.current;
      if (rec) {
        rec.onresult = null;
        rec.onerror = null;
        rec.onend = null;
      }
    };
  }, []);

  return { isSupported, isRecording, transcript, partialTranscript, error, start, stop, reset };
};

export default useSpeechToText;
