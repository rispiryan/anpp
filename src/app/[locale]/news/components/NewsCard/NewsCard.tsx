import { useLocale } from 'next-intl';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import { newsDataAdapter } from '@/lib/utils/newsDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';
import { formatDate } from '@/app/utils';

import styles from './NewsCard.module.scss';

interface INewsCard {
  news: INews;
}

const NewsCard = ({ news }: INewsCard) => {
  const locale = useLocale() as TLocale;
  const data = newsDataAdapter(news, locale);
  return (
    <Link
      href={`/${locale}/${routes.news}/${news.id}`}
      className={styles.newsCard}
    >
      <img
        src={`${API_BASE_PATH}/${news.image}`}
        className={styles.img}
        alt={'img'}
      />
      <p className={styles.date}>{formatDate(data.createdAt, locale)}</p>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.description}>{data.description}</p>
    </Link>
  );
};

export default NewsCard;
