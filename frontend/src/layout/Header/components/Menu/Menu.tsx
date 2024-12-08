import { type FC } from "react";
import { type MenuProps } from "./types";

import { categoryLinks, navigationLinks } from "../../data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";
import { HiUser } from "react-icons/hi2";

const MenuComponent: FC<MenuProps> = ({ isIcon = false, onClose }) => {
  const { user } = useAppSelector(userData);

  return (
    <div className="bg-grey-opacity-80% max-w-[160px] rounded-3xl">
      {isIcon &&
        navigationLinks &&
        navigationLinks.map((link) => (
          <ButtonLink
            key={link.id}
            size="medium"
            text={link.text}
            variant="text"
            url={link.id === 2 && user ? "/account" : link.link}
            icon={
              link.id === 2 && user ? (
                <HiUser size={24} />
              ) : (
                <link.icon size={24} />
              )
            }
            iconPosition="right"
            textPosition="between"
            onClick={onClose}
          />
        ))}
      {categoryLinks &&
        categoryLinks.map((link, index) => (
          <ButtonLink
            size="medium"
            key={index}
            text={link.label}
            url={link.href}
            variant="text"
            textPosition="start"
            onClick={onClose}
          />
        ))}
    </div>
  );
};

export default MenuComponent;
