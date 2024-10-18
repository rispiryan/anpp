import Vacancies from '@/app/[locale]/vacancies/components/Vacancies';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import News from '@/app/[locale]/news/components/News';

import getVacancies from '@/lib/vacancies/getVacancies';
import getNews from '@/lib/news/getNews';

export default async function Post() {
  const vacancies: IVacancies[] = await getVacancies();
  const news: INews[] = await getNews(6);
  console.log(vacancies, 23);
  return (
    <>
      <Breadcrumb crumbLabel={'vacancies'} />
      <Vacancies vacancies={vacancies} />
      <News news={news || []} />
    </>
  );
}
