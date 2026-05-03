import { type NextRequest, NextResponse, userAgent } from 'next/server';

export const GET = async (request: NextRequest) => {
  const target = request.nextUrl.searchParams.get('target') || '';
  const { os } = userAgent(request);
  const osName = os.name?.toLowerCase();
  const isAndroid = osName === 'android';
  const isIOS = osName === 'ios' || osName === 'ipados';

  const APP_STORE_URL = process.env.APP_STORE_URL || '';
  const PLAY_STORE_URL = process.env.PLAY_STORE_URL || '';

  if (isAndroid) {
    const host = target || '/home';
    const intentUrl = `intent:/${host}#Intent;scheme=akify;package=com.jammering.akify;S.browser_fallback_url=${PLAY_STORE_URL};end;`;

    return NextResponse.redirect(intentUrl);
  }

  if (isIOS) {
    return NextResponse.redirect(APP_STORE_URL);
  }

  return NextResponse.redirect(new URL(target || '/', request.url));
};
