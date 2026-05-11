'use client';

import { useShare } from '@/src/features/share/model/hooks';
import type { WithChildren } from '@/src/shared/lib/types';
import { css } from '@/styled-system/css';

export default function BottomBarShareController({ children }: WithChildren) {
  const { isDetailPage, handleShare } = useShare();

  return (
    <button
      onClick={handleShare}
      className={css({
        display: isDetailPage ? 'block' : 'none',
        visibility: isDetailPage ? 'visible' : 'hidden',
        color: ['colors.icon.secondary', 'colors.icon.secondaryOnDark'],
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
        _hover: {
          transform: 'scale(0.95)',
          color: ['colors.icon.primary', 'colors.icon.primaryOnDark'],
        },
      })}
    >
      {children}
    </button>
  );
}
