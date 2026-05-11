import { type NextRequest, NextResponse } from 'next/server';
import { bypassInAppBrowserMiddleware } from '@/src/app/middlewares/bypass-in-app-browser';

export const proxy = async (request: NextRequest) => {
  const bypassInAppBrowserResponse = bypassInAppBrowserMiddleware(request);

  if (bypassInAppBrowserResponse) return bypassInAppBrowserResponse;

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
