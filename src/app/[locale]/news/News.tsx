import { useTranslations } from 'next-intl';

import NewsCard from '@/app/[locale]/news/components/NewsCard/NewsCard';

import styles from './page.module.scss';
interface INewsProps {
  news: INews[];
}

// TODO Move this component to components directory
const News = ({ news }: INewsProps) => {
  const t = useTranslations();

  return (
    <div className={styles.news}>
      <p className={styles.title}>{t('Station News')}</p>
      <div className={styles.grid}>
        {news.map((el) => (
          <NewsCard key={el.id} news={el} />
        ))}
      </div>
    </div>
  );
};

export default News;
