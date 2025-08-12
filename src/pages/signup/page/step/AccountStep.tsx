import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_STEPS } from '@shared/constants/path';

import * as s from './AccountStep.css';

import Button from '@/common/components/button/Button';

const AccountStep = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(SIGNUP_STEPS.COMPLETE);
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>계정 생성</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.inputGroup}>
          <label htmlFor="id" className={s.inputLabel}>
            아이디
          </label>
          <input
            type="text"
            id="id"
            placeholder="아이디를 입력하세요"
            className={s.input}
            name="username"
            autoComplete="username"
            required
          />
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="password" className={s.inputLabel}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            className={s.input}
            name="password"
            autoComplete="new-password"
            required
          />
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="passwordConfirm" className={s.inputLabel}>
            비밀번호 확인
          </label>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="비밀번호를 다시 입력하세요"
            className={s.input}
            name="passwordConfirm"
            autoComplete="new-password"
            required
          />
        </div>
        <div className={s.buttonContainer}>
          <Button variant="primary" label="다음" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default AccountStep;
