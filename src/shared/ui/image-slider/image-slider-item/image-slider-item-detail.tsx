import ImageSliderItemDetailBg from '@/src/shared/ui/image-slider/image-slider-item/image-slider-item-detail-bg';
import ImageSliderItemDetailUi from '@/src/shared/ui/image-slider/image-slider-item/image-slider-item-detail-ui';

interface ImageSliderItemDetailProps {
  src: string;
  alt: string;
  priority: boolean;
}

export default function ImageSliderItemDetail({
  src,
  alt,
  priority,
}: ImageSliderItemDetailProps) {
  return (
    <ImageSliderItemDetailBg src={src}>
      <ImageSliderItemDetailUi src={src} alt={alt} priority={priority} />
    </ImageSliderItemDetailBg>
  );
}
