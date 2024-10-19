import { useTranslations } from 'next-intl';

import ReportsCard from '@/app/[locale]/report/components/ReportsCard';

import styles from './Reports.module.scss';

interface IReportsProps {
  reports: IReports[];
}

const Reports = ({ reports }: IReportsProps) => {
  const t = useTranslations();
  return (
    <div className={styles.reports}>
      <p className={styles.title}>{t('reports')}</p>
      <div className={styles.grid}>
        {reports.map((el) => (
          <ReportsCard report={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Reports;
