import { Fragment } from 'react/jsx-runtime';
import type { FormattedImages } from '@/src/shared/lib/types';
import type { ImageSliderVariant } from '@/src/shared/ui/image-slider';
import ImageSliderInfo from '@/src/shared/ui/image-slider/image-slider-info';
import ImageSliderItem from '@/src/shared/ui/image-slider/image-slider-item';
import { cva, cx } from '@/styled-system/css';

interface ImageSliderListProps {
  variant: ImageSliderVariant;
  images: FormattedImages;
  LinkComponent?: React.ElementType<{
    href: string;
    children: React.ReactNode;
  }>;
}

export default function ImageSliderList({
  variant,
  images,
  LinkComponent = Fragment,
}: ImageSliderListProps) {
  const isVariantDetail = variant === 'detail';

  return images.map(({ src, alt, title, subtitle, href }, index) => {
    const imageKey = typeof src === 'string' ? src : src.mobile;

    return (
      <div key={imageKey} className={cx('group', styleVariant({ variant }))}>
        <LinkComponent href={href ?? ''}>
          <ImageSliderItem
            variant={variant}
            src={src}
            alt={alt}
            priority={index === 0}
          />
          {!isVariantDetail && (
            <ImageSliderInfo title={title} subtitle={subtitle} />
          )}
        </LinkComponent>
      </div>
    );
  });
}

const styleVariant = cva({
  base: {
    position: 'relative',
  },
  variants: {
    variant: {
      detail: {},
      hero: {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
        '.group[data-active="false"] &': {
          opacity: [, 0.5],
          transform: [, 'scale(0.92)'],
        },
      },
    },
  },
});
