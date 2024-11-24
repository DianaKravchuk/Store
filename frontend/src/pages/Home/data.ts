import { ProductCardSize } from "@/components/ProductCard/types";

import shirt from "./TemporaryCardImage/shirt.png";

export const CATALOG_DATA = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  title: "Cotton striped shirt",
  price: 25,
  size: ProductCardSize.Small,
  backgroundImage: shirt,
}));

export const NEW_COLLECTION = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: "Women's vest",
  price: 25,
  size: ProductCardSize.Small,
  backgroundImage: shirt,
}));

export const SALE_PRODUCTS = [
  {
    id: 1,
    title: "Bomber jacket",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Large,
    backgroundImage: shirt,
  },
  {
    id: 2,
    title: "Сheckered shirt",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 3,
    title: "Denim skirt midi",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 4,
    title: "Сheckered shirt",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 5,
    title: "Denim skirt midi",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 6,
    title: "Denim skirt midi",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 7,
    title: "Denim skirt midi",
    price: 25,
    priceBeforeSale: 35,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
];

export const BESTSELLER_PRODUCTS = [
  {
    id: 1,
    title: "Cotton striped shirt",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 2,
    title: "Women's vest",
    price: 25,
    size: ProductCardSize.Medium,
    backgroundImage: shirt,
  },
  {
    id: 3,
    title: "Dress linen",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 4,
    title: "Shoulder bag",
    price: 25,
    size: ProductCardSize.Small, //medium 1280
    backgroundImage: shirt,
  },
  {
    id: 5,
    title: "Men's pants linen",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 6,
    title: "Shoulder bag",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 7,
    title: "Shoulder bag",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
  {
    id: 8,
    title: "Shoulder bag",
    price: 25,
    size: ProductCardSize.Small,
    backgroundImage: shirt,
  },
];
