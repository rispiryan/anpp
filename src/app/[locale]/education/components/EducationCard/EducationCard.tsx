import { useLocale } from 'next-intl';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import { dataAdapter } from '@/app/[locale]/education/dataAdapter';
import { API_BASE_PATH } from '@/lib/consts';
import { formatDate } from '@/app/utils';

import styles from './EducationCard.module.scss';

interface IEducationCard {
  education: IEducation;
}

const EducationCard = ({ education }: IEducationCard) => {
  const locale = useLocale();
  const data = dataAdapter(education, locale);
  return (
    <div className={styles.educationCard}>
      <img
        src={`${API_BASE_PATH}/${education.image}`}
        className={styles.img}
        alt={'img'}
      />
      <p className={styles.date}>{formatDate(data.createdAt, locale)}</p>
      <Link href={`/${locale}/${routes.education}/${education.id}`}>
        <p className={styles.title}>{data.title}</p>
      </Link>
      <p className={styles.description}>{data.description}</p>
    </div>
  );
};

export default EducationCard;
