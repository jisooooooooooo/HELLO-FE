import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_STEPS } from '@shared/constants/path';

import * as s from './TermsStep.css';

import Button from '@/common/components/button/Button';

interface TermItem {
  id: 'service' | 'privacy' | 'marketing';
  label: string;
  required: boolean;
}

const TERMS: TermItem[] = [
  { id: 'service', label: '서비스 이용약관(필수)', required: true },
  { id: 'privacy', label: '개인정보 처리방침(필수)', required: true },
  { id: 'marketing', label: '마케팅 정보 수신 동의(선택)', required: false },
];

const TermsStep = () => {
  const navigate = useNavigate();

  const [checkedMap, setCheckedMap] = useState<Record<TermItem['id'], boolean>>({
    service: false,
    privacy: false,
    marketing: false,
  });

  const allChecked = TERMS.every((t) => checkedMap[t.id]);
  const requiredAllChecked = TERMS.filter((t) => t.required).every((t) => checkedMap[t.id]);

  const toggleAll = () => {
    const next = !allChecked;
    setCheckedMap({ service: next, privacy: next, marketing: next });
  };

  const toggleItem = (id: TermItem['id']) => {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNext = () => {
    if (requiredAllChecked) {
      navigate(SIGNUP_STEPS.VERIFY);
    }
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>약관 동의</h1>
      <p className={s.description}>서비스 이용을 위해 아래 약관에 동의해주세요.</p>

      <label className={s.allTerms} aria-checked={allChecked}>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={toggleAll}
          aria-label="모든 약관에 동의합니다"
        />
        <div className={s.allTermsText}>모든 약관에 동의합니다.</div>
      </label>

      <section className={s.termsContainer}>
        {TERMS.map((term) => (
          <label key={term.id} className={s.terms}>
            <input
              type="checkbox"
              checked={checkedMap[term.id]}
              onChange={() => toggleItem(term.id)}
              aria-label={term.label}
            />
            <div className={s.termsText}>{term.label}</div>
          </label>
        ))}
      </section>

      <div className={s.buttonContainer}>
        <Button
          variant="primary"
          label="다음"
          disabled={!requiredAllChecked}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default TermsStep;
