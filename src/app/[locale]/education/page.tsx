import Education from '@/app/[locale]/education/components/Education';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import getEducation from '@/lib/education/getEducation';

import styles from './page.module.scss';
export default async function Post() {
  const data: IEducation[] = await getEducation();
  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'education'} />
      <Education education={data} />
    </div>
  );
}
