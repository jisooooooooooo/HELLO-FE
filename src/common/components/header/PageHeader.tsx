import { useNavigate } from 'react-router-dom';

import * as styles from './PageHeader.css';

import { PATH } from '@/shared/constants/path';
import { IcBack } from '@/assets/svgs';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  confirmOnBack?: boolean;
  confirmTitle?: string;
  confirmDescription?: string;
  onConfirmExit?: () => void;
  isGamePlaying?: boolean;
}

const PageHeader = ({
  title,
  onBack,
  confirmOnBack = false,
  confirmTitle,
  confirmDescription,
  onConfirmExit,
  isGamePlaying = false,
}: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    if (confirmOnBack && isGamePlaying) {
      const ok = window.confirm(
        `${confirmTitle ?? '나가시겠습니까?'}\n${
          confirmDescription ?? '게임 기록이 저장되지 않을 수 있습니다.'
        }`.trim(),
      );
      if (ok) {
        if (onConfirmExit) {
          onConfirmExit();
        } else {
          window.location.assign(PATH.GAME);
        }
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={styles.header}>
      <button onClick={handleBack}>
        <IcBack className={styles.backButton} />
      </button>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default PageHeader;
