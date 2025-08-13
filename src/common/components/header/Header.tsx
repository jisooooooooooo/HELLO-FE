import { useNavigate } from 'react-router-dom';

import * as s from './Header.css';

import { IcProfile } from '@/assets/svgs';
import { PATH } from '@/shared/constants/path';

const Header = () => {
  const navigate = useNavigate();

  function handleProfileClick() {
    navigate(PATH.MYPAGE);
  }

  return (
    <header className={s.header}>
      <h1 className={s.title}>로고</h1>
      <button onClick={handleProfileClick}>
        <IcProfile className={s.profileButton} />
      </button>
    </header>
  );
};

export default Header;
