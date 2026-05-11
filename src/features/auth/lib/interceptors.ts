import axios from 'axios';
import { getAnonToken } from '@/src/features/auth/lib/token';
import { httpClient } from '@/src/shared/lib/http-client';

const retriedConfigs = new WeakSet<object>();

const isUnauthorized = (error: unknown): boolean =>
  axios.isAxiosError(error) && error.response?.status === 401;

httpClient.interceptors.request.use(async (config) => {
  const token = await getAnonToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    if (isUnauthorized(error) && config && !retriedConfigs.has(config)) {
      retriedConfigs.add(config);

      const freshToken = await getAnonToken(true);

      if (freshToken) {
        config.headers.Authorization = `Bearer ${freshToken}`;

        return httpClient(config);
      }
    }

    return Promise.reject(error);
  },
);
