'use client';
import styles from './TwoColumnBlock.module.css';
import Image from 'next/image';

export default function TwoColumnBlock({ data }: { data: any }) {
  return (
    <section className={styles.twoColumn}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>{data.leftHeading}</h2>
          <p className={styles.content}>{data.leftContent}</p>
          {data.leftCtaText && (
            <a href={data.leftCtaUrl} className={styles.ctaButton}>
              {data.leftCtaText}
            </a>
          )}
        </div>
        <div className={styles.rightColumn}>
          {data.rightImage && (
            <Image
              src={`https:${data.rightImage.fields.file.url}`}
              alt={data.rightImage.fields.description || ''}
              width={600}
              height={400}
              className={styles.image}
            />
          )}
        </div>
      </div>
    </section>
  );
}