import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const target = request.nextUrl.searchParams.get('target') || '';

  return NextResponse.redirect(`https://go.akify.io${target}`);
};
