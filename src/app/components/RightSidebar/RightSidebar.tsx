import styles from "./RightSidebar.module.css";
import { DRAGGABLE_CARDS, Card } from "@/data/cards";

export default function RightSidebar() {
  const handleDragStart = (e: React.DragEvent, card: Card) => {
    e.dataTransfer.setData("application/json", JSON.stringify(card));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.title}>攻略情報</h3>
        <div className={styles.tips}>
          <div className={styles.tip}>
            <span className={styles.label}>レイド</span>
            <p>レイド情報更新予定</p>
          </div>
          <div className={styles.tip}>
            <span className={styles.label}>建築</span>
            <p>建築情報更新予定</p>
          </div>
          <div className={styles.tip}>
            <span className={styles.label}>PvP</span>
            <p>PVP情報更新予定</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>ドラッグ可能カード</h3>
        <div className={styles.cards}>
          {DRAGGABLE_CARDS.map((card) => (
            <div
              key={card.id}
              className={styles.draggableCard}
              draggable
              onDragStart={(e) => handleDragStart(e, card)}
            >
              <img
                src={card.image}
                alt={card.name}
                className={styles.cardImage}
              />
              <span className={styles.cardName}>{card.name}</span>
              <span className={styles.cardDamage}>{card.damage}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
