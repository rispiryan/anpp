import Contacts from '@/app/[locale]/contacts/components/Contacts';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import styles from './page.module.scss';

export default async function Post() {
  return (
    <div className={styles.container}>
      <Breadcrumb crumbLabel={'contacts'} />
      <Contacts />
    </div>
  );
}
