import { FC } from "react";
import { CATALOG_CATEGORIES } from "../../data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { CATALOG_CATEGORY } from "../../types";
export interface CategoriesProps {
  page: CATALOG_CATEGORY;
}
const Categories: FC<CategoriesProps> = ({ page }) => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl uppercase font-inter font-bold leading-[46px]">
        Show all for {page}
      </h2>
      <ul className="md:flex flex-wrap">
        {CATALOG_CATEGORIES[page] &&
          CATALOG_CATEGORIES[page].map(({ id, name, link }) => (
            <li key={id} className="w-fit">
              <ButtonLink
                size="small"
                variant="text"
                text={name}
                url={link}
                textPosition="start"
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Categories;
