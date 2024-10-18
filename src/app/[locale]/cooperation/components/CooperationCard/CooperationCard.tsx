import { useLocale } from 'next-intl';
import Link from 'next/link';

import { cooperationDataAdapter } from '@/lib/utils/cooperationDataAdapter';

import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';

import styles from './CooperationCard.module.scss';

interface ICooperationCard {
  cooperation: ICooperation;
}

const CooperationCard = ({ cooperation }: ICooperationCard) => {
  const locale = useLocale() as TLocale;
  const data = cooperationDataAdapter(cooperation, locale);
  return (
    <div className={styles.cooperationCard}>
      <>
        <img
          src={`${API_BASE_PATH}/${cooperation.image}`}
          className={styles.img}
          alt={'img'}
        />
        <p className={styles.title}>{data.title}</p>
      </>

      <Link className={styles.link} href={data.link}>
        {data.link}
      </Link>
    </div>
  );
};

export default CooperationCard;
