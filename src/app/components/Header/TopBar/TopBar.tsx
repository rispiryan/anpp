import { useCallback, useEffect, useState } from 'react';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import { Menu, menu } from '@/app/components/Header/constant';

import { routes } from '@/constants/routes';

import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';
import Arrow from '@/assets/icons/arrow.svg';
import Logo from '@/assets/icons/logo.svg';

import styles from './TopBar.module.scss';

interface ITopBar {
  isHome: boolean;
}

type MenuItem = {
  isFirstItem?: boolean;
  isLastLevel?: boolean;
  title: string;
  id?: string;
  menu?: Menu; // Nested menu
  to: string;
};
const TopBar = ({ isHome }: ITopBar) => {
  const locale = useLocale();
  const router = useRouter();
  const [navigationList, setNavigationList] = useState<Menu>([]);
  const [nextNavigationList, setNextNavigationList] = useState<Menu>([]);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const handleItemClick = useCallback(
    (item: MenuItem, itemList: Menu) => {
      if (item.menu) {
        if (item.isFirstItem) {
          setNavigationList(item.isLastLevel ? nextNavigationList : menu);
        } else {
          setNextNavigationList(itemList);
          setNavigationList([
            {
              isLastLevel:
                'isFirstItem' in itemList[0] ? itemList[0]?.isFirstItem : false,
              title: item.title,
              isFirstItem: true,
              menu: item.menu,
              id: item.id,
            },
            ...item.menu,
          ]);
        }
      } else {
        router.push(`/${locale}/${item.to}`);
        setIsOpen(false);
      }
    },
    [locale, nextNavigationList, router],
  );

  useEffect(() => {
    setNavigationList(menu);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => {
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div
      className={cn(styles.topBar, {
        [styles.home]: isHome,
      })}
    >
      <BurgerIcon
        className={cn(styles.burgerIcon)}
        onClick={() => setIsOpen(true)}
      />
      <div className={cn(styles.hided, { [styles.back]: isOpen })}>
        <div
          className={cn(styles.block, {
            [styles.isOpen]: isOpen,
            [styles.hide]: !isOpen,
          })}
        >
          <div className={styles.header}>
            <div
              onClick={() => {
                router.push(`/${locale}/${routes.home}`);
                setIsOpen(false);
              }}
              className={styles.logo}
            >
              <Logo height={50} width={50} />
            </div>
            <CloseIcon
              onClick={() => setIsOpen(false)}
              className={styles.closeIcon}
            />
          </div>

          <div className={styles.content}>
            {navigationList.map((el) => (
              <div
                className={cn(styles.item, {
                  [styles.itemSelected]: 'isFirstItem' in el && el?.isFirstItem,
                })}
                onClick={() => handleItemClick(el as MenuItem, navigationList)}
                key={el.title}
              >
                <div className={styles.itemWrap}>
                  <p>{t(el.title)}</p>
                  {'menu' in el && el?.menu && (
                    <Arrow
                      className={cn(styles.arrow, {
                        [styles.arrowBack]:
                          'isFirstItem' in el && el?.isFirstItem,
                      })}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
