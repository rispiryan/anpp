import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { TLocale } from '@/@types/locale';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  console.log(locale, 322);
  if (!routing.locales.includes(locale as TLocale)) {
    notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
