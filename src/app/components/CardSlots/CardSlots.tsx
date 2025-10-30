"use client";
import { useState } from 'react';
import styles from './CardSlots.module.css';
import { Card } from '@/data/cards';

export default function CardSlots() {
  const [slots, setSlots] = useState<(Card | null)[]>(Array(9).fill(null));
  const [dragOver, setDragOver] = useState<number | null>(null);
  const [draggedFromIndex, setDraggedFromIndex] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<boolean[]>(Array(9).fill(false));

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOver(index);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleCardDragStart = (e: React.DragEvent, index: number) => {
    const card = slots[index];
    if (card) {
      e.dataTransfer.setData('application/json', JSON.stringify({ ...card, fromIndex: index }));
      setDraggedFromIndex(index);
    }
  };

  const handleCardClick = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOver(null);
    
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      const newSlots = [...slots];
      
      if (data.fromIndex !== undefined) {
        // 既存カードの移動
        const fromIndex = data.fromIndex;
        if (fromIndex !== index) {
          newSlots[fromIndex] = newSlots[index];
          newSlots[index] = { 
            id: data.id, 
            name: data.name, 
            damage: data.damage,
            image: data.image,
            backText: data.backText
          };
        }
      } else {
        // 新しいカードの配置
        newSlots[index] = data;
      }
      
      setSlots(newSlots);
      setDraggedFromIndex(null);
    } catch (error) {
      console.error('Invalid card data');
      setDraggedFromIndex(null);
    }
  };

  return (
    <div className={styles.container}>
      {slots.map((card, index) => (
        <div
          key={index}
          className={`${styles.slot} ${dragOver === index ? styles.dragOver : ''}`}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
        >
          {card ? (
            <div 
              className={`${styles.card} ${flippedCards[index] ? styles.flipped : ''}`}
              draggable
              onDragStart={(e) => handleCardDragStart(e, index)}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.cardFront}>
                {card.image && <img src={card.image} alt={card.name} className={styles.cardImage} />}
                <span className={styles.cardName}>{card.name}</span>
                <span className={styles.cardDamage}>{card.damage}</span>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.backPattern}></div>
                {card.backText && <span className={styles.backText}>{card.backText}</span>}
              </div>
            </div>
          ) : (
            <div className={styles.placeholder}>ドロップエリア</div>
          )}
        </div>
      ))}
    </div>
  );
}