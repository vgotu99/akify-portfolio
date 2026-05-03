'use client';

import type { WithChildren } from '@/src/shared/lib/types';
import { useToast } from '@/src/shared/ui/toast/context';
import { css } from '@/styled-system/css';

interface ToastControllerProps {
  toastMessage: React.ReactNode;
}

export default function ToastController({
  children,
  toastMessage,
}: WithChildren<ToastControllerProps>) {
  const { isVisible, showToast } = useToast();

  return (
    <div onClick={() => showToast()}>
      {children}
      <div
        className={css({
          transition: 'all 0.3s ease-in-out',
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          pointerEvents: 'none',
        })}
      >
        {toastMessage}
      </div>
    </div>
  );
}
