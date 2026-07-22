'use client';

import Link from 'next/link';
import type { MerchandiseCardVerticalProps } from '@/src/entities/merchandise/list/ui/merchandise-card-vertical/index';
import { ALL_IMAGE_SIZES } from '@/src/shared/config/image';
import imageLoader from '@/src/shared/lib/image-loader';
import type { WithChildren } from '@/src/shared/lib/types';
import { css, cx } from '@/styled-system/css';

export default function MerchandiseCardVerticalLink({
  merchandise,
  children,
}: WithChildren<MerchandiseCardVerticalProps>) {
  const handlePreload = () => {
    const width = getDetailImageWidth();
    const preloadUrl = imageLoader({
      src: merchandise.thumbnail,
      width,
      quality: 40,
    });

    const img = new Image();
    img.src = preloadUrl;
  };

  return (
    <Link
      href={`/merchandise/${merchandise.id}`}
      onMouseEnter={handlePreload}
      onTouchStart={handlePreload}
      className={cx(
        'group',
        css({
          width: 'full',
          maxWidth: '216px',
          margin: '0 auto',
          transition: 'transform 0.2s ease-in-out',
          _hover: {
            transform: 'scale(0.98)',
          },
        }),
      )}
    >
      {children}
    </Link>
  );
}

const getDetailImageWidth = () => {
  const dpr = window.devicePixelRatio || 1;
  const layoutWidth = window.innerWidth <= 800 ? window.innerWidth : 524;
  const targetWidth = layoutWidth * dpr;

  return ALL_IMAGE_SIZES.find((size) => size >= targetWidth) ?? 982;
};
