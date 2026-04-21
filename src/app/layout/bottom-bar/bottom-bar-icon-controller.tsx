'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import type { WithChildren } from '@/src/shared/lib/types';
import { css } from '@/styled-system/css';

export default function BottomBarIconController({ children }: WithChildren) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const target = searchParams.get('target');

  const isDetailPage =
    pathname.startsWith('/merchandise') || target?.startsWith('/merchandise');

  const handleShare = () => {
    const origin = window.location.origin;
    const sharedTarget = target?.startsWith('/merchandise') ? target : pathname;
    const sharedUrl = `${origin}${sharedTarget}`;

    if (navigator.share) {
      navigator.share({ url: sharedUrl }).catch(() => {});

      return;
    }

    navigator.clipboard
      .writeText(sharedUrl)
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
