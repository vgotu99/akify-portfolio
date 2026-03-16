import type { MerchandiseDetailDataModelResponse } from '@/src/entities/merchandise/detail/model/types';
import { formatBaseAlt, formatImages } from '@/src/shared/lib/formats';
import ImageSlider from '@/src/shared/ui/image-slider';
import { css } from '@/styled-system/css';

export interface ImageSectionProps {
  images: Array<string>;
  modelResponse: MerchandiseDetailDataModelResponse;
}

export default function ImageSection({
  images,
  modelResponse,
}: ImageSectionProps) {
  const { brandName, modelName } = modelResponse;
  const baseAlt = formatBaseAlt(brandName, modelName);
  const formattedImages = formatImages(images, baseAlt);

  return <ImageSlider variant="detail" images={formattedImages} as="section" />;
}
