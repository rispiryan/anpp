'use client';

import { useState, useRef } from 'react';

import { useTranslations, useLocale } from 'next-intl';
import ReactCountryFlag from 'react-country-flag';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import useOutsideClick from '@/hooks/useOutsideClick';

import { language } from '@/constants/language';

import Arrow from '@/assets/icons/arrow.svg';

import styles from './LanguageBar.module.scss';

// TODO language flag does not match with design
// TODO options also should has flags
const LanguageBar = () => {
  const t = useTranslations();
  const locale = useLocale();
  const refContainer = useRef(null);

  const router = useRouter();
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const changeLanguage = (newLocale: string) => {
    const currentPath = window.location.pathname;
    router.push(`/${newLocale}${currentPath.slice(3)}`);
  };

  const flag = (ln: string) => {
    if (ln === 'ar') {
      return 'AM';
    }
    if (ln === 'en') {
      return 'US';
    }
    return ln.toUpperCase();
  };
  useOutsideClick(refContainer, () => setIsDropDownOpened(false));
  return (
    <div className={styles.languageBar} ref={refContainer}>
      <div
        onClick={() => setIsDropDownOpened(!isDropDownOpened)}
        className={styles.content}
      >
        <ReactCountryFlag countryCode={flag(locale)} />
        <p className={styles.language}>{t('language')}</p>
        <Arrow
          className={cn(styles.arrow, {
            [styles.arrowUp]: isDropDownOpened,
          })}
        />
      </div>

      {isDropDownOpened && (
        <ul className={styles.list}>
          {language
            .filter((item) => item.value !== locale)
            .map((l) => (
              <div
                onClick={() => changeLanguage(l.value)}
                className={cn(styles.item)}
                key={l.value}
              >
                {l.title}
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageBar;
