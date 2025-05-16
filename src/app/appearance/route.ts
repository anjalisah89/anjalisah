import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const theme = request.nextUrl.searchParams.get('theme');

  if (theme === 'light' || theme === 'dark') {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('theme', theme, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax', // CSRF protection
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  }

  return NextResponse.redirect(new URL('/', request.url));
}
