import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import { vacanciesDataAdapter } from '@/lib/utils/vacanciesDataAdapter';

import { TLocale } from '@/@types/locale';

import styles from './VacanciesCard.module.scss';

interface IVacanciesCard {
  vacancy: IVacancy;
}

const VacanciesCard = ({ vacancy }: IVacanciesCard) => {
  const locale = useLocale() as TLocale;
  const { description, title, link } = vacanciesDataAdapter(vacancy, locale);
  const t = useTranslations();
  return (
    <div className={styles.vacancyCard}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} href={link}>
        {t('Apply now')}
      </Link>
    </div>
  );
};

export default VacanciesCard;
