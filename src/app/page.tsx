"use client";
import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import { TagButtons } from '@/features/cards/components/TagButtons/TagButtons';
import { CardGrid } from '@/features/cards/components/CardGrid/CardGrid';
import { useCardSelection } from '@/features/cards/hooks/useCardSelection';
import { CARDS } from '@/features/cards/constants/cards';
import styles from './page.module.css';
import mainStyles from './styles/main.module.css';

export default function Home() {
  const { selectedTag, setSelectedTag, showAll, setShowAll, sortedCards } = useCardSelection(CARDS);

  const handleCardClick = (cardId: string) => {
    if (showAll && selectedTag === cardId) {
      setShowAll(false);
    } else {
      setSelectedTag(cardId);
      setShowAll(true);
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={mainStyles.main}>
        <TagButtons 
          cards={CARDS}
          selectedTag={selectedTag}
          showAll={showAll}
          onTagSelect={setSelectedTag}
          onShowAllToggle={setShowAll}
        />
        <CardGrid 
          cards={sortedCards} 
          showAll={showAll} 
          onCardClick={handleCardClick}
        />
      </main>
      <Footer />
    </div>
  );
}