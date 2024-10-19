import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

import styles from '@/app/[locale]/report/components/ReportsCard/ReportsCard.module.scss';

import Download from '@/assets/icons/Download.svg';
import { API_BASE_PATH } from '@/lib/consts';
import { TLocale } from '@/@types/locale';
import PDF from '@/assets/icons/PDF.svg';
import { formatDate } from '@/app/utils';

interface IFileProps {
  file: string;
}

const Files = ({ file }: IFileProps) => {
  const t = useTranslations();
  const locale = useLocale() as TLocale;
  const [fileName, byte, , date] = file.split('@');
  return (
    <div className={styles.reportsCard}>
      <PDF />
      <p className={styles.fileName}>{fileName}</p>
      <p className={styles.date}>{formatDate(date, locale)}</p>
      <Link
        href={`${API_BASE_PATH}/${file}`}
        className={styles.file}
        target="_blank"
      >
        <Download />
        <p className={styles.download}>{t('Download')}</p>
        <p
          className={styles.size}
        >{`(${Math.floor(Number(byte) / 1024) + '-KB'})`}</p>
      </Link>
    </div>
  );
};

export default Files;
