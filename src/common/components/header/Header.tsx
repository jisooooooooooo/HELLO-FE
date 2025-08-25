import { useNavigate } from 'react-router-dom';
import logo from '@assets/images/logo.png';

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
      <img src={logo} className={s.logo} alt="logo" />
      <button onClick={handleProfileClick}>
        <IcProfile className={s.profileButton} />
      </button>
    </header>
  );
};

export default Header;
