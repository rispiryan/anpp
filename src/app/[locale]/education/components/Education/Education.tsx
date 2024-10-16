import { useTranslations } from 'next-intl';

import EducationCard from '@/app/[locale]/education/components/EducationCard/EducationCard';

import styles from './Education.module.scss';
interface IEducationProps {
  education: IEducation[];
}

const Education = ({ education }: IEducationProps) => {
  const t = useTranslations();
  return (
    <div className={styles.education}>
      <p className={styles.title}>{t('education')}</p>
      <div className={styles.grid}>
        {education.map((el) => (
          <EducationCard education={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Education;
