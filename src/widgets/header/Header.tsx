import Image from 'next/image';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/Rust_Logo.png"
            alt="Rust Logo"
            width={120}
            height={40}
            className={styles.logoImage}
          />
        </div>
        <nav className={styles.nav}>
          <a href="#home">ホーム</a>
          <a href="#about">概要</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
      </div>
    </header>
  );
};