import { useTranslations } from 'next-intl';

import HomeNews from '@/app/[locale]/components/Home/HomeNews';

import HomeSections from './HomeSections';

import styles from './Home.module.scss';
interface IHome {
  news: INews[];
}

const Home = ({ news }: IHome) => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.cover}>
          <p className={styles.title}>{t('homePage.title')}</p>
          <p className={styles.description}>{t('homePage.description')}</p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.newsWrap}>
          <p className={styles.newsTitle}>{t('news')}</p>
          {news?.map((el) => <HomeNews key={el.id} news={el} />)}
        </div>
        <HomeSections />
      </div>
    </div>
  );
};

export default Home;
