import { ReactNode, Suspense } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Mulish } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import { Loader } from '@/app/components/Loader/Loader';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';

import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

import styles from './layout.module.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ANPP',
};

export default async function Layout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={mulish.className}>
        <NextIntlClientProvider messages={messages}>
          <div className={styles.main}>
            <Suspense fallback={<Loader />}>
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </Suspense>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
