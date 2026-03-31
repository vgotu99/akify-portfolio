import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import type { AuthTokens } from '@/src/features/auth/model/types';

interface CookieStore {
  get: (name: string) => { value: string } | undefined;
  set: (options: ResponseCookie) => void;
}

export const getAuthTokens = (cookieStore: CookieStore) => {
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  return { accessToken, refreshToken };
};

export const setAuthTokens = (
  cookieStore: CookieStore,
  authTokens: AuthTokens,
) => {
  const { accessToken, refreshToken, refreshTokenExpirationTime } = authTokens;

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
  };

  cookieStore.set({
    name: 'accessToken',
    value: accessToken,
    maxAge: 8 * 60 * 60 - 10,
    ...cookieOptions,
  });

  cookieStore.set({
    name: 'refreshToken',
    value: refreshToken,
    maxAge: refreshTokenExpirationTime / 1000 - 10,
    ...cookieOptions,
  });
};
