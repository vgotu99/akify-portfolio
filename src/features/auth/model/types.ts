import type { BaseApiResponse } from '@/src/shared/lib/types';

export type AnonymousTokenResponse = BaseApiResponse<AnonymousTokenData>;

export interface AnonymousTokenData extends AuthTokens {
  grantType: string;
  role: string;
  provider: string;
  chatToken: string | null;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpirationTime: number;
}
