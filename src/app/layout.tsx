import { ReactNode, Suspense } from 'react';

import { Mulish } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import { Loader } from '@/app/components/Loader/Loader';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import styles from './layout.module.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ANPP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div className={styles.main}>
          <Suspense fallback={<Loader />}>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
