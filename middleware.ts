import { NextRequest, NextResponse } from "next/server";

/**
 * Per-request Content-Security-Policy with a fresh nonce.
 *
 * Next.js automatically attaches this nonce to its own inline bootstrap/runtime
 * scripts when it sees a `nonce-...` in the CSP, so we can ship a strict
 * script-src without `'unsafe-inline'`. 'strict-dynamic' lets those trusted
 * scripts load the chunks they need. Styles keep 'unsafe-inline' because
 * Framer Motion / Next inject inline styles and style injection is low-risk.
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  // Production: strict, nonce-based script policy (no eval, no inline).
  // Development: Next's HMR / react-refresh needs eval + inline + a websocket,
  // so relax those for dev only — production stays locked down.
  const scriptSrc = isDev
    ? `script-src 'self' 'unsafe-eval' 'unsafe-inline'`
    : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`;
  const connectSrc = isDev
    ? `connect-src 'self' ws: http:`
    : `connect-src 'self'`;

  const csp = [
    `default-src 'self'`,
    scriptSrc,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self'`,
    connectSrc,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `frame-src 'none'`,
    `manifest-src 'self'`,
    // Upgrade to HTTPS in production only (would break http://localhost in dev).
    ...(isDev ? [] : [`upgrade-insecure-requests`]),
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  // Run on all paths except static assets and image optimizer, which don't need a nonce.
  matcher: [
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
