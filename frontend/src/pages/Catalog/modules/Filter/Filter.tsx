import { slide as Menu } from "react-burger-menu";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "@/Ui/Button/Button";
import { GiSettingsKnobs } from "react-icons/gi";
import FilterHome from "./components/FilterHome";
import FilterItem from "./components/FilterItem";

const Filter = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState<string | undefined>(
    undefined,
  );

  const handleClickMenu = () => setIsOpenMenu(!isOpenMenu);
  const handleStateChange = ({ isOpen }: { isOpen: boolean }) => {
    setIsOpenMenu(isOpen);
  };

  const menuClassName = classNames("filter", {
    "opacity-1 translate-x-0": isOpenMenu,
    "opacity-0 !translate-x-full": !isOpenMenu,
  });

  const handleShowResults = () => setIsOpenMenu(false);
  const handleRemoveFilter = () => setIsOpenMenu(false);
  const handleOnClose = () => setIsOpenMenu(false);
  const handleOnPrev = () => setIsOpenFilter(undefined);
  const handleOnFilter = (filter: string) => {
    setIsOpenFilter(filter);
  };
  useEffect(() => {
    if (!isOpenMenu) {
      setIsOpenFilter(undefined);
    }
  }, [isOpenMenu]);
  return (
    <Menu
      className={menuClassName}
      right
      width={430}
      isOpen={isOpenMenu}
      onStateChange={handleStateChange}
      overlayClassName="left-0 top-0"
      burgerButtonClassName="burger-btn"
      bodyClassName="overflow-hidden"
      menuClassName="right-3"
      customBurgerIcon={
        <Button
          size="icon"
          variant="icon"
          icon={<GiSettingsKnobs size={24} />}
          onClick={handleClickMenu}
        />
      }
    >
      <div className="flex h-full">
        <FilterHome
          onClose={handleOnClose}
          onOpenFilter={handleOnFilter}
          onRemove={handleRemoveFilter}
          onShow={handleShowResults}
        />
        <FilterItem
          onClose={handleOnClose}
          onRemove={handleRemoveFilter}
          onShow={handleShowResults}
          onPrev={handleOnPrev}
          title={isOpenFilter}
          isOpen={!!isOpenFilter}
        />
      </div>
    </Menu>
  );
};

export default Filter;
