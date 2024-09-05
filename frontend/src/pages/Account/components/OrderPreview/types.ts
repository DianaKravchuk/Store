import { ProductCardProps } from "@/components/ProductCard/types";

export interface OrderProps {
  id: number;
  status: string;
  price: number;
  date?: Date;
  items?: ProductCardProps[];
}
