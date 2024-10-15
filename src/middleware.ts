// import createMiddleware from 'next-intl/middleware';
//
// import { routing } from './i18n/routing';
//
// export default createMiddleware(routing);
//
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ar|en|ru)/:path*'],
// };

import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  locales: ['ar', 'en', 'ru'], // Add your supported locales
  defaultLocale: 'ar',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Adjust the paths where the middleware should run
};
