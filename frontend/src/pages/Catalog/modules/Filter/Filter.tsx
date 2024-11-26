import { FC, useEffect, useState } from "react";
import FilterHome from "./components/FilterHome";
import FilterItem from "./components/FilterItem";
import { FilterProps } from "./types";

const Filter: FC<FilterProps> = ({ closeMenu, isOpen }) => {
  const [isOpenFilter, setIsOpenFilter] = useState<string | undefined>(
    undefined,
  );

  const handleShowResults = () => closeMenu && closeMenu();
  const handleRemoveFilter = () => closeMenu && closeMenu();
  const handleOnClose = () => closeMenu && closeMenu();
  const handleOnPrev = () => setIsOpenFilter(undefined);
  const handleOnFilter = (filter: string) => {
    setIsOpenFilter(filter);
  };
  useEffect(() => {
    if (!isOpen) {
      setIsOpenFilter(undefined);
    }
  }, [isOpen]);

  return (
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
  );
};

export default Filter;
