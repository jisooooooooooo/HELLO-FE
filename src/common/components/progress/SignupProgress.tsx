import * as s from './SignupProgress.css';

type Props = {
  currentStep: number;
};

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

const SignupProgress = ({ currentStep }: Props) => {
  const safeTotal = 4;
  const safeStep = clamp(currentStep, 1, safeTotal);

  const widthKey = `${safeStep}of${safeTotal}` as keyof typeof s.barWidth;
  const widthClass = s.barWidth[widthKey];

  return (
    <div className={s.container} role="progressbar" aria-label="회원가입 진행률">
      <div className={s.track}>
        <div className={`${s.bar} ${widthClass}`} />
      </div>
    </div>
  );
};

export default SignupProgress;
