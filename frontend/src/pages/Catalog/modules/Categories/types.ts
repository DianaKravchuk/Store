import { CATALOG_CATEGORY } from "../../types";

export interface CategoriesProps {
  page: CATALOG_CATEGORY;
}

export interface CategoriesItemProps {
  name: string;
  id: number;
  isActive?: boolean;
}
