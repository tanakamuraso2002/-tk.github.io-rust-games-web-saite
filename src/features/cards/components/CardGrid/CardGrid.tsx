import { Card as CardComponent } from '@/shared/components/Card/Card';
import { FullScreenCard } from '@/shared/components/FullScreenCard/FullScreenCard';
import { Card as CardType } from '@/shared/types/card';
import styles from './CardGrid.module.css';

interface CardGridProps {
  cards: CardType[];
  showAll?: boolean;
}

interface CardGridProps {
  cards: CardType[];
  showAll?: boolean;
  onCardClick?: (cardId: string) => void;
}

export const CardGrid = ({ cards, showAll = false, onCardClick }: CardGridProps) => {
  if (showAll && cards.length > 0) {
    return (
      <div className={styles.fullScreenContainer}>
        <FullScreenCard card={cards[0]} onCardClick={onCardClick} />
      </div>
    );
  }

  return (
    <div className={styles.cardGrid}>
      {cards.map(card => (
        <CardComponent key={card.id} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
};