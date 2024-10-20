import Vacancies from '@/app/[locale]/vacancies/components/Vacancies';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import News from '@/app/[locale]/news/components/News';

import getVacancies from '@/lib/vacancies/getVacancies';
import getNews from '@/lib/news/getNews';

import styles from './page.module.scss';

export default async function Post() {
  const vacancies: IVacancy[] = await getVacancies();
  const news: INews[] = await getNews(6);

  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'vacancies'} />
      <Vacancies vacancies={vacancies} />
      <News news={news || []} />
    </div>
  );
}
