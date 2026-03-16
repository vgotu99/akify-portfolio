'use client';

import IconChevronLeft from '@/src/shared/ui/icons/icon-chevron-left';
import IconChevronRight from '@/src/shared/ui/icons/icon-chevron-right';
import { cva } from '@/styled-system/css';

interface ImageSliderButtonProps {
  variant: 'detail' | 'hero';
  type: 'prev' | 'next';
  onClick: () => void;
}

export default function ImageSliderButton({
  variant,
  type,
  onClick,
}: ImageSliderButtonProps) {
  const isVariantDetail = variant === 'detail';
  const IconComponent = ICON_MAP[type];

  return (
    <div className={styleVariant({ variant, type })}>
      <button type="button" onClick={onClick}>
        <IconComponent size={isVariantDetail ? 28 : 20} />
      </button>
    </div>
  );
}

const ICON_MAP = {
  prev: IconChevronLeft,
  next: IconChevronRight,
};

const styleVariant = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    variant: {
      detail: {
        height: 'full',
        position: 'absolute',
        top: '0px',
        color: 'colors.icon.primaryOnDark',
      },
      hero: {
        display: ['none', 'flex'],
        visibility: ['hidden', 'visible'],
        color: 'colors.icon.tertiaryOnDark',
      },
    },
    type: {
      prev: {
        left: '16px',
      },
      next: {
        right: '16px',
      },
    },
  },
});
