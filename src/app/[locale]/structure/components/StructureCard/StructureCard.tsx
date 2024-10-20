import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import { structureDataAdapter } from '@/lib/utils/structureDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';

import styles from './StructureCard.module.scss';

interface IStructureCard {
  structure: IStructure;
}
const StructureCard = ({ structure }: IStructureCard) => {
  const locale = useLocale() as TLocale;
  const t = useTranslations();
  const { fullName, image, rank, id } = structureDataAdapter(structure, locale);
  return (
    <div>
      <img
        src={`${API_BASE_PATH}/${image}`}
        className={styles.img}
        alt="description"
      />
      <p className={styles.fullName}>{fullName}</p>
      <p className={styles.rank}>{rank}</p>
      <Link
        href={`/${locale}/${routes.structure}/${id}`}
        className={styles.link}
      >
        {t('Read more')}
      </Link>
    </div>
  );
};

export default StructureCard;
