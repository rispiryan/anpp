import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ar', 'en', 'ru'],
  // Used when no [locale] matches
  defaultLocale: 'ar',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { usePathname, useRouter, redirect, Link } =
  createSharedPathnamesNavigation(routing);
