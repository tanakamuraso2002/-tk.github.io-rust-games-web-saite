import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>My Rust WEB</h1>
        <nav className={styles.nav}>
          <a href="#home">ホーム</a>
          <a href="#about">概要</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
      </div>
    </header>
  );
}