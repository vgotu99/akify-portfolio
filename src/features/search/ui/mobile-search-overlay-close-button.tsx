'use client';

import { useSearchActions } from '@/src/features/search/model/context';
import IconX from '@/src/shared/ui/icons/icon-x';
import { css } from '@/styled-system/css';

export default function MobileSearchOverlayCloseButton() {
  const { setIsMobileSearchOpen } = useSearchActions();

  return (
    <IconX
      size={24}
      onClick={() => setIsMobileSearchOpen(false)}
      className={css({
        color: 'colors.text.primary',
        cursor: 'pointer',
      })}
    />
  );
}
