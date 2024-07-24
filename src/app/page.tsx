import Link from 'next/link';

import styles from '@/app/page.module.scss';

export default async function Post() {
  return (
    <>
      <div className={styles.layoutContent}>
        <main className={styles.container}>
          ANPP Main Page
          <Link href={'/login'} scroll>
            To Login
          </Link>
        </main>
      </div>
    </>
  );
}
