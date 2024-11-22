import { type FC } from "react";
import { type CatalogProps } from "./types";
import Categories from "./modules/Categories/Categories";
import Products from "./modules/Products/Products";
import Filters from "./modules/Filters/Filters";

const Catalog: FC<CatalogProps> = ({ page }) => {
  return (
    <div className="container pt-[42px] lg:pt-[22.5px] flex flex-col gap-[41px]">
      <Categories page={page} />
      <div className="flex flex-col gap-3">
        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default Catalog;
