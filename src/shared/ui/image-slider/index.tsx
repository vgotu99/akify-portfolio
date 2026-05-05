import type { FormattedImages } from '@/src/shared/lib/types';
import ImageSliderController from '@/src/shared/ui/image-slider/image-slider-controller';
import ImageSliderList from '@/src/shared/ui/image-slider/image-slider-list';

export type ImageSliderVariant = 'hero' | 'detail';

export interface ImageSliderProps {
  variant: ImageSliderVariant;
  images: FormattedImages;
  LinkComponent?: React.ElementType<{
    href: string;
    children: React.ReactNode;
  }>;
  as?: React.ElementType;
}

export default function ImageSlider({
  variant,
  as = 'div',
  images,
  LinkComponent,
}: ImageSliderProps) {
  return (
    <ImageSliderController variant={variant} length={images.length} as={as}>
      <ImageSliderList
        variant={variant}
        images={images}
        LinkComponent={LinkComponent}
      />
    </ImageSliderController>
  );
}
