import { useLocale } from 'next-intl';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import { newsDataAdapter } from '@/lib/utils/newsDataAdapter';

import { TLocale } from '@/@types/locale';
import { formatDate } from '@/app/utils';

import styles from './HomeNews.module.scss';

interface IHomeNews {
  news: INews;
}
const HomeNews = ({ news }: IHomeNews) => {
  const locale = useLocale() as TLocale;
  const { description, createdAt, title, id } = newsDataAdapter(news, locale);
  return (
    <div>
      <p className={styles.date}>{formatDate(createdAt, locale)}</p>
      <Link href={`/${locale}/${routes.news}/${id}`} className={styles.title}>
        {title}
      </Link>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HomeNews;
