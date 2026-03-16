import type { FormattedImages } from '@/src/shared/lib/types';
import type { ImageSliderVariant } from '@/src/shared/ui/image-slider';
import ImageSliderInfo from '@/src/shared/ui/image-slider/image-slider-info';
import ImageSliderLink from '@/src/shared/ui/image-slider/image-slider-link';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { cva } from '@/styled-system/css';

interface ImageSliderListProps {
  variant: ImageSliderVariant;
  images: FormattedImages;
}

export default function ImageSliderList({
  variant,
  images,
}: ImageSliderListProps) {
  const { sizes, aspectRatio } = VARIANT_MAP[variant];
  const isVariantDetail = variant === 'detail';

  return images.map(({ src, alt, title, subtitle, href }, index) => (
    <div key={src} className={styleVariant({ containerVariant: variant })}>
      <ImageSliderLink href={href}>
        <ResponsiveImage
          src={src}
          alt={alt}
          sizes={sizes}
          aspectRatio={aspectRatio}
          priority={index === 0}
          quality={75}
          className={styleVariant({ imageVariant: variant })}
        />
        {!isVariantDetail && (
          <ImageSliderInfo title={title} subtitle={subtitle} />
        )}
      </ImageSliderLink>
    </div>
  ));
}

const VARIANT_MAP = {
  detail: {
    sizes: '524px',
    aspectRatio: 1 / 1,
  },
  hero: {
    sizes: '1000px',
    aspectRatio: 5 / 3,
  },
};

const styleVariant = cva({
  base: {
    position: 'relative',
  },
  variants: {
    imageVariant: {
      detail: {
        borderRadius: [, 'lg'],
      },
      hero: {
        borderWidth: [, 'xlight'],
        borderColor: [, 'colors.border.alphaOnDarkLight'],
        borderRadius: [, 'xl'],
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: [, 'xl'],
          boxShadow: [, '4px 4px 16px 0 rgba(255, 255, 255, 0.4) inset'],
          pointerEvents: 'none',
        },
      },
    },
    containerVariant: {
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
