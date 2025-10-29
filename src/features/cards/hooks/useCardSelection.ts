"use client";
import { useState } from 'react';
import { Card } from '@/shared/types/card';

export const useCardSelection = (cards: Card[], initialId: string = 'gene') => {
  const [selectedTag, setSelectedTag] = useState(initialId);
  const [showAll, setShowAll] = useState(false);
  
  const sortedCards = showAll 
    ? [cards.find(card => card.id === selectedTag)!, ...cards.filter(card => card.id !== selectedTag)]
    : [...cards].sort((a, b) => {
        if (a.id === selectedTag) return -1;
        if (b.id === selectedTag) return 1;
        return 0;
      });

  return {
    selectedTag,
    setSelectedTag,
    showAll,
    setShowAll,
    sortedCards
  };
};