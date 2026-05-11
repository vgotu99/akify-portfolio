import type { BaseApiResponse } from '@/src/shared/lib/types';

export type MerchandiseListForSitemapResponse =
  BaseApiResponse<MerchandiseListForSitemapData>;

export interface MerchandiseListForSitemapData {
  content: Array<MerchandiseListForSitemapDataContent>;
  last: boolean;
}

export interface MerchandiseListForSitemapDataContent {
  postId: number;
  modifiedAt: string;
}
