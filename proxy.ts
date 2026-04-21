import type { NextRequest } from 'next/server';
import { authMiddleware } from '@/src/app/middlewares/auth';
import { bypassInAppBrowserMiddleware } from '@/src/app/middlewares/bypass-in-app-browser';

export const proxy = async (request: NextRequest) => {
  const bypassInAppBrowserResponse = bypassInAppBrowserMiddleware(request);

  if (bypassInAppBrowserResponse) return bypassInAppBrowserResponse;

  return await authMiddleware(request);
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
