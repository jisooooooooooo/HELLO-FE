import { Outlet } from 'react-router-dom';

import SignupProgress from '@/common/components/progress/SignupProgress';
import { useSignupProgress } from '@/pages/signup/hooks/useSignupProgress';

const Signup = () => {
  const { currentStep } = useSignupProgress();

  return (
    <section className="signup-layout">
      <SignupProgress currentStep={currentStep} />
      <Outlet />
    </section>
  );
};

export default Signup;
