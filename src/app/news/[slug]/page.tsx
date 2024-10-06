import { notFound } from 'next/navigation';
import Link from 'next/link';

import getSingleNews from '@/lib/getSingleNews';
import { API_BASE_PATH } from '@/lib/consts';
import getNews from '@/lib/getNews';

import styles from './page.module.scss';

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

  return (
    <>
      <div className={styles.layoutContent}>
        <main className={styles.container}>
          <Link href="/news">back to news</Link>

          <h2>{data.ar_title}</h2>
          <h3>{data.ar_description}</h3>
          <img
            style={{
              backgroundSize: 'cover',
              maxHeight: '300px',
              maxWidth: '300px',
            }}
            src={`${API_BASE_PATH}/${data.image}`}
          />
        </main>
      </div>
    </>
  );
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: INews[] = await getNews();

  return posts.map((post) => ({
    eachNews: post,
  }));
}
