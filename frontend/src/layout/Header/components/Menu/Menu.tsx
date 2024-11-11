import { FC, useState } from "react";
import { categoryLinks, navigationLinks } from "../../data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { slide as Menu } from "react-burger-menu";
import classNames from "classnames";
import { Divide as Hamburger } from "hamburger-react";
import { useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";
import { HiUser } from "react-icons/hi2";
export interface MenuProps {
  isIcon?: boolean;
}
const MenuComponent: FC<MenuProps> = ({ isIcon = false }) => {
  const { user } = useAppSelector(userData);

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
      customBurgerIcon={
        <Hamburger
          size={24}
          distance="sm"
          rounded
          label="Show menu"
          hideOutline={false}
          toggled={isOpenMenu}
          toggle={handleClickMenu}
        />
      }
    >
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
