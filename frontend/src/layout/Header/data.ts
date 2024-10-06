export const categoryLinks = [
  {
    label: "Man",
    href: "/man",
  },
  {
    label: "Woman",
    href: "/woman",
  },
  {
    label: "Boys",
    href: "/boys",
  },
  {
    label: "Girls",
    href: "/girls",
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
    text: "Search",
    icon: IoSearchOutline,
  },
  {
    id: 2,
    link: "/auth",
    text: "Account",
    icon: HiOutlineUser,
  },
  {
    id: 3,
    link: "/cart",
    text: "Cart",
    icon: IoCartOutline,
  },
];
