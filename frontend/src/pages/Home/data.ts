import { ProductCardSize } from "@/components/ProductCard/types";

import shirt from "./TemporaryCardImage/shirt.png";

export const SALE_PRODUCTS = [
  {
    id: 21,
    title: "Bomber jacket",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Large,
    backgroundImage: shirt,
  },
  {
    id: 22,
    title: "Сheckered shirt",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 23,
    title: "Denim skirt midi",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
];

export const NEW_COLLECTION = [
  {
    id: 11,
    title: "Cotton striped shirt",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 12,
    title: "Women's vest",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 13,
    title: "Dress linen",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 14,
    title: "Men's pants linen",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 15,
    title: "Shoulder bag",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 16,
    title: "Men's t-shirt",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
];

export const BESTSELLER_PRODUCTS = [
  {
    id: 11,
    title: "Cotton striped shirt",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 12,
    title: "Women's vest",
    price: 25,
    size: ProductCardSize.Medium,
    backgroundImage: shirt,
  },
  {
    id: 13,
    title: "Dress linen",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 14,
    title: "Men's pants linen",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 15,
    title: "Shoulder bag",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
];
