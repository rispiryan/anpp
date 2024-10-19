import { useTranslations } from 'next-intl';

import styles from './Contacts.module.scss';

const Contacts = () => {
  const t = useTranslations();
  return (
    <div className={styles.contacts}>
      <h3 className={styles.title}>{t('contacts')}</h3>
      <p>{`${t('address')} - ${t('contact.address')}`}</p>
      <p>{t('contact.phone')}</p>
      <p>{t('contact.operator')}</p>
      <p>
        <span>{t('email')}</span> -{' '}
        <span className={styles.email}>{t('contact.email')}</span>
      </p>
    </div>
  );
};

export default Contacts;
