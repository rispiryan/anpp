import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import SingleEducation from '@/app/[locale]/education/components/SingleEducation';

import getSingleEducation from '@/lib/education/getSingleEducation';
import getEducation from '@/lib/education/getEducation';

export async function generateMetadata({
  params: { eachEducation, locale, slug },
}: {
  params: { eachEducation: IEducation; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  let data = eachEducation;
  if (!eachEducation) {
    data = await getSingleEducation(slug);
  }

  if (!data) {
    return {
      title: `EachEducation with ${slug} id Not Found`,
    };
  }

  return {
    description: data.ar_title,
    title: data.ar_description,
  };
}

export default async function Post({
  params: { eachEducation, locale, slug },
}: {
  params: { eachEducation: IEducation; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  let data = eachEducation;
  if (!eachEducation) {
    data = await getSingleEducation(slug);
  }
  if (!data) {
    notFound();
  }

  return <SingleEducation education={data} />;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: IEducation[] = await getEducation();

  return posts.map((post) => ({
    eachEducation: post,
  }));
}
