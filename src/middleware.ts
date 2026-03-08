import { defineMiddleware } from 'astro:middleware';

const PUBLIC_PATHS = ['/login', '/favicon.ico', '/favicon.svg'];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some((p) => pathname === p || pathname === p + '/');
}

async function sign(value: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function verify(token: string, secret: string): Promise<boolean> {
  const expected = await sign('authenticated', secret);
  return token === expected;
}

function getCookie(cookieHeader: string | null, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export const onRequest = defineMiddleware(async ({ request, redirect }, next) => {
  const url = new URL(request.url);

  if (isPublicPath(url.pathname)) {
    return next();
  }

  const password = import.meta.env.SITE_PASSWORD;
  if (!password) {
    return next();
  }

  const token = getCookie(request.headers.get('cookie'), 'auth');
  if (token && (await verify(token, password))) {
    return next();
  }

  return redirect('/login', 302);
});
