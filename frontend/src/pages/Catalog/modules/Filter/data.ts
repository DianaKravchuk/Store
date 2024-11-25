export const FILTER_DATA = [
  { id: 1, text: "Color" },
  { id: 2, text: "Size" },
  { id: 3, text: "Price" },
  { id: 4, text: "Season" },
];

export const FILTER_ITEMS: Record<string, { id: number; name: string }[]> = {
  color: [
    { id: 1, name: "Beige" },
    { id: 2, name: "White" },
    { id: 3, name: "Brown" },
    { id: 4, name: "Black" },
    { id: 5, name: "Red" },
    { id: 6, name: "Pink" },
    { id: 7, name: "Grey" },
  ],
  size: [
    { id: 1, name: "XXS" },
    { id: 2, name: "XS" },
    { id: 3, name: "S" },
    { id: 4, name: "M" },
    { id: 5, name: "L" },
    { id: 6, name: "XL" },
    { id: 7, name: "XXL" },
  ],
  season: [
    { id: 1, name: "Winter" },
    { id: 2, name: "Summer" },
    { id: 3, name: "Demi-season" },
  ],
};
