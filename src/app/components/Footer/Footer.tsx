import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import Contacts from '@/assets/icons/Contacts.svg';

import styles from './footer.module.scss';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <div className={styles.license}>
            <Contacts />
            <p>{t('contact.info', { year: new Date().getFullYear() })} </p>
          </div>
          <Link href={`/${locale}/${routes.contacts}`} className={styles.link}>
            {t('contacts')}
          </Link>
        </div>
        <div>
          <p className={styles.address}>{t('contact.address')}</p>
          <p>{t('contact.contact')}</p>
        </div>
      </div>
    </div>
  );
}
