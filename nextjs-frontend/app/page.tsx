import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Contentful Landing Pages</h1>
        <div className={styles.grid}>
          <Link href="/landing/page-1" className={styles.card}>
            <h2>Page 1 →</h2>
            <p>View your first landing page</p>
          </Link>
          <Link href="/landing/page-2" className={styles.card}>
            <h2>Page 2 →</h2>
            <p>View your second landing page</p>
          </Link>
        </div>
      </div>
    </main>
  );
}