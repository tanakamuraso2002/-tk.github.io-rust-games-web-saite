export interface Card {
  id: string;
  name: string;
  damage: string;
  image: string;
  backText: string;
}

export const DRAGGABLE_CARDS: Card[] = [
  {
    id: "ak47",
    name: "AK-47",
    damage: "30dmg",
    backText: "ここにカードのテキストを入力できます",
    image: "/raid_items.png"
  },
  {
    id: "c4",
    name: "C4爆弾",
    damage: "550dmg",
    backText: "ここにカードのテキストを入力できます",
    image: "/c4.png"
  },
  {
    id: "rocket",
    name: "ロケット",
    damage: "350dmg",
    backText: "ここにカードのテキストを入力できます",
    image: "/boom.png"
  },
  {
    id: "gene",
    name: "遺伝子",
    damage: "35dmg",
    backText: "ここにカードのテキストを入力できます",
    image: "/gene.png"
  },
  {
    id: "lr300",
    name: "LR-300",
    damage: "40dmg",
    backText: "ここにカードのテキストを入力できます",
    image: "/raid_items.png"
  }
];