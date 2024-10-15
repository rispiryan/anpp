import { useLocale } from 'next-intl';
import Link from 'next/link';

import LanguageBar from '@/app/components/Header/LanguageBar';
import NavBar from '@/app/components/Header/NavBar';

import { routes } from '@/constants/routes';

import Logo from '@/assets/icons/logo.svg';

import styles from './header.module.scss';

export const Header = () => {
  const locale = useLocale();
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href={`${routes.home}${locale}`}>
          <Logo className={styles.logo} alt="Logo" />
        </Link>

        <NavBar />

        <LanguageBar />
      </div>
    </div>
  );
};
