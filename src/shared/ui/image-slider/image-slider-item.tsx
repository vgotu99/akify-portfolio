import type { ImageSliderVariant } from '@/src/shared/ui/image-slider';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { css, cva, cx } from '@/styled-system/css';

interface ImageSliderItemProps {
  variant: ImageSliderVariant;
  src: string | { mobile: string; desktop: string };
  alt: string;
  priority: boolean;
}

interface ItemImageProps {
  imageSrc: string;
  imageAspectRatio: number;
  displayClass?: string;
  alt: string;
  sizes: string;
  priority: boolean;
  imageVariantClass: string;
}

export default function ImageSliderItem({
  variant,
  src,
  alt,
  priority,
}: ImageSliderItemProps) {
  const { sizes, aspectRatio } = VARIANT_MAP[variant];
  const imageVariantClass = styleVariant({ variant });

  const isStringSrc = typeof src === 'string';
  const isNumberRatio = typeof aspectRatio === 'number';

  if (isStringSrc) {
    const ratio = isNumberRatio ? aspectRatio : aspectRatio.mobile;
    return (
      <ItemImage
        imageSrc={src}
        imageAspectRatio={ratio}
        alt={alt}
        sizes={sizes}
        priority={priority}
        imageVariantClass={imageVariantClass}
      />
    );
  }

  const mobileRatio = isNumberRatio ? aspectRatio : aspectRatio.mobile;
  const desktopRatio = isNumberRatio ? aspectRatio : aspectRatio.desktop;

  return (
    <>
      <ItemImage
        imageSrc={src.mobile}
        imageAspectRatio={mobileRatio}
        displayClass={css({
          display: { base: 'block', tablet: 'none' },
          visibility: { base: 'visible', tablet: 'hidden' },
        })}
        alt={alt}
        sizes={sizes}
        priority={priority}
        imageVariantClass={imageVariantClass}
      />
      <ItemImage
        imageSrc={src.desktop}
        imageAspectRatio={desktopRatio}
        displayClass={css({
          display: { base: 'none', tablet: 'block' },
          visibility: { base: 'hidden', tablet: 'visible' },
        })}
        alt={alt}
        sizes={sizes}
        priority={priority}
        imageVariantClass={imageVariantClass}
      />
    </>
  );
}

const ItemImage = ({
  imageSrc,
  imageAspectRatio,
  displayClass,
  alt,
  sizes,
  priority,
  imageVariantClass,
}: ItemImageProps) => {
  return (
    <ResponsiveImage
      src={imageSrc}
      alt={alt}
      sizes={sizes}
      aspectRatio={imageAspectRatio}
      priority={priority}
      quality={75}
      className={cx(imageVariantClass, displayClass)}
    />
  );
};

const VARIANT_MAP: Record<
  ImageSliderVariant,
  {
    sizes: string;
    aspectRatio: number | { mobile: number; desktop: number };
  }
> = {
  detail: {
    sizes: '524px',
    aspectRatio: 1 / 1,
  },
  hero: {
    sizes: '1000px',
    aspectRatio: {
      mobile: 5 / 4,
      desktop: 5 / 3,
    },
  },
};

const styleVariant = cva({
  base: {
    position: 'relative',
  },
  variants: {
    variant: {
      detail: {},
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
  },
});
