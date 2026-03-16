import type {
  BaseMerchandise,
  MerchandiseEffectTypes,
  MerchandiseIsUnbrandedOrCustom,
} from '@/src/entities/merchandise/shared/model/types';
import type { BaseApiResponse } from '@/src/shared/lib/types';

export type MerchandiseListResponse = BaseApiResponse<MerchandiseListData>;

export interface MerchandiseListData {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  pageSize: number;
  posts: MerchandiseListPosts;
}

export type MerchandiseListPosts = Array<MerchandisePost>;

export interface MerchandisePost extends BaseMerchandise {
  modelName: string;
  brandName: string;
  thumbnail: string;
  effectTypes: MerchandiseEffectTypes;
  isUnbrandedOrCustom: MerchandiseIsUnbrandedOrCustom;
}
