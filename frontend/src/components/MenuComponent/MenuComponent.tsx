import { type FC, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import classNames from "classnames";
import Button from "@/Ui/Button/Button";
import { type MenuComponentProps } from "./types";

const MenuComponent: FC<MenuComponentProps> = ({
  renderControl,
  className,
  renderItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = ({ isOpen }: { isOpen: boolean }) => {
    setIsOpen(isOpen);
  };

  const toggleOpenMenu = () => setIsOpen(!isOpen);
  const onClose = () => setIsOpen(false);

  const menuClassName = classNames(className, {
    "opacity-1 translate-x-0": isOpen,
    "opacity-0 !translate-x-full": !isOpen,
  });

  return (
    <Menu
      className={menuClassName}
      right
      isOpen={isOpen}
      onStateChange={handleStateChange}
      overlayClassName="left-0 top-0"
      burgerButtonClassName="burger-btn"
      bodyClassName="overflow-hidden"
      menuClassName="right-3"
      customBurgerIcon={
        <Button
          size="icon"
          variant="icon"
          icon={renderControl(onClose, isOpen)}
          onClick={toggleOpenMenu}
        />
      }
    >
      {renderItem(onClose, isOpen)}
    </Menu>
  );
};

export default MenuComponent;
