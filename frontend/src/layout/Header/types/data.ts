export const categoryLinks = [
  {
    label: "Sale",
    href: "",
  },
  {
    label: "Woman",
    href: "",
  },
  {
    label: "Man",
    href: "",
  },
  {
    label: "Kids",
    href: "",
  },
];

import { HiOutlineUser } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { navigationLinksTypes } from "./types";

export const navigationLinks: readonly navigationLinksTypes[] = [
  {
    id: 1,
    link: "/search",
    icon: IoSearchOutline,
  },
  {
    id: 2,
    link: "/account",
    icon: HiOutlineUser,
  },
  {
    id: 3,
    link: "/cart",
    icon: IoCartOutline,
  },
];
