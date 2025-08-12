export const PATH = {
  ROOT: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
} as const;

export const SIGNUP_STEPS = {
  TERMS: `${PATH.SIGNUP}/terms`,
  VERIFY: `${PATH.SIGNUP}/verify`,
  ACCOUNT: `${PATH.SIGNUP}/account`,
  COMPLETE: `${PATH.SIGNUP}/complete`,
} as const;
