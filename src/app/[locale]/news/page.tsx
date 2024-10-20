import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import News from '@/app/[locale]/news/components/News';

import getNews from '@/lib/news/getNews';

import styles from './page.module.scss';

export default async function Post() {
  const data: INews[] = await getNews();

  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'Station News'} />
      <News news={data || []} />
    </div>
  );
}
