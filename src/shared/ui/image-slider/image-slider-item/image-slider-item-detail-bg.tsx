'use client';

import { cloneElement, isValidElement } from 'react';
import { ALL_IMAGE_SIZES } from '@/src/shared/config/image';
import imageLoader from '@/src/shared/lib/image-loader';
import type { WithChildren } from '@/src/shared/lib/types';

interface ImageSliderItemDetailBgProps {
  src: string;
}

export default function ImageSliderItemDetailBg({
  src,
  children,
}: WithChildren<ImageSliderItemDetailBgProps>) {
  const thumbnailUrl = imageLoader({
    src,
    width: getThumbnailImageWidth(),
    quality: 50,
  });

  if (!isValidElement<{ style?: React.CSSProperties }>(children)) {
    return <>{children}</>;
  }

  return cloneElement(children, {
    style: {
      backgroundImage: `url("${thumbnailUrl}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ...children.props.style,
    },
  });
}

const getThumbnailImageWidth = () => {
  if (typeof window === 'undefined') return 384;

  const dpr = window.devicePixelRatio || 1;
  const layoutWidth =
    window.innerWidth <= 454 ? window.innerWidth * 0.5 - 11 : 216;
  const targetWidth = layoutWidth * dpr;

  return ALL_IMAGE_SIZES.find((size) => size >= targetWidth) ?? 384;
};
