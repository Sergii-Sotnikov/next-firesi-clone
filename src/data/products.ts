export const price = {
  "FRSE-FS": 50,
  "FRSE-F2": 150,
  "FRSE-F6": 300,
  "FIPRON™ Стікер P": 600,
  "FIPRON™ Стікер P (в листах)": 1100,
  "FIPRON™ Cord": "23 100",
} as const;

export type ProductId = keyof typeof price;

export type Product = {
  id: ProductId;
  title: string;
  titleMobile: string;
  name: string;
  model: string;
  capacity: string;
  image: {
    webp1x: string;
    webp2x: string;
    alt: string;
  };
  imageMobile: {
    webp1x: string;
    webp2x: string;
    alt: string;
  };
  descriptions: string[];
  classes: string[];
  priceEUR: number;
};

export const products: Product[] = [
  {
    id: "FRSE-FS",
    title: "Вогнегасник спрей Firesi FRSE-FS",
    titleMobile: "Спрей Firesi  FRSE-FS",
    name: "Firesi FRSE-FS",
    model: "Спрей: FRSE-FS",
    capacity: "400 мл",
    image: {
      webp1x: "/img/webp/FRSE_FS.webp",
      webp2x: "/img/webp/FRSE_FS@2x.webp",
      alt: "Спрей: FRSE-FS",
    },
    imageMobile: {
      webp1x: "/img/webp/FRSE_FS_mobile.webp",
      webp2x: "/img/webp/FRSE_FS_mobile@2x.webp",
      alt: "Спрей: FRSE-FS",
    },
    descriptions: [
      "Тип вогнегасника: водно-пінний",
      "Обʼєм заряду: 400 мл",
      "Вогнегасна здатність: 34A, 183B, C, D, 75F, Li-ion, LiFePo4",
      "Для використання на пожежах під напругою до 400В",
      "Можна керувати лише однією рукою",
      "Дальність гасіння 1-2 метри",
      "Температурний діапазон експлуатації: від -15°C до +50°C",
    ],
    classes: [
      "🟩 A — тверді речовини (дерево, папір, текстиль)",
      "🟨 B — рідини (бензин, олія, лакофарби)",
      "🟥 C — гази (пропан, метан, бутан)",
      "⬛ D — метали (магній, натрій, титан)*",
      "🔌 E — електрообладнання під напругою",
      "🍳 F — кухонні жири й масла, може загасити до 20 літрів рослинної олії.",
    ],
    priceEUR: price["FRSE-FS"],
  },
  {
    id: "FRSE-F2",
    title: "Вогнегасник 2 літри Firesi FRSE-F2",
    titleMobile: "Вогнегасник Firesi FRSE-F2",
    name: "Firesi FRSE-F2",
    model: "Модель: FRSE-F2",
    capacity: "2 літри",
    image: {
      webp1x: "/img/webp/FRSE-F2.webp",
      webp2x: "/img/webp/FRSE-F2@2x.webp",
      alt: "Вогнегасник FRSE-F2",
    },
    imageMobile: {
      webp1x: "/img/webp/FRSE_F2_mobile.webp",
      webp2x: "/img/webp/FRSE_F2_mobile@2x.webp",
      alt: "Модель: FRSE-F2",
    },
    descriptions: [
      "Тип вогнегасника: водно-пінний",
      "Обʼєм заряду: 2 літри",
      "Вогнегасна здатність: 34A, 183B, C, D, 75F, Li-ion, LiFePo4",
      "Для використання на пожежах під напругою до 1000В",
      "Гасіння літієвих акумуляторів (Li-ion, LiFePo4)",
      "Дальність гасіння 1-2 метри",
      "Температурний діапазон експлуатації: від -15°C до +60°C",
    ],
    classes: [
      "🟩 A — тверді речовини (дерево, папір, текстиль)",
      "🟨 B — рідини (бензин, олія, лакофарби)",
      "🟥 C — гази (пропан, метан, бутан)",
      "⬛ D — метали (магній, натрій, титан)*",
      "🔌 E — електрообладнання під напругою",
      "🍳 F — кухонні жири й масла, може загасити до 100 літрів рослинної олії.",
    ],
    priceEUR: price["FRSE-F2"],
  },
  {
    id: "FRSE-F6",
    title: "Вогнегасник 6 літрів Firesi FRSE-F6",
    titleMobile: "Вогнегасник Firesi FRSE-F6",
    name: "Firesi FRSE-F6",
    model: "Модель: FRSE-F6",
    capacity: "6 літрів",
    image: {
      webp1x: "/img/webp/FRSE-F6.webp",
      webp2x: "/img/webp/FRSE-F6@2x.webp",
      alt: "FRSE-F6",
    },
    imageMobile: {
      webp1x: "/img/webp/FRSE_F6_mobile.webp",
      webp2x: "/img/webp/FRSE_F6_mobile@2x.webp",
      alt: "Модель: FRSE-F6",
    },
    descriptions: [
      "Тип вогнегасника: водно-пінний",
      "Обʼєм заряду: 6 літрів",
      "Вогнегасна здатність: 34A, 183B, C, D, 75F, Li-ion, LiFePo4",
      "Для використання на пожежах під напругою до 1000В",
      "Гасіння літієвих акумуляторів (Li-ion, LiFePo4)",
      "Дальність гасіння 1-2 метри",
      "Температурний діапазон експлуатації: від -15°C до +60°C",
    ],
    classes: [
      "🟩 A — тверді речовини (дерево, папір, текстиль)",
      "🟨 B — рідини (бензин, олія, лакофарби)",
      "🟥 C — гази (пропан, метан, бутан)",
      "⬛ D — метали (магній, натрій, титан)*",
      "🔌 E — електрообладнання під напругою",
      "🍳 F — кухонні жири й масла, може гасити до 300 літрів рослинної олії.",
    ],
    priceEUR: price["FRSE-F6"],
  },
];
