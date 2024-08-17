import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
export const FOOTER_NAVIGATE = [
  {
    id: 1,
    title: "support",
    links: [
      {
        children: "Help",
        url: "/help",
        id: 1,
      },
      {
        children: "Shipping + return",
        url: "/shipping",
        id: 2,
      },
      {
        children: "Delivery",
        url: "/delivery",
        id: 3,
      },
    ],
  },
  {
    id: 2,
    title: "about us",
    links: [
      {
        children: "Our mission",
        url: "/mission",
        id: 1,
      },
      {
        children: "Blog",
        url: "/blog",
        id: 2,
      },
      {
        children: "Careers",
        url: "/careers",
        id: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Follow us on:",
    links: [
      {
        children: (
          <span className="flex justify-center">
            <PiInstagramLogoThin size={36} className="py-1 px-1" />
          </span>
        ),
        url: "/instagram",
        id: 1,
      },
      {
        children: (
          <span className="flex justify-center">
            <PiTelegramLogoThin size={36} className="py-1 px-1" />
          </span>
        ),
        url: "/telegram",
        id: 2,
      },
      {
        children: (
          <span className="flex justify-center">
            <PiWhatsappLogoLight size={36} className="py-1 px-1" />
          </span>
        ),
        url: "/wat",
        id: 3,
      },
    ],
  },
];
