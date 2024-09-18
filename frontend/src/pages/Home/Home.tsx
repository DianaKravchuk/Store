import { FC } from "react";

import ProductSection from "@/pages/Home/components/ProductSection/ProductSection";
import Advantages from "@modules/Advantages/Advantages";
import Banners from "@modules/Banners";
import { BESTSELLER_PRODUCTS, NEW_COLLECTION, SALE_PRODUCTS } from "./data";

const Home: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[200px] pt-[104px]">
      <Banners />
      <Advantages />
      <ProductSection products={NEW_COLLECTION} title="New collection" />
      <ProductSection products={SALE_PRODUCTS} title="Sale" />
      <ProductSection products={BESTSELLER_PRODUCTS} title="Bestseller" />
    </div>
  );
};

export default Home;
