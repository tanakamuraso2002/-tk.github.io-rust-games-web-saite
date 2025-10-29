import Image from 'next/image';
import styles from './Footer.module.css';

const newsItems = [
  { id: 1, title: 'Rust Berry Update', description: 'ベリーシステム', image: '/news/News_Rust_Berry_20025.png' },
  { id: 2, title: '', description: 'ハロウィンイベント', image: '/news/News_Rust_HALLOWEEN_2025.png' },
  { id: 3, title: 'Root System', description: 'ルートシステム実装', image: '/news/News_Rust_Root_2025.png' },
  { id: 4, title: '', description: 'Rustの最新情報', image: '/Rust_Logo.png' },
];

export const Footer = () => {
  const duplicatedItems = [...newsItems, ...newsItems];

  return (
    <footer className={styles.footer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardSlider}>
          {duplicatedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.card}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};