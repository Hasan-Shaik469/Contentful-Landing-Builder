'use client';
import styles from './HeroBlock.module.css';
import Image from 'next/image';

interface HeroData {
  backgroundImage?: {
    fields: {
      file: {
        url: string;
      };
      description?: string;
    };
  };
  heading: string;
  subtitle: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function HeroBlock({ data }: { data: HeroData }) {
  return (
    <section className={styles.hero}>
      {data.backgroundImage?.fields?.file?.url && (
        <div className={styles.heroBackground}>
          <Image
            src={`https:${data.backgroundImage.fields.file.url}`}
            alt={data.backgroundImage.fields.description || 'Background image'}
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      )}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{data.heading}</h1>
        <p className={styles.heroSubtitle}>{data.subtitle}</p>
        {data.ctaText && data.ctaUrl && (
          <a href={data.ctaUrl} className={styles.ctaButton}>
            {data.ctaText}
          </a>
        )}
      </div>
    </section>
  );
}