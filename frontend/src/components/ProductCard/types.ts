export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  size: "small" | "medium" | "large";
  priceBeforeSale?: number;
  backgroundImage: string;
}
