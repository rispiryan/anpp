import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import Events from '@/app/[locale]/events/components/Events';
import News from '@/app/[locale]/news/components/News';

import getEvents from '@/lib/events/getEvents';
import getNews from '@/lib/news/getNews';

import styles from './page.module.scss';
export default async function Post() {
  const events: IEvents[] = await getEvents();
  const news: INews[] = await getNews(6);

  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'events'} />
      <Events events={events} />
      <News news={news || []} />
    </div>
  );
}
