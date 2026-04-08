'use client';

import { usePathname } from 'next/navigation';
import type { WithChildren } from '@/src/shared/lib/types';
import { css } from '@/styled-system/css';

export default function BottomBarIconController({ children }: WithChildren) {
  const pathname = usePathname();

  const isDetailPage = pathname.startsWith('/merchandise');

  const handleShare = () => {
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({ url }).catch(() => {});

      return;
    }

    navigator.clipboard
      .writeText(url)
      .then(() => {})
      .catch(() => {});
  };

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
