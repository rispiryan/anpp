import { Loader } from '@/app/components/Loader/Loader';

import styles from '@/app/loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.overlayLoading}>
      <Loader />
    </div>
  );
}
