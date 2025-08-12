import { useLocation } from 'react-router-dom';

export const useSignupProgress = () => {
  const { pathname } = useLocation();

  const steps = ['/signup/terms', '/signup/verify', '/signup/account', '/signup/complete'];
  const idx = steps.findIndex((p) => pathname.startsWith(p));
  const currentStep = idx >= 0 ? idx + 1 : 1;

  return { currentStep, steps };
};
