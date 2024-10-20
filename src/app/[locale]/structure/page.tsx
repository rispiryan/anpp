import Structure from '@/app/[locale]/structure/components/Structure';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import getStructure from '@/lib/structure/getStructure';

import styles from './page.module.scss';

export default async function Post() {
  const structure: IStructure[] = await getStructure();

  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'structure'} />
      <Structure structure={structure} />
    </div>
  );
}
