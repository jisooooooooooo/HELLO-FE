import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import PageHeader from '@/common/components/header/PageHeader';
import Header from '@/common/components/header/Header';
import Home from '@/pages/home/page/Home';
import Signup from '@/pages/signup/page/Signup';
import TermsStep from '@/pages/signup/page/step/TermsStep';
import VerifyStep from '@/pages/signup/page/step/VerifyStep';
import AccountStep from '@/pages/signup/page/step/AccountStep';
import CompleteStep from '@/pages/signup/page/step/CompleteStep';

export const MainRoutes: RouteObject[] = [
  // 기본 헤더
  {
    element: <Layout header={<Header />} />,
    children: [{ path: PATH.ROOT, element: <Home /> }],
  },

  // 회원가입
  {
    element: <Layout header={<PageHeader title="회원가입" />} />,
    children: [
      {
        path: PATH.SIGNUP,
        element: <Signup />,
        children: [
          { index: true, element: <Navigate to="terms" replace /> },
          { path: 'terms', element: <TermsStep /> },
          { path: 'verify', element: <VerifyStep /> },
          { path: 'account', element: <AccountStep /> },
          { path: 'complete', element: <CompleteStep /> },
        ],
      },
    ],
  },
];
