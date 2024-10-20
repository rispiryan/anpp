import { useTranslations, useLocale } from 'next-intl';

import Breadcrumb from '@/app/components/Breadcrumb';

import { routes } from '@/constants/routes';

import { structureDataAdapter } from '@/lib/utils/structureDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';

import styles from './SingleStructure.module.scss';

interface ISingleStructure {
  structure: IStructure;
}

const SingleStructure = ({ structure }: ISingleStructure) => {
  const locale = useLocale() as TLocale;
  const t = useTranslations();
  const { fullName, content, image } = structureDataAdapter(structure, locale);
  return (
    <div className={styles.container}>
      <Breadcrumb
        crumbs={[
          {
            href: `/${locale}/${routes.structure}`,
            crumbLabel: t('structure'),
          },
          { crumbLabel: fullName },
        ]}
      />
      <div className={styles.content}>
        <img
          src={`${API_BASE_PATH}/${image}`}
          className={styles.image}
          alt={''}
        />
        <div className={styles.info}>
          <p className={styles.fullName}>{fullName}</p>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={styles.description}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleStructure;
