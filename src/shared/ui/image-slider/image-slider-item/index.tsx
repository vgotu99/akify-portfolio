import ImageSliderItemDetail from '@/src/shared/ui/image-slider/image-slider-item/image-slider-item-detail';
import ImageSliderItemHero from '@/src/shared/ui/image-slider/image-slider-item/image-slider-item-hero';

export interface ImageSliderItemProps {
  src: string | { mobile: string; desktop: string };
  alt: string;
  priority: boolean;
}

export default function ImageSliderItem({
  src,
  alt,
  priority,
}: ImageSliderItemProps) {
  if (typeof src === 'string') {
    return <ImageSliderItemDetail src={src} alt={alt} priority={priority} />;
  }

  return <ImageSliderItemHero src={src} alt={alt} priority={priority} />;
}
