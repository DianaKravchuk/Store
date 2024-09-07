export enum ProductCardSize {
  Small = "small",
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
  isPreview?: boolean;
}
