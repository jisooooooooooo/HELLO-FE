import type { ReactNode } from 'react';
import { overlay } from 'overlay-kit';

import OverlayModal from '@/common/components/modal/OverlayModal';

type RenderControls<T> = {
  close: (value: T) => void;
  unmount: () => void;
};

export const useOverlayModal = () => {
  const open = async <T = void,>(
    render: (controls: RenderControls<T>) => ReactNode,
    options?: { onBackdrop?: T },
  ): Promise<T> => {
    const result = await overlay.openAsync<T>(({ isOpen, close, unmount }) => (
      <OverlayModal
        open={isOpen}
        onClose={() => options?.onBackdrop !== undefined && close(options.onBackdrop as T)}
      >
        {render({ close, unmount })}
      </OverlayModal>
    ));
    return result as T;
  };

  return { open } as const;
};
