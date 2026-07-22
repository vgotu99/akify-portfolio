import { getImageProps } from 'next/image';
import { preload } from 'react-dom';
import type { ImageSliderItemProps } from '@/src/shared/ui/image-slider/image-slider-item/index';
import { css } from '@/styled-system/css';

type ImageSliderItemHeroProps = Omit<
  ImageSliderItemProps,
  'src' | 'variant'
> & {
  src: { mobile: string; desktop: string };
};

export default function ImageSliderItemHero({
  src,
  alt,
  priority,
}: ImageSliderItemHeroProps) {
  const common = {
    alt,
    sizes: '(max-width: 800px) 100vw, (max-width: 1000px) 782px, 982px',
    priority,
  };

  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc, sizes: desktopSizes },
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
      imageSizes: desktopSizes,
      media: '(min-width: 800px)',
      fetchPriority: 'high',
    });
    preload(mobileProps.src, {
      as: 'image',
      imageSrcSet: mobileProps.srcSet,
      imageSizes: mobileProps.sizes,
      media: '(max-width: 799px)',
      fetchPriority: 'high',
    });
  }

  return (
    <div
      className={css({
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
      })}
    >
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
