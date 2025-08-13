export const PATH = {
  ROOT: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  REMINISCE: '/reminisce',
  MYPAGE: '/mypage',
} as const;

export const SIGNUP_STEPS = {
  TERMS: `${PATH.SIGNUP}/terms`,
  VERIFY: `${PATH.SIGNUP}/verify`,
  ACCOUNT: `${PATH.SIGNUP}/account`,
  COMPLETE: `${PATH.SIGNUP}/complete`,
} as const;

export const REMINISCE_PATH = {
  LIST: PATH.REMINISCE,
  NEW: `${PATH.REMINISCE}/new`,
  DETAIL: (id: string | number) => `${PATH.REMINISCE}/${id}`,
} as const;
