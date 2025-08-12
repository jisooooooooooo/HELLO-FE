import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as s from './CompleteStep.css';

import Button from '@/common/components/button/Button';

const CompleteStep = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`${PATH.SIGNUP}/login`);
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>회원가입이 완료되었습니다!</h1>
      <p className={s.description}>가입해 주셔서 감사합니다.</p>
      <div className={s.buttonContainer}>
        <Button variant="primary" label="로그인하러 가기" onClick={handleNext} />
      </div>
    </section>
  );
};

export default CompleteStep;
