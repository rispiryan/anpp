'use client';

import { useState } from 'react';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import { menu } from '@/app/components/Header/constant';

import Arrow from '@/assets/icons/arrow.svg';

import styles from './NavBar.module.scss';

interface INavBar {
  isHome: boolean;
}

const NavBar = ({ isHome }: INavBar) => {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = (to: undefined | string) => {
    if (to) {
      router.push(`/${locale}/${to}`);
      setActiveMenu(null);
    }
  };
  return (
    <nav className={cn(styles.navBar, { [styles.home]: isHome })}>
      {menu.map((el) => {
        return (
          <div
            onMouseEnter={() => setActiveMenu(el.title)}
            className={styles.wrap}
            key={el.title}
          >
            <ul>
              <li onClick={() => navigate(el.to)} className={styles.title}>
                {t(el.title)}
                {el?.menu && <Arrow className={cn(styles.arrow)} />}
              </li>
            </ul>
            {!!activeMenu && el?.menu && (
              <div className={cn(styles.secondTab)}>
                {el.menu.map((tab) => {
                  return (
                    <div
                      onMouseEnter={() => setActiveMenu(el.title)}
                      className={styles.lastSection}
                      key={tab.title}
                    >
                      <li
                        onClick={() => navigate(tab.to)}
                        className={styles.tab}
                      >
                        {t(tab.title)}
                        {tab?.menu && <Arrow className={cn(styles.subArrow)} />}
                      </li>
                      {tab?.menu && (
                        <div className={styles.lastTab}>
                          <div className={styles.content}>
                            {tab?.menu.map((last) => (
                              <li
                                onClick={() => navigate(last.to)}
                                className={styles.lastTitle}
                                key={last.title}
                              >
                                {t(last.title)}
                              </li>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;
