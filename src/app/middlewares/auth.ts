import { type NextRequest, NextResponse } from 'next/server';
import { getAuthTokens, setAuthTokens } from '@/src/features/auth/lib/tokens';
import { getGuestToken, reissueToken } from '@/src/features/auth/model/apis';

export const authMiddleware = async (request: NextRequest) => {
  const { accessToken, refreshToken } = getAuthTokens(request.cookies);

  if (accessToken) return NextResponse.next();

  const tokenData = refreshToken
    ? await reissueToken(refreshToken)
    : await getGuestToken();

  if (!tokenData) return NextResponse.next();

  const requestHeaders = new Headers(request.headers);
  const existingCookieString = requestHeaders.get('cookie') || '';

  const cookiesArray = existingCookieString
    .split(';')
    .filter(
      (c) =>
        !c.trim().startsWith('accessToken=') &&
        !c.trim().startsWith('refreshToken='),
    );

  cookiesArray.push(`accessToken=${tokenData.accessToken}`);
  cookiesArray.push(`refreshToken=${tokenData.refreshToken}`);

  requestHeaders.set('cookie', cookiesArray.join('; '));

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  setAuthTokens(response.cookies, {
    accessToken: tokenData.accessToken,
    refreshToken: tokenData.refreshToken,
    refreshTokenExpirationTime: tokenData.refreshTokenExpirationTime,
  });

  return response;
};
