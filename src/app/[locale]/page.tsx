import Home from '@/app/[locale]/components/Home';

import getNews from '@/lib/news/getNews';

export default async function Post() {
  const news: INews[] = await getNews(5);
  return (
    <>
      <Home news={news} />
    </>
  );
}
