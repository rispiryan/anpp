import Link from 'next/link';

import styles from '@/app//news/page.module.scss';
import { API_BASE_PATH } from '@/lib/consts';
import getNews from '@/lib/getNews';

export default async function Post() {
  const data = await getNews();

  return (
    <>
      <div className={styles.layoutContent}>
        <main className={styles.container}>
          News page
          {data.map((eachNews) => (
            <div key={eachNews.id}>
              <div>
                <Link href={`/news/${eachNews.id}`} scroll>
                  <img
                    style={{
                      backgroundSize: 'cover',
                      maxHeight: '300px',
                      maxWidth: '300px',
                    }}
                    src={`${API_BASE_PATH}/${eachNews.image}`}
                  />
                </Link>
                <h1>{eachNews.ar_title}</h1>
              </div>
            </div>
          ))}
          <Link href={'/'} scroll>
            To home
          </Link>
        </main>
      </div>
    </>
  );
}
