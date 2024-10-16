import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import News from '@/app/[locale]/news/components/News';

import getNews from '@/lib/news/getNews';

export default async function Post() {
  const data: INews[] = await getNews();

  return (
    <>
      <Breadcrumb crumbLabel={'Station News'} />
      <News news={data || []} />
    </>
  );
}
