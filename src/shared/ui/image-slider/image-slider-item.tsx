import { getImageProps } from 'next/image';
import { preload } from 'react-dom';
import type { ImageSliderVariant } from '@/src/shared/ui/image-slider';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { cva } from '@/styled-system/css';

interface ImageSliderItemProps {
  variant: ImageSliderVariant;
  src: string | { mobile: string; desktop: string };
  alt: string;
  priority: boolean;
}

export default function ImageSliderItem({
  variant,
  src,
  alt,
  priority,
}: ImageSliderItemProps) {
  const { sizes } = VARIANT_MAP[variant];
  const imageVariantClass = styleVariant({ variant });

  const isStringSrc = typeof src === 'string';

  if (isStringSrc) {
    const ratio = variant === 'hero' ? 5 / 4 : 1 / 1;

    return (
      <ResponsiveImage
        src={src}
        alt={alt}
        sizes={sizes}
        aspectRatio={ratio}
        priority={priority}
        quality={40}
        className={imageVariantClass}
      />
    );
  }

  const common = { alt, sizes, priority };

  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({
    ...common,
    fill: true,
    src: src.desktop,
    quality: 50,
  });

  const { props: mobileProps } = getImageProps({
    ...common,
    fill: true,
    src: src.mobile,
    quality: 50,
  });

  if (priority) {
    preload(desktopSrc, {
      as: 'image',
      imageSrcSet: desktopSrcSet,
      imageSizes: sizes,
      media: '(min-width: 800px)',
    });
    preload(mobileProps.src, {
      as: 'image',
      imageSrcSet: mobileProps.srcSet,
      imageSizes: mobileProps.sizes,
      media: '(max-width: 799px)',
    });
  }

  return (
    <div className={imageVariantClass}>
      <picture>
        <source media="(min-width: 800px)" srcSet={desktopSrcSet} />
        <img
          {...mobileProps}
          alt={alt}
          fetchPriority={priority ? 'high' : undefined}
        />
      </picture>
    </div>
  );
}

const VARIANT_MAP: Record<
  ImageSliderVariant,
  {
    sizes: string;
  }
> = {
  detail: {
    sizes: '(max-width: 800px) 100vw, 524px',
  },
  hero: {
    sizes: '(max-width: 800px) 100vw, (max-width: 1000px) 782px, 982px',
  },
};

const styleVariant = cva({
  variants: {
    variant: {
      detail: {
        backgroundColor: 'colors.surface.lightGray',
        aspectRatio: '1/1',
      },
      hero: {
        position: 'relative',
        width: 'full',
        overflow: 'hidden',
        aspectRatio: {
          base: '5/4',
          tablet: '5/3',
        },
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
          transition: 'box-shadow 0.2s ease',
        },
        _groupHover: {
          '&::after': {
            boxShadow: [, '6px 6px 24px 0 rgba(255, 255, 255, 0.6) inset'],
          },
        },
      },
    },
  },
});
