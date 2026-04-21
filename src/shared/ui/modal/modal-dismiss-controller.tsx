'use client';

import type { WithChildren } from '@/src/shared/lib/types';
import { useModalDismiss } from '@/src/shared/ui/modal/context';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function ModalDismissController({ children }: WithChildren) {
  const { handleDismiss, isDismissing } = useModalDismiss();

  const preventPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={flex({
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: ['end', 'center'],
        background: 'colors.surface.alphaBlackLight',
        position: 'fixed',
        bottom: 0,
        zIndex: 1000,
        cursor: 'pointer',
      })}
      onClick={handleDismiss}
    >
      <div
        className={css({
          width: ['full', '520px'],
          background: 'colors.surface.white',
          borderTopRadius: '2xl',
          borderBottomRadius: ['none', '2xl'],
          cursor: 'default',
          animation: isDismissing
            ? [
                'modal-slide-down 0.1s cubic-bezier(0.4, 0, 1, 1) both',
                'modal-scale-out 0.2s cubic-bezier(0.4, 0, 1, 1) both',
              ]
            : [
                'modal-slide-up 0.25s cubic-bezier(0.22, 1, 0.36, 1) both',
                'modal-scale-in 0.1s cubic-bezier(0.22, 1, 0.36, 1) both',
              ],
        })}
        onClick={preventPropagation}
      >
        {children}
      </div>
    </div>
  );
}
