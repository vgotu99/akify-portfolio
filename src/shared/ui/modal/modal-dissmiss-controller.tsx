'use client';

import { useRouter } from 'next/navigation';
import type { WithChildren } from '@/src/shared/lib/types';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function ModalDismissController({ children }: WithChildren) {
  const router = useRouter();

  const handleDismiss = () => {
    router.back();
  };

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
        })}
        onClick={preventPropagation}
      >
        {children}
      </div>
    </div>
  );
}
