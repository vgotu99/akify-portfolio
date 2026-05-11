import type {
  BaseMerchandise,
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
  mainCategory: string;
  mainCategoryId: number;
  modelImageUrl: string | null;
  subCategoryInfos: Array<SubCategoryInfo>;
  isUnbrandedOrCustom: MerchandiseIsUnbrandedOrCustom;
}

export interface SubCategoryInfo {
  subCategoryId: number;
  subCategoryKorName: string;
}
