import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@assets/images/logo.png';
import { IcUser, IcLock, IcEye, IcEyeoff } from '@assets/svgs/index';

import * as s from './Login.css';

import Button from '@/common/components/button/Button';
import { PATH } from '@/shared/constants/path';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((v) => !v);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={s.container}>
      <img src={logoImg} alt="logo" className={s.logo} />
      <div className={s.title}>로그인</div>
      <form onSubmit={onSubmit} noValidate>
        <div className={s.inputGroup}>
          <label htmlFor="id" className={s.sr}>
            아이디
          </label>
          <div className={s.inputWrapper}>
            <IcUser className={s.iconLeft} />
            <input
              type="text"
              id="id"
              placeholder="아이디"
              className={s.input}
              name="username"
              autoComplete="username"
              required
            />
          </div>
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="password" className={s.sr}>
            비밀번호
          </label>
          <div className={s.inputWrapper}>
            <IcLock className={s.iconLeft} />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="비밀번호"
              className={s.input}
              name="password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보이기'}
              className={s.iconRight}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <IcEyeoff className={s.iconRight} />
              ) : (
                <IcEye className={s.iconRight} />
              )}
            </button>
          </div>
        </div>
        <div className={s.buttonContainer}>
          <Button label="로그인" variant="secondary" type="submit" />
        </div>
      </form>
      <p className={s.signupText}>
        아직 계정이 없다면{' '}
        <Link to={PATH.SIGNUP} className={s.signupLink}>
          회원가입
        </Link>
        을 해주세요
      </p>
    </div>
  );
};

export default Login;
