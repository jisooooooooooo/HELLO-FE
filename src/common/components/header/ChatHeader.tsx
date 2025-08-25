import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as styles from './PageHeader.css';

import { IcBack } from '@/assets/svgs';

type ChatHeaderProps = {
  title?: string;
  onBack?: () => void;
  onMenuClick?: () => void;
};

const ChatHeader = ({ title = '채팅', onBack, onMenuClick }: ChatHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    navigate(-1);
  };

  const handleMenu = () => {
    if (onMenuClick) {
      onMenuClick();
      return;
    }
    navigate(PATH.CHATLIST); // ✅ /chat/list 로 이동
  };

  return (
    <header className={styles.header}>
      {/* 좌측: 뒤로가기 */}
      <button type="button" onClick={handleBack} aria-label="뒤로가기">
        <IcBack className={styles.backButton} />
      </button>

      {/* 중앙: 타이틀 */}
      <h1 className={styles.title}>{title}</h1>

      {/* 우측: 햄버거 */}
      <button
        type="button"
        onClick={handleMenu}
        aria-label="메뉴"
        style={{
          position: 'absolute',
          top: '50%',
          right: '1.6rem',
          transform: 'translateY(-50%)',
          width: '1.55rem',
          height: '1.55rem',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <img src="/svgs/ic_hamburger.svg" alt="메뉴" style={{ width: '100%', height: '100%' }} />
      </button>
    </header>
  );
};

export default ChatHeader;
