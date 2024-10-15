import { useTranslations } from 'next-intl';

import NewsCard from '@/app/[locale]/news/components/NewsCard/NewsCard';

import styles from './page.module.scss';
interface IEducationProps {
  education: IEducation[];
}

const Education = ({ education }: IEducationProps) => {
  const t = useTranslations();
  return (
    <div className={styles.news}>
      <p className={styles.title}>{t('Station News')}</p>
      <div className={styles.grid}>
        {education.map((el) => (
          <NewsCard key={el.id} news={el} />
        ))}
      </div>
    </div>
  );
};

export default Education;
