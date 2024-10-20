import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import Reports from '@/app/[locale]/report/components/Reports';

import getReports from '@/lib/reports/getReports';

import styles from './page.module.scss';

export default async function Post() {
  const reports: IReports[] = await getReports();

  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'reports'} />
      <Reports reports={reports} />
    </div>
  );
}
