import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import Download from '@/assets/icons/Download.svg';
import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';
import PDF from '@/assets/icons/PDF.svg';
import { formatDate } from '@/app/utils';

import styles from './ReportsCard.module.scss';

interface IReportsCard {
  report: IReports;
}

const ReportsCard = ({ report }: IReportsCard) => {
  const locale = useLocale() as TLocale;
  const t = useTranslations();
  return (
    <div className={styles.reportsCard}>
      <PDF />
      <p className={styles.fileName}>{report.fileName}</p>
      <p className={styles.date}>{formatDate(report.createdAt, locale)}</p>
      <Link
        href={`${API_BASE_PATH}/${report.file}`}
        className={styles.file}
        target="_blank"
      >
        <Download />
        <p className={styles.download}>{t('Download')}</p>
        <p
          className={styles.size}
        >{`(${Math.floor(Number(report.file.split('@')[1]) / 1024) + '-KB'})`}</p>
      </Link>
    </div>
  );
};

export default ReportsCard;
