import { FC, useState } from "react";
import { categoryLinks, navigationLinks } from "../../data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { slide as Menu } from "react-burger-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import classNames from "classnames";

export interface MenuProps {
  isIcon?: boolean;
}
const MenuComponent: FC<MenuProps> = ({ isIcon = false }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => setIsOpenMenu(!isOpenMenu);
  const handleStateChange = ({ isOpen }: { isOpen: boolean }) => {
    setIsOpenMenu(isOpen);
  };

  const menuClassName = classNames("menu", {
    ["opacity-1"]: isOpenMenu,
    ["opacity-0 !translate-x-[200%]"]: !isOpenMenu,
  });
  return (
    <Menu
      className={menuClassName}
      right
      width={160}
      isOpen={isOpenMenu}
      onStateChange={handleStateChange}
      overlayClassName="left-0 top-0"
      burgerButtonClassName="burger-btn"
      bodyClassName="overflow-hidden"
      menuClassName="right-3"
      customBurgerIcon={<RxHamburgerMenu size={24} />}
    >
      <div className="bg-grey-opacity-80% max-w-[160px] rounded-3xl">
        {isIcon &&
          navigationLinks &&
          navigationLinks.map((link) => (
            <ButtonLink
              key={link.id}
              size="medium"
              url={link.link}
              text={link.text}
              variant="text"
              icon={<link.icon size={20} />}
              iconPosition="right"
              textPosition="between"
              onClick={handleClickMenu}
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
              onClick={handleClickMenu}
            />
          ))}
      </div>
    </Menu>
  );
};

export default MenuComponent;
