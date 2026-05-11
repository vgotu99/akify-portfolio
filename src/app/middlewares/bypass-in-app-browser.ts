import { type NextRequest, NextResponse, userAgent } from 'next/server';

const IN_APP_REGEX = /kakaotalk|instagram|fbav|fban|line|naver|daum|twitter/i;

const REDIRECT_URL_MAP: Record<string, (url: string) => string> = {
  ios: (url: string) => `x-safari-${url}`,
  android: (url: string) =>
    `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`,
};

export const bypassInAppBrowserMiddleware = (request: NextRequest) => {
  const { os, browser } = userAgent(request);
  const osName = os.name?.toLowerCase() || '';
  const browserName = browser.name?.toLowerCase() || '';
  const currentUrl = request.url;
  const isInAppBrowser = IN_APP_REGEX.test(browserName);

  if (!isInAppBrowser) return null;

  const getRedirectUrl = REDIRECT_URL_MAP[osName];

  if (!getRedirectUrl) return null;

  return NextResponse.redirect(getRedirectUrl(currentUrl));
};
