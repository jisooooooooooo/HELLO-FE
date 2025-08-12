import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as s from './VerifyStep.css';

import Button from '@/common/components/button/Button';

const CODE_LENGTH = 8;

const VerifyStep = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`${PATH.SIGNUP}/account`);
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
        <div className={s.verifyCodeInputContainer}>
          {[...Array(CODE_LENGTH)].map((_, idx) => (
            <input
              key={idx}
              type="text"
              className={s.verifyCodeInput}
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
            />
          ))}
        </div>
      </div>

      <div className={s.descriptionContainer}>
        <div>
          <span className={s.descriptionTitle}>OOO님이</span>
          <span className={s.descriptionText}>회원님의 부모님이 맞으신가요?</span>
        </div>
        <div>
          <span className={s.descriptionBody}>맞으시다면 다음 단계로,</span>
          <span className={s.descriptionBody}>아니시라면 다시 인증 코드를 입력해 주세요.</span>
        </div>
      </div>

      <div className={s.buttonContainer}>
        <Button variant="primary" label="다음" onClick={handleNext} />
      </div>
    </section>
  );
};

export default VerifyStep;
