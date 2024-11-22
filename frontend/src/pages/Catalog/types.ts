export enum CATALOG_CATEGORY {
  MAN = "man",
  WOMAN = "woman",
  BOYS = "boys",
  GIRLS = "girls",
}
export interface CatalogProps {
  page: CATALOG_CATEGORY;
}
