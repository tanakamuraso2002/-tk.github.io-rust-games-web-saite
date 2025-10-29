import Image from 'next/image';
import { Card as CardType } from '@/shared/types/card';
import styles from './FullScreenCard.module.css';

interface FullScreenCardProps {
  card: CardType;
  onCardClick?: (cardId: string) => void;
}

export const FullScreenCard = ({ card, onCardClick }: FullScreenCardProps) => {
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
            width={800}
            height={600}
            className={styles.dnaImage}
          />
        </div>
      )}
    </div>
  );
};