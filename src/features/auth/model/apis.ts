import axios from 'axios';
import type { AnonymousTokenResponse } from '@/src/features/auth/model/types';

export const issueAnonToken = async (deviceUuid: string) => {
  const { data } = await axios.post<AnonymousTokenResponse>(
    `${process.env.API_URL}/auth/anonymous`,
    { deviceUuid },
  );

  return data.data.accessToken;
};
