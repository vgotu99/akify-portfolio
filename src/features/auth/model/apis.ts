import axios from 'axios';
import type { AnonymousTokenResponse } from '@/src/features/auth/model/types';

export const getGuestToken = async () => {
  const { data } = await axios.post<AnonymousTokenResponse>(
    `${process.env.API_URL}/auth/anonymous`,
    { deviceUuid: crypto.randomUUID() },
  );

  return data.data;
};

export const reissueToken = async (refreshToken: string) => {
  const { data } = await axios.post<AnonymousTokenResponse>(
    `${process.env.API_URL}/auth/reissue`,
    { refreshToken },
  );

  return data.data;
};
