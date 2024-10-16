import { useMemo } from 'react';

import { useTranslations, useLocale } from 'next-intl';

import Breadcrumb from '@/app/components/Breadcrumb';
import Slider from '@/app/components/Slider';

import { routes } from '@/constants/routes';

import { educationDataAdapter } from '@/lib/utils/educationDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';

import styles from './SingleEducation.module.scss';

interface ISingleEducation {
  education: IEducation;
}

const SingleEducation = ({ education }: ISingleEducation) => {
  const locale = useLocale() as TLocale;
  const t = useTranslations();
  const data = educationDataAdapter(education, locale);
  const {
    contentImages1,
    contentImages2,
    content1,
    content2,
    content3,
    title,
  } = data;
  const slider1 = useMemo(() => {
    if (!contentImages1?.length) {
      return [];
    }
    const images = contentImages1.split(',');
    return images.map((image) => ({
      original: `${API_BASE_PATH}/${image}`,
    }));
  }, [contentImages1]);
  const slider2 = useMemo(() => {
    if (!contentImages2?.length) {
      return [];
    }
    const images = contentImages2.split(',');
    return images.map((image) => ({
      original: `${API_BASE_PATH}/${image}`,
    }));
  }, [contentImages2]);

  return (
    <div className={styles.container}>
      <Breadcrumb
        crumbs={[
          {
            href: `/${locale}/${routes.education}`,
            crumbLabel: t('education'),
          },
          { crumbLabel: data.title },
        ]}
      />
      <div className={styles.layoutContent}>
        <h1 className={styles.title}>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content1 }}
          className={styles.content}
        />
        <Slider className={styles.slider} images={slider1} />
        <div
          dangerouslySetInnerHTML={{ __html: content2 }}
          className={styles.content}
        />
        <Slider className={styles.slider} images={slider2} />
        <div
          dangerouslySetInnerHTML={{ __html: content3 }}
          className={styles.content}
        />
      </div>
    </div>
  );
};

export default SingleEducation;
