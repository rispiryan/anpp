import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import { shoppingDataAdapter } from '@/lib/utils/shoppingDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';
import { formatDate } from '@/app/utils';

import styles from './Shopping.module.scss';

interface IShoppingCard {
  shopping: IShopping;
}

const ShoppingCard = ({ shopping }: IShoppingCard) => {
  const t = useTranslations();
  const locale = useLocale() as TLocale;
  const data = shoppingDataAdapter(shopping, locale);
  return (
    <div className={styles.shoppingCard}>
      <>
        <img
          src={`${API_BASE_PATH}/${shopping.image}`}
          className={styles.img}
          alt={'img'}
        />
        <p className={styles.date}>{formatDate(data.createdAt, locale)}</p>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.description}>{data.description}</p>
      </>

      <Link className={styles.link} href={data.link}>
        {t('Participate')}
      </Link>
    </div>
  );
};

export default ShoppingCard;
