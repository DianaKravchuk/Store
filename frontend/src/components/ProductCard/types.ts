export enum ProductCardSize {
  Small = "small",
  SmallSquare = "smallSquare",
  Medium = "medium",
  Large = "large",
}

export interface ProductCardProps {
  id: number;
  title: string;
  price?: number;
  size: ProductCardSize;
  priceBeforeSale?: number;
  backgroundImage: string;
  variant?: "favorites" | "default";
  isPreview?: boolean;
}
