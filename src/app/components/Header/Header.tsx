'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import cn from 'classnames';

import LanguageBar from '@/app/components/Header/LanguageBar';
import NavBar from '@/app/components/Header/NavBar';
import TopBar from '@/app/components/Header/TopBar';

import { routes } from '@/constants/routes';

import Logo from '@/assets/icons/logo.svg';

import styles from './header.module.scss';

export const Header = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [isHome, setIsHome] = useState<boolean | null>(null);
  useEffect(() => {
    setIsHome(pathname === `${routes.home}${locale}/`);
  }, [pathname]);

  return (
    isHome !== null && (
      <div className={cn(styles.header, { [styles.home]: isHome })}>
        <div className={styles.container}>
          <Link href={`${routes.home}${locale}`}>
            <div className={styles.logo}>
              <Logo alt="Logo" />
            </div>
          </Link>

          <NavBar isHome={isHome} />
          <div className={styles.wrap}>
            <LanguageBar isHome={isHome} />
            <TopBar isHome={isHome} />
          </div>
        </div>
      </div>
    )
  );
};
