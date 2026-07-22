import type { ImageSliderItemProps } from '@/src/shared/ui/image-slider/image-slider-item';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { css } from '@/styled-system/css';

type ImageSliderItemDetailProps = Omit<
  ImageSliderItemProps,
  'src' | 'variant'
> & {
  src: string;
};

export default function ImageSliderItemDetail({
  src,
  alt,
  priority,
}: ImageSliderItemDetailProps) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      sizes="(max-width: 800px) 100vw, 524px"
      aspectRatio={1 / 1}
      priority={priority}
      quality={40}
      className={css({
        backgroundColor: 'colors.surface.lightGray',
      })}
    />
  );
}
