import React, { useLayoutEffect } from 'react';
import confettiModule from 'canvas-confetti';

import { zIndex } from '@/styles/token';

interface CanvasConfettiModule {
  (opts?: Record<string, unknown>): void;
  create: (
    canvas: HTMLCanvasElement,
    opts?: Record<string, unknown>,
  ) => (opts?: Record<string, unknown>) => void;
}

const MOBILE_CANVAS_WIDTH = 430;

export const useConfettiCanvas = (hostRef: React.RefObject<HTMLElement | null>) => {
  useLayoutEffect(() => {
    let isCancelled = false;

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const host = hostRef.current ?? document.body;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    Object.assign(canvas.style, {
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: `${MOBILE_CANVAS_WIDTH}px`,
      height: '100dvh',
      pointerEvents: 'none',
      zIndex: zIndex.confetti,
    } as unknown as Partial<CSSStyleDeclaration>);

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssWidth = Math.min(MOBILE_CANVAS_WIDTH, window.innerWidth);
      const cssHeight = window.innerHeight;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, { passive: true });

    host.appendChild(canvas);

    const mod = confettiModule as unknown as CanvasConfettiModule;
    if (!isCancelled && mod && typeof mod.create === 'function') {
      const fire = mod.create(canvas, { resize: false, useWorker: true });

      fire({
        particleCount: prefersReducedMotion ? 40 : 90,
        spread: 70,
        startVelocity: prefersReducedMotion ? 25 : 45,
        gravity: 0.9,
        ticks: prefersReducedMotion ? 120 : 200,
        origin: { x: 0.5, y: 0.3 },
      });

      setTimeout(() => {
        if (isCancelled) {
          return;
        }
        fire({
          particleCount: prefersReducedMotion ? 30 : 70,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.6 },
        });
        fire({
          particleCount: prefersReducedMotion ? 30 : 70,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.6 },
        });
      }, 0);
    }

    return () => {
      isCancelled = true;
      window.removeEventListener('resize', setCanvasSize);
      canvas.remove();
    };
  }, [hostRef]);
};
