import { FC } from "react";
import ProductSection from "@/pages/Home/components/ProductSection/ProductSection";
import Advantages from "@modules/Advantages/Advantages";
import Banners from "@modules/Banners";
import { BESTSELLER_PRODUCTS, NEW_COLLECTION, SALE_PRODUCTS } from "./data";
import useWindowSize from "@/hooks/useWindowSize";
import { ProductCardSize } from "@/components/ProductCard/types";

const Home: FC = () => {
  const { width } = useWindowSize();

  const getCardCount = () => {
    if (width < 1024) {
      return { countCard: 6, countCardBest: 6, countCardSale: 6 };
    } else if (width >= 1024 && width < 1280) {
      return { countCard: 6, countCardBest: 5, countCardSale: 3 };
    } else if (width >= 1280 && width < 1760) {
      return { countCard: 8, countCardBest: 6, countCardSale: 5 };
    } else {
      return { countCard: 10, countCardBest: 8, countCardSale: 7 };
    }
  };

  const { countCard, countCardBest, countCardSale } = getCardCount();

  const modifiedBestsellerProducts = BESTSELLER_PRODUCTS.slice(
    0,
    countCardBest,
  ).map((product, index) => {
    if (countCardBest >= 6 && index === 3) {
      return { ...product, size: ProductCardSize.Medium };
    }
    return product;
  });

  return (
    <div className="w-full flex flex-col items-center gap-[100px] pt-[64px] md:gap-[150px] lg:gap-[200px]">
      <Banners />
      <Advantages />
      <ProductSection
        products={NEW_COLLECTION.slice(0, countCard)}
        title="New collection"
      />
      <ProductSection
        products={SALE_PRODUCTS.slice(0, countCardSale)}
        title="Sale"
      />
      <ProductSection
        products={modifiedBestsellerProducts}
        title="Bestseller"
      />
    </div>
  );
};

export default Home;
