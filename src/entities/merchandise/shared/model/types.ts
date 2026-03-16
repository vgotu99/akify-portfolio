export interface BaseMerchandise {
  id: number;
  writer: Writer;
  title: string;
  price: string;
  saleStatus: MerchandiseSaleStatus;
  condition: MerchandiseCondition;
  exchangeAvailable: boolean;
  deliveryAvailable: boolean;
  localDealAvailable: boolean;
  regions: Array<string> | null;
  partChange: boolean;
  createdAt: string;
  bumpedAt: string;
  likeCount: number;
  viewCount: number;
  hidden: boolean;
  isLiked: boolean;
  deliveryInfoResponse: DeliveryInfoResponse;
}

export interface DeliveryInfoResponse {
  deliveryFeeIncluded: boolean;
  deliveryFee: number;
}

export interface Writer {
  userId: number;
  nickname: string;
  profileImage: string;
  verified: boolean;
  joinDate: string;
  withdrawn: boolean;
}

export type MerchandiseCondition =
  | 'NEW'
  | 'VERY_GOOD'
  | 'GOOD'
  | 'NORMAL'
  | 'DEFECTIVE';

export type MerchandiseSaleStatus = 'ON_SALE' | 'SOLD_OUT' | 'RESERVED';

export type MerchandiseEffectTypes = Array<string>;
export type MerchandiseIsUnbrandedOrCustom = boolean;
