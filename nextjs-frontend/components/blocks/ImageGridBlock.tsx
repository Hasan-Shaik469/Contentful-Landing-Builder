'use client';
import styles from './ImageGridBlock.module.css';
import Image from 'next/image';

export default function ImageGridBlock({ data }: { data: any }) {
  if (!data?.images?.length) return null;

  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        {data.images.map((image: any, index: number) => (
          <div key={index} className={styles.gridItem}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={image.fields.description || `Image ${index + 1}`}
              fill
              className={styles.gridImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}