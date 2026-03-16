'use client';

import { useSearchActions } from '@/src/features/search/model/context';
import IconSearch from '@/src/shared/ui/icons/icon-search';
import { css } from '@/styled-system/css';

export default function MobileSearchButton() {
  const { setIsMobileSearchOpen } = useSearchActions();

  return (
    <button
      onClick={() => setIsMobileSearchOpen(true)}
      className={css({
        display: ['block', 'none'],
        visibility: ['visible', 'hidden'],
        color: 'colors.icon.tertiaryOnDark',
        cursor: 'pointer',
      })}
    >
      <IconSearch size={20} />
    </button>
  );
}
