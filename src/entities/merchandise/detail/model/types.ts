import type {
  BaseMerchandise,
  MerchandiseEffectTypes,
  MerchandiseIsUnbrandedOrCustom,
} from '@/src/entities/merchandise/shared/model/types';
import type { BaseApiResponse } from '@/src/shared/lib/types';

export type MerchandiseDetailResponse = BaseApiResponse<MerchandiseDetailData>;

export interface MerchandiseDetailData extends BaseMerchandise {
  modelResponse: MerchandiseDetailDataModelResponse;
  postImages: Array<string>;
  description: string;
}

export interface MerchandiseDetailDataModelResponse {
  modelId: number;
  modelName: string;
  brandId: number;
  brandName: string;
  brandKorName: string;
  effectTypes: MerchandiseEffectTypes;
  isUnbrandedOrCustom: MerchandiseIsUnbrandedOrCustom;
}
