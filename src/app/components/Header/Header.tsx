import { useTranslations } from 'next-intl';

import styles from './header.module.scss';

export const Header = () => {
  const t = useTranslations('HomePage');
  return <div className={styles.container}>Header {t('about')}</div>;
};
