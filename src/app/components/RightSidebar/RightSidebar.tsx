import Image from "next/image";
import styles from "./RightSidebar.module.css";

export default function RightSidebar() {
  return (
    <aside className={styles.rightbar}>
      <div className={styles.geneCard}>
        <div className={styles.imageContainer}>
          <Image 
            src="/groue.png" 
            alt="groue" 
            width={400}
            height={400}
            className={styles.dnaImage}
          />
        </div>
        <div className={styles.cardContent}>
        </div>
      </div>
    </aside>
  );
}