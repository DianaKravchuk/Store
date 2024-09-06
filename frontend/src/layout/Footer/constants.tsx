import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";

export const FOOTER_NAVIGATE = {
  link: [
    {
      id: 1,
      title: "support",
      links: [
        {
          content: "Help",
          url: "/help",
          id: 1,
        },
        {
          content: "Shipping + return",
          url: "/shipping",
          id: 2,
        },
        {
          content: "Delivery",
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
          content: "Our mission",
          url: "/mission",
          id: 1,
        },
        {
          content: "Blog",
          url: "/blog",
          id: 2,
        },
        {
          content: "Careers",
          url: "/careers",
          id: 3,
        },
      ],
    },
  ],
  icon: [
    {
      id: 3,
      title: "Follow us on:",
      links: [
        {
          content: <PiInstagramLogoThin size={24} />,
          url: "/instagram",
          id: 1,
        },
        {
          content: <PiTelegramLogoThin size={24} />,
          url: "/telegram",
          id: 2,
        },
        {
          content: <PiWhatsappLogoLight size={24} />,
          url: "/wat",
          id: 3,
        },
      ],
    },
  ],
  legalLinks: [
    { id: 1, url: "/legal", text: "Legal notice" },
    { id: 2, url: "/privacy", text: "Privacy policy" },
  ],
};
