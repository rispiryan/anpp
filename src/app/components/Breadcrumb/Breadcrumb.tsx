import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import cn from 'classnames';

import Arrow from '@/assets/icons/arrow.svg';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  crumbs?: { crumbLabel?: string; label?: string; href?: string }[];
  crumbLabel?: string;
  className?: string;
}

const Breadcrumb = ({ crumbLabel, className, crumbs }: BreadcrumbsProps) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <nav className={cn(styles.breadcrumbs, className)} aria-label="breadcrumbs">
      <ol>
        <li className={styles.home}>
          <Link href={`/${locale}`}>{t('home')}</Link>
        </li>

        {crumbs ? (
          crumbs.map((breadcrumb, index) => (
            <li className={styles.cramps} key={index}>
              <Arrow className={cn(styles.arrow)} />
              {!breadcrumb.href ? (
                <p className={styles.label}>{breadcrumb.crumbLabel}</p>
              ) : (
                <Link href={breadcrumb?.href || ''}>
                  {breadcrumb.crumbLabel}
                </Link>
              )}
            </li>
          ))
        ) : (
          <p className={styles.label}>
            <Arrow className={cn(styles.arrow)} />
            {t(crumbLabel)}
          </p>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
