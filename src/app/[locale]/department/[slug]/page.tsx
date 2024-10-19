import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import SingleDepartment from '@/app/[locale]/department/components/SingleDepartment';

import getSingleDepartment from '@/lib/department/getSingleDepartment';
import getDepartment from '@/lib/department/getDepartment';

export async function generateMetadata({
  params: { eachDepartment, locale, slug },
}: {
  params: { eachDepartment: IDepartment; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  let data = eachDepartment;
  if (!eachDepartment) {
    data = await getSingleDepartment(slug);
  }

  if (!data) {
    return {
      title: `Each Department with ${slug} slug Not Found`,
    };
  }

  return {
    description: data.ar_description,
    title: data.ar_title,
  };
}

export default async function Post({
  params: { eachDepartment, locale, slug },
}: {
  params: { eachDepartment: IDepartment; locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);
  let data = eachDepartment;
  if (!eachDepartment) {
    data = await getSingleDepartment(slug);
  }
  if (!data) {
    notFound();
  }

  return <SingleDepartment department={data} />;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: IDepartment[] = await getDepartment();
  return posts.map((post) => ({
    eachDepartment: post,
  }));
}
