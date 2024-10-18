import { useTranslations } from 'next-intl';

import VacanciesCard from '@/app/[locale]/vacancies/components/VacanciesCard';

import styles from './Vacancies.module.scss';

interface IVacanciesProps {
  vacancies: IVacancy[];
}

const Vacancies = ({ vacancies }: IVacanciesProps) => {
  const t = useTranslations();

  return (
    <div className={styles.vacancies}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.title}>{t('vacancies')}</p>
          <p className={styles.description}>{t('vacanciesDescription')}</p>
        </div>
        <div>
          {vacancies.map((vacancy) => (
            <VacanciesCard vacancy={vacancy} key={vacancy.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
