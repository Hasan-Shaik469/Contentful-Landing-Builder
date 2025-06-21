'use client';
import Link from 'next/link';
import styles from './GlobalNav.module.css';

export default function GlobalNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Contentful Builder
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/landing/page-1" className={styles.navLink}>
              Page 1
            </Link>
          </li>
          <li>
            <Link href="/landing/page-2" className={styles.navLink}>
              Page 2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}