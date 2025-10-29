import { Card } from '@/shared/types/card';

export const CARDS: Card[] = [
  {
    id: 'gene',
    title: '遺伝子',
    description: '理想はY 3つ G 3つ',
    image: '/gene.png',
    tag: '遺伝子'
  },
  {
    id: 'card2',
    title: 'カード2',
    description: '',
    image: '/image.png',
    secondImageText: '爆弾の作り方と使い方を説明します。',
    tag: 'レイド早見表'
  },
  {
    id: 'card3',
    title: '解体',
    description: '解体素材 早見表を作成予定...',
    image: '/scraps.png',
    tag: '解体'
  },
  {
    id: 'card4',
    title: 'モニュメント解説',
    description: '周回方法・必要カード 等...',
    image: '/monuments.png',
    tag: 'モニュメント'
  }
];