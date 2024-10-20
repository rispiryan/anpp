import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import SingleStructure from '@/app/[locale]/structure/components/SingleStructure';

import getSingleStructure from '@/lib/structure/getSingleStructure';
import getStructure from '@/lib/structure/getStructure';

export async function generateMetadata({
  params: { eachStructure, locale, slug },
}: {
  params: { eachStructure: IStructure; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  let data = eachStructure;
  if (!eachStructure) {
    data = await getSingleStructure(slug);
  }

  if (!data) {
    return {
      title: `Structure with ${slug} id Not Found`,
    };
  }

  return {
    description: data.ar_fullName,
    title: data.ar_rank,
  };
}

export default async function Post({
  params: { eachStructure, locale, slug },
}: {
  params: { eachStructure: IStructure; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  let data = eachStructure;
  if (!eachStructure) {
    data = await getSingleStructure(slug);
  }
  if (!data) {
    notFound();
  }

  return <SingleStructure structure={data} />;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: IStructure[] = await getStructure();

  return posts.map((post) => ({
    eachStructure: post,
  }));
}
