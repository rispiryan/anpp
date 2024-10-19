import { useMemo } from 'react';

import { useTranslations, useLocale } from 'next-intl';

import Files from '@/app/[locale]/department/components/Files';
import Breadcrumb from '@/app/components/Breadcrumb';
import Slider from '@/app/components/Slider';

import { departmentDataAdapter } from '@/lib/utils/departmentDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';

import styles from './Department.module.scss';

interface ISingleDepartment {
  department: IDepartment;
}

const SingleDepartment = ({ department }: ISingleDepartment) => {
  const locale = useLocale() as TLocale;
  const data = departmentDataAdapter(department, locale);
  const {
    contentImages1,
    contentImages2,
    attachedFiles,
    content1,
    content2,
    content3,
    title,
    slug,
  } = data;
  const t = useTranslations();
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
      <Breadcrumb crumbLabel={data.title} />
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
      {!!attachedFiles?.length && (
        <>
          <p className={styles.fileTitle}>{t(`files-${slug}`)}</p>
          <div className={styles.grid}>
            {attachedFiles.split(',').map((file) => (
              <Files file={file} key={file} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleDepartment;
