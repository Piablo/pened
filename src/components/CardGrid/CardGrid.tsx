// components/CardGrid.tsx
import React from 'react';
import Image from 'next/image';
import styles from './CardGrid.module.css';

type CardProps = {
  title: string;
  grade: string;
  description: string;
  imageSrc: string;
  originalPrice: number;
  discountPercentage: number;
  background1: string;
  background2: string;
};

const Card: React.FC<CardProps> = ({ title, grade, description, imageSrc, originalPrice, discountPercentage, background1, background2 }) => {
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);

  function hexToRgb(hex) {
    // Remove the hash symbol if it's present
    hex = hex.replace(/^#/, '');

    // Parse each pair as a hexadecimal and convert to decimal
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }



  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} style={{ background: `linear-gradient(135deg, ${hexToRgb(background1)} 0%, ${hexToRgb(background2)} 100%)` }}>
        <div className={styles.discountBadge}>{`${discountPercentage}% Off`}</div>
        <Image src={imageSrc} alt={title} width={300} height={200} className={styles.image} />
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.grade}>{grade}</h3>
      <p style={{textAlign: 'center'}}>{description}</p>
      <div className={styles.priceContainer}>
        <span className={styles.originalPrice}>R{originalPrice.toFixed(2)}</span>
        <span className={styles.discountedPrice}>R{discountedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

type CardGridProps = {
  sectionHeadline: string;
  cards: CardProps[];
};

const CardGrid: React.FC<CardGridProps> = ({ sectionHeadline, cards }) => {
  return (
    <div>
      <h2 className={styles.sectionHeadline}>{sectionHeadline}</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
