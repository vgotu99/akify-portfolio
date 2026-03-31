import type { BaseApiResponse, ImageSrc } from '@/src/shared/lib/types';

export type BannerListResponse = BaseApiResponse<BannerListData>;

export type BannerListData = Array<Banner>;

export interface Banner {
  id: string;
  imageUrl: ImageSrc;
  title: string;
  subtitle: string;
  order: number;
  actionType: ActionType;
  actionValue: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  href: string; // 📌 임시
}

type ActionType = 'REMOTE_PAGE' | 'IN_APP' | 'WEBVIEW' | 'EXTERNAL';
