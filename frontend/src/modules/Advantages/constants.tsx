import { FaRegClock } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";

export const ADVANTAGES_CARDS = [
  {
    id: 1,
    title: "Сonvenient delivery and return",
    icon: <FiTruck size={36} />,
  },
  { id: 2, title: "Sending within 24 hours", icon: <FaRegClock size={36} /> },
  {
    id: 3,
    title: "Customer care",
    icon: <CiWallet size={36} />,
  },
];
