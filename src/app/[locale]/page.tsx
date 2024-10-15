import Link from 'next/link';

import styles from '@/app/[locale]/page.module.scss';

export default async function Post() {
  return (
    <>
      <div>
        <main className={styles.container}>
          ANPP Main Page
          <Link href={'news'} scroll>
            To news
          </Link>
        </main>
      </div>
    </>
  );
}
