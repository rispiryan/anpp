import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import SingleNews from '@/app/[locale]/news/components/SingleNews/SingleNews';

import getSingleNews from '@/lib/news/getSingleNews';
import getNews from '@/lib/news/getNews';

export async function generateMetadata({
  params: { eachNews, locale, slug },
}: {
  params: { eachNews: INews; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

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
    description: data.ar_description,
    title: data.ar_title,
  };
}

export default async function Post({
  params: { eachNews, locale, slug },
}: {
  params: { eachNews: INews; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

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
