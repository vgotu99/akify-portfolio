import { cookies } from 'next/headers';
import { getAuthTokens } from '@/src/features/auth/lib/tokens';
import { httpClient } from '@/src/shared/lib/http-client';

httpClient.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();
    const { accessToken } = getAuthTokens(cookieStore);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
