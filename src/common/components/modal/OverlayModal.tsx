import { type ReactNode, useEffect } from 'react';

import * as s from './OverlayModal.css';

interface Props {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const OverlayModal = ({ open, onClose, children }: Props) => {
  useEffect(() => {
    if (!open) {
      return;
    }
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className={s.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={s.panel} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default OverlayModal;
