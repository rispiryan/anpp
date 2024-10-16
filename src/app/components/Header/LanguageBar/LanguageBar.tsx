'use client';

import { useState, useRef } from 'react';

import { useTranslations, useLocale } from 'next-intl';
import { CircleFlag } from 'react-circle-flags';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import useOutsideClick from '@/hooks/useOutsideClick';

import { language } from '@/constants/language';

import Arrow from '@/assets/icons/arrow.svg';

import styles from './LanguageBar.module.scss';

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
      return 'am';
    }
    if (ln === 'en') {
      return 'us';
    }
    return ln;
  };
  useOutsideClick(refContainer, () => setIsDropDownOpened(false));
  return (
    <div className={styles.languageBar} ref={refContainer}>
      <div
        onClick={() => setIsDropDownOpened(!isDropDownOpened)}
        className={styles.content}
      >
        <div className={styles.flagWrap}>
          <CircleFlag countryCode={flag(locale)} className={styles.flag} />
        </div>
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
                <div className={styles.flagWrap}>
                  <CircleFlag
                    countryCode={flag(l.value)}
                    className={styles.flag}
                  />
                </div>
                {l.title}
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageBar;
