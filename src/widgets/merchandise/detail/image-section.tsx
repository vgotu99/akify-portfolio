import type { MerchandiseDetailDataModelResponse } from '@/src/entities/merchandise/detail/model/types';
import type { MerchandiseSaleStatus } from '@/src/entities/merchandise/shared/model/types';
import MerchandiseSaleStatusContainer from '@/src/entities/merchandise/shared/ui/merchandise-sale-status-container';
import { formatBaseAlt, formatImages } from '@/src/shared/lib/formats';
import ImageSlider from '@/src/shared/ui/image-slider';

export interface ImageSectionProps {
  images: Array<string>;
  saleStatus: MerchandiseSaleStatus;
  modelResponse: MerchandiseDetailDataModelResponse;
}

export default function ImageSection({
  images,
  saleStatus,
  modelResponse,
}: ImageSectionProps) {
  const { brandName, modelName } = modelResponse;
  const baseAlt = formatBaseAlt(brandName, modelName);
  const formattedImages = formatImages(images, baseAlt);

  return (
    <MerchandiseSaleStatusContainer variant="detail" saleStatus={saleStatus}>
      <ImageSlider variant="detail" images={formattedImages} as="section" />
    </MerchandiseSaleStatusContainer>
  );
}
