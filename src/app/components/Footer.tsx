import Image from 'next/image';
import styles from './Footer.module.css';

const cardData = [
  { id: 1, title: '', content: 'ハロウィンイベント開催中', image: '/news/News_Rust_HALLOWEEN_2025.png' },
  { id: 2, title: '', content: '新しい機能を追加しました', image: '/news/News_Rust_Root_2025.png' },
  { id: 3, title: '', content: '遺伝子情報', image: '/news/News_Rust_Berry_20025.png' },
  { id: 4, title: 'カード 4', content: 'イベント情報を更新' },
  { id: 5, title: 'カード 5', content: '新機能リリース' }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardSlider}>
          {[...cardData, ...cardData].map((card, index) => (
            <div key={`${card.id}-${index}`} className={styles.card}>
              {card.image && (
                <Image 
                  src={card.image} 
                  alt={card.title}
                  fill
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardContent}>
                <h4>{card.title}</h4>
                <p>{card.content}</p>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </footer>
  );
}