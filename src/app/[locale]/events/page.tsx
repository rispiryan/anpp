import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import Events from '@/app/[locale]/events/components/Events';
import News from '@/app/[locale]/news/components/News';

import getEvents from '@/lib/events/getEvents';
import getNews from '@/lib/news/getNews';

export default async function Post() {
  const events: IEvents[] = await getEvents();
  const news: INews[] = await getNews(6);

  return (
    <>
      <Breadcrumb crumbLabel={'events'} />
      <Events events={events} />
      <News news={news || []} />
    </>
  );
}
