import { type FC } from "react";
import { type CategoriesProps } from "./types";

import { CATALOG_CATEGORIES } from "../../data";
import CategoriesItem from "./CategoriesItem";

const Categories: FC<CategoriesProps> = ({ page }) => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl uppercase font-inter font-bold leading-[46px]">
        Show all for {page}
      </h2>
      <ul className="flex flex-wrap gap-x-1 gap-y-2">
        {CATALOG_CATEGORIES[page] &&
          CATALOG_CATEGORIES[page].map(({ id, name, isActive }) => (
            <CategoriesItem key={id} id={id} name={name} isActive={isActive} />
          ))}
      </ul>
    </section>
  );
};

export default Categories;
