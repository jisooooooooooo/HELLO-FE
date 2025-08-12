import { useNavigate } from 'react-router-dom';

import * as styles from './PageHeader.css';

import { IcBack } from '@/assets/svgs';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

const PageHeader = ({ title, onBack }: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
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
