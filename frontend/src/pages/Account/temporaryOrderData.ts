import { OrderProps } from "./components/OrderPreview/types";
import shirt from "@/modules/NewCollection/TemporaryCardImage/shirt.png";

export const testOrder: OrderProps[] = [
  {
    id: 1,
    status: "Delivered",
    price: 145,
    date: new Date(),
    items: [
      {
        id: 123,
        title: "Men`s t-shirt",
        backgroundImage: shirt,
        size: "small",
        isPreview: true,
      },
      {
        id: 34534,
        title: "Men`s t-shirt",
        backgroundImage: shirt,
        size: "small",
        isPreview: true,
      },
    ],
  },
  {
    id: 2,
    status: "Returned",
    price: 1045,
    date: new Date(),
    items: [
      {
        id: 567768,
        title: "Men`s t-shirt",
        backgroundImage: shirt,
        size: "small",
        isPreview: true,
      },
      {
        id: 76743,
        title: "Men`s t-shirt",
        backgroundImage: shirt,
        size: "small",
        isPreview: true,
      },
    ],
  },
  {
    id: 3,
    status: "Returned",
    price: 54,
    date: new Date(),
    items: [
      {
        id: 567768,
        title: "Men`s t-shirt",
        backgroundImage: shirt,
        size: "small",
        isPreview: true,
      },
      {
        id: 76743,
        title: "Men`s t-shirt",
        backgroundImage: shirt,
        size: "small",
        isPreview: true,
      },
    ],
  },
];
