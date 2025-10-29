import Image from 'next/image';
import { Card as CardType } from '@/shared/types/card';
import styles from './Card.module.css';

interface CardProps {
  card: CardType;
  onCardClick?: (cardId: string) => void;
}

export const Card = ({ card, onCardClick }: CardProps) => {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(card.id);
    }
  };

  return (
    <div 
      className={`${card.image ? styles.geneCard : styles.emptyCard} ${onCardClick ? styles.clickable : ''}`}
      onClick={handleClick}
    >
      {card.image && (
        <div className={styles.imageContainer}>
          <Image 
            src={card.image}
            alt={card.title}
            width={350}
            height={350}
            className={styles.dnaImage}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDescription}>{card.description}</p>
      </div>
    </div>
  );
};