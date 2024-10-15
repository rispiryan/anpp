import { notFound } from 'next/navigation';

import SingleNews from '@/app/[locale]/news/[slug]/SingleNews';
import getSingleNews from '@/lib/getSingleNews';
import getNews from '@/lib/getNews';

export async function generateMetadata({
  params: { eachNews, slug },
}: {
  params: { eachNews: INews; slug: string };
}) {
  let data = eachNews;
  if (!eachNews) {
    data = await getSingleNews(slug);
  }

  if (!data) {
    return {
      title: `News with ${slug} id Not Found`,
    };
  }

  return {
    description: data.ar_title,
    title: data.ar_description,
  };
}

export default async function Post({
  params: { eachNews, slug },
}: {
  params: { eachNews: INews; slug: string };
}) {
  let data = eachNews;
  if (!eachNews) {
    data = await getSingleNews(slug);
  }
  if (!data) {
    notFound();
  }

  return <SingleNews news={data} />;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: INews[] = await getNews();

  return posts.map((post) => ({
    eachNews: post,
  }));
}
