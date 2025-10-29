import { Card } from '@/shared/types/card';
import styles from './TagButtons.module.css';

interface TagButtonsProps {
  cards: Card[];
  selectedTag: string;
  showAll: boolean;
  onTagSelect: (tagId: string) => void;
  onShowAllToggle: (showAll: boolean) => void;
}

export const TagButtons = ({ cards, selectedTag, showAll, onTagSelect, onShowAllToggle }: TagButtonsProps) => {
  return (
    <div className={styles.tagButtons}>
      <button
        className={`${styles.tagBtn} ${styles.resizeBtn} ${showAll ? styles.active : ''}`}
        onClick={() => onShowAllToggle(!showAll)}
      >
        <img src="/resize.svg" alt="全体表示" className={styles.resizeIcon} />
      </button>
      {cards.map(card => (
        <button
          key={card.id}
          className={`${styles.tagBtn} ${selectedTag === card.id && !showAll ? styles.active : ''}`}
          onClick={() => {
            onTagSelect(card.id);
            onShowAllToggle(false);
          }}
        >
          {card.tag}
        </button>
      ))}
    </div>
  );
};