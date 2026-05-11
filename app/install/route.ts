import { type NextRequest, NextResponse } from 'next/server';
import { resolveTargetPathForWeb } from '@/src/entities/analytics/lib/utils';

export const GET = async (request: NextRequest) => {
  const origin = request.nextUrl.origin;
  const target = request.nextUrl.searchParams.get('target') || '';
  const targetPath = resolveTargetPathForWeb(target);

  return NextResponse.redirect(`${origin}${targetPath}`);
};
