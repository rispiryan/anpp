import { useLocale } from 'next-intl';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import { dataAdapter } from '@/app/[locale]/news/dataAdapter';
import { API_BASE_PATH } from '@/lib/consts';
import { formatDate } from '@/app/utils';

import styles from './NewsCard.module.scss';

interface INewsCard {
  news: INews;
}

const NewsCard = ({ news }: INewsCard) => {
  const locale = useLocale();

  const data = dataAdapter(news, locale);
  return (
    <div className={styles.newsCard}>
      <img
        src={`${API_BASE_PATH}/${news.image}`}
        className={styles.img}
        alt={'img'}
      />
      <p className={styles.date}>{formatDate(data.createdAt, locale)}</p>
      <Link href={`/${locale}/${routes.news}/${news.id}`}>
        <p className={styles.title}>{data.title}</p>
      </Link>
      <p className={styles.description}>{data.description}</p>
    </div>
  );
};

export default NewsCard;
