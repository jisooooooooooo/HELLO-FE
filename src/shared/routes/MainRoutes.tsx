import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import ChatHeader from '@/common/components/header/ChatHeader';
import PageHeader from '@/common/components/header/PageHeader';
import Header from '@/common/components/header/Header';
import Home from '@/pages/home/page/Home';
import Login from '@/pages/login/page/Login';
import Signup from '@/pages/signup/page/Signup';
import TermsStep from '@/pages/signup/page/step/TermsStep';
import VerifyStep from '@/pages/signup/page/step/VerifyStep';
import AccountStep from '@/pages/signup/page/step/AccountStep';
import CompleteStep from '@/pages/signup/page/step/CompleteStep';
import ReminisceList from '@/pages/reminisce/page/ReminisceList';
import ReminisceWrite from '@/pages/reminisce/page/ReminisceWrite';
import ReminisceDetail from '@/pages/reminisce/page/ReminisceDetail';
import MyPage from '@/pages/mypage/page/MyPage';
import Chat from '@/pages/chat/page/Chat';
import ChatList from '@/pages/chat/page/ChatList';
import Schedule from '@/pages/schedule/page/Schedule';

export const MainRoutes: RouteObject[] = [
  // 기본 헤더
  {
    element: <Layout header={<Header />} />,
    children: [{ path: PATH.ROOT, element: <Home /> }],
  },

  // 로그인
  {
    element: <Layout />,
    children: [{ path: PATH.LOGIN, element: <Login /> }],
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

  // 회상노트
  {
    element: <Layout header={<PageHeader title="회상노트" />} />,
    children: [
      { path: PATH.REMINISCE, element: <ReminisceList /> },
      { path: `${PATH.REMINISCE}/new`, element: <ReminisceWrite /> },
      { path: `${PATH.REMINISCE}/:id`, element: <ReminisceDetail /> },
    ],
  },

  // 마이페이지
  {
    element: <Layout header={<PageHeader title="마이페이지" />} />,
    children: [{ path: PATH.MYPAGE, element: <MyPage /> }],
  },
  // ✅ 일정
  {
    element: <Layout header={<PageHeader title="일정" />} />,
    children: [{ path: PATH.SCHEDULE, element: <Schedule /> }],
  },

  // 채팅
  {
    element: <Layout header={<ChatHeader title="채팅" />} />,
    children: [{ path: PATH.CHAT, element: <Chat /> }],
  },

  // 채팅 리스트
  {
    element: <Layout header={<PageHeader title="채팅 기록" />} />,
    children: [{ path: PATH.CHATLIST, element: <ChatList /> }],
  },
];
