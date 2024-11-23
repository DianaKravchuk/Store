import { ProductCardProps } from "@/components/ProductCard/types";

export interface OrderProps {
  id: number;
  status: string;
  price?: number;
  date?: Date;
  country: string;
  city: string;
  street: string;
  homeNumber: number;
  phoneNumber: string;
  items?: ProductCardProps[];
}
