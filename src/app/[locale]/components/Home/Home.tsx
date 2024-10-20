import { useTranslations } from 'next-intl';
import Link from 'next/link';
import cn from 'classnames';

import HomeNews from '@/app/[locale]/components/Home/HomeNews';

import { routes } from '@/constants/routes';

import styles from './Home.module.scss';
interface IHome {
  news: INews[];
}

const links = [
  { href: routes.safety, title: 'safety' },
  { href: routes.vacancies, title: 'vacancies' },
  { href: routes.production, title: 'production' },
  { href: routes.electricalWorkshop, title: 'electricalWorkshop' },
  { href: routes.structure, title: 'structure' },
  { href: routes.cooperation, title: 'cooperation' },
  { href: routes.report, title: 'report' },
  { href: routes.events, title: 'events' },
  { href: routes.history, title: 'history' },
  { href: routes.zachFactory, title: 'zachFactory' },
  { href: routes.reactorFactory, title: 'reactorFactory' },
  { href: routes.turbineFactory, title: 'turbineFactory' },
];

const Home = ({ news }: IHome) => {
  const t = useTranslations();
  return (
    <div className={styles.home}>
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
            {news.map((el) => (
              <HomeNews key={el.id} news={el} />
            ))}
          </div>
          <div className={styles.imagesWrap}>
            {links.map((el) => (
              <Link href={el.href} key={el.title}>
                <div
                  className={cn(styles.image, { [styles[el.title]]: el.title })}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
