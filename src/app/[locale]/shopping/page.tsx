import Shopping from '@/app/[locale]/shopping/components/Shopping';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import News from '@/app/[locale]/news/components/News';

import getShopping from '@/lib/shopping/getShopping';
import getNews from '@/lib/news/getNews';

export default async function Post() {
  const shopping: IShopping[] = await getShopping();
  const news: INews[] = await getNews(6);

  return (
    <>
      <Breadcrumb crumbLabel={'shopping'} />
      <Shopping shopping={shopping} />
      <News news={news || []} />
    </>
  );
}
