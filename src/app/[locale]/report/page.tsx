import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import Reports from '@/app/[locale]/report/components/Reports';

import getReports from '@/lib/reports/getReports';

export default async function Post() {
  const reports: IReports[] = await getReports();

  return (
    <>
      <Breadcrumb crumbLabel={'reports'} />
      <Reports reports={reports} />
    </>
  );
}
