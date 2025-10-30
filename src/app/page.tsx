"use client";
import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import RightSidebar from './components/RightSidebar/RightSidebar';
import CardSlots from './components/CardSlots/CardSlots';
import styles from './page.module.css';
import mainStyles from './styles/main.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <main className={mainStyles.main}>
          <CardSlots />
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}