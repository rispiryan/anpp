'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import cn from 'classnames';

import LanguageBar from '@/app/components/Header/LanguageBar';
import NavBar from '@/app/components/Header/NavBar';

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
            <Logo className={styles.logo} alt="Logo" />
          </Link>

          <NavBar isHome={isHome} />
          <LanguageBar isHome={isHome} />
        </div>
      </div>
    )
  );
};
