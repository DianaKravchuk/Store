import banner1 from "./TemporaryBannerImages/banner1.png";
import banner2 from "./TemporaryBannerImages/banner2.png";
import banner3 from "./TemporaryBannerImages/banner3.png";

interface Banner {
  id: number;
  outlineText?: string;
  filledText: string;
  salePercent?: number;
  backgroundImage: string;
}

export const BannersData: Banner[] = [
  {
    id: 1,
    outlineText: "Summer",
    filledText: "Sale",
    salePercent: 60,
    backgroundImage: banner1,
  },
  {
    id: 2,
    outlineText: "New",
    filledText: "Collection",
    backgroundImage: banner2,
  },
  {
    id: 3,
    filledText: "Bestsellers",
    backgroundImage: banner3,
  },
];
