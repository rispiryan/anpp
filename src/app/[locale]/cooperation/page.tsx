import Cooperation from '@/app/[locale]/cooperation/components/Cooperation';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import getCooperation from '@/lib/cooperation/getCooperation';

import styles from './page.module.scss';

export default async function Post() {
  const cooperation: ICooperation[] = await getCooperation();

  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'cooperation'} />
      <Cooperation cooperation={cooperation} />
    </div>
  );
}
