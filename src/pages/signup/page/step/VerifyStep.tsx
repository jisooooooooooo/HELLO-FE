import { useNavigate } from 'react-router-dom';
import { SIGNUP_STEPS } from '@shared/constants/path';
import { useState, useRef } from 'react';
import type { KeyboardEvent, ClipboardEvent } from 'react';

import * as s from './VerifyStep.css';

import Button from '@/common/components/button/Button';

const CODE_LENGTH = 8;

const VerifyStep = () => {
  const navigate = useNavigate();
  const [codeDigits, setCodeDigits] = useState(Array(CODE_LENGTH).fill(''));
  const [parentName] = useState('홍길동');

  const isVerified = codeDigits.every((d) => d.length === 1);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleNext = () => {
    navigate(SIGNUP_STEPS.ACCOUNT);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    const key = e.key;
    if (key === 'Backspace') {
      if (!codeDigits[idx] && idx > 0) {
        e.preventDefault();
        inputRefs.current[idx - 1]?.focus();
        const next = [...codeDigits];
        next[idx - 1] = '';
        setCodeDigits(next);
      }
      return;
    }
    if (key === 'ArrowLeft' && idx > 0) {
      e.preventDefault();
      inputRefs.current[idx - 1]?.focus();
      return;
    }
    if (key === 'ArrowRight' && idx < CODE_LENGTH - 1) {
      e.preventDefault();
      inputRefs.current[idx + 1]?.focus();
      return;
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
    const text = e.clipboardData.getData('text');
    const digits = (text.match(/\d/g) || []).slice(0, CODE_LENGTH);
    if (digits.length === 0) {
      return;
    }
    e.preventDefault();
    const start = Math.max(
      0,
      inputRefs.current.findIndex((el) => el === document.activeElement),
    );
    const next = [...codeDigits];
    for (let i = 0; i < digits.length && start + i < CODE_LENGTH; i++) {
      next[start + i] = digits[i];
    }
    setCodeDigits(next);
    const last = Math.min(start + digits.length, CODE_LENGTH - 1);
    inputRefs.current[last]?.focus();
  };

  const handleChange = (value: string, idx: number) => {
    // only keep last numeric char
    const digit = (value.match(/\d/g) || []).slice(-1)[0] ?? '';
    const newCodeDigits = [...codeDigits];
    newCodeDigits[idx] = digit;
    setCodeDigits(newCodeDigits);

    if (digit && idx < CODE_LENGTH - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>관리자 계정 조회</h1>
      <p className={s.description}>
        관리자 회원 가입 시 부모 계정별로 발급받은 인증코드를 입력해 주세요.
      </p>
      <div className={s.verifyCodeContainer}>
        <label className={s.verifyCodeTitle} htmlFor="verify-code-0">
          인증 코드
        </label>
        <div className={s.verifyCodeInputContainer} onPaste={handlePaste}>
          {[...Array(CODE_LENGTH)].map((_, idx) => (
            <input
              key={idx}
              id={`verify-code-${idx}`}
              aria-label={`인증코드 ${idx + 1} 자리`}
              type="text"
              className={s.verifyCodeInput}
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              value={codeDigits[idx]}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              autoFocus={idx === 0}
            />
          ))}
        </div>
      </div>

      {isVerified && (
        <div className={s.descriptionContainer}>
          <div>
            <span className={s.descriptionTitle}>{parentName}님이</span>
            <span className={s.descriptionText}>회원님의 부모님이 맞으신가요?</span>
          </div>
          <div>
            <span className={s.descriptionBody}>맞으시다면 다음 단계로,</span>
            <span className={s.descriptionBody}>아니시라면 다시 인증 코드를 입력해 주세요.</span>
          </div>
        </div>
      )}

      <div className={s.buttonContainer}>
        <Button variant="primary" label="다음" onClick={handleNext} disabled={!isVerified} />
      </div>
    </section>
  );
};

export default VerifyStep;
