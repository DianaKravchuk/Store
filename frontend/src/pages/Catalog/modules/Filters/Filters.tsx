import { GiSettingsKnobs } from "react-icons/gi";
import Select from "@/Ui/Select/Select";
import { SortOptions } from "./data";
import { useState } from "react";
import Filter from "../Filter/Filter";
import MenuComponent from "@/components/MenuComponent/MenuComponent";

const Filters = () => {
  const [sort, setSort] = useState(SortOptions.sort);
  const handleSetSort = (newValue: string) => {
    setSort(newValue);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="w-full max-w-[304px]">
        <Select
          placeholder="Sort"
          variant="sort"
          value={sort}
          options={Object.values(SortOptions)}
          onChange={handleSetSort}
        />
      </div>
      <MenuComponent
        className="filter"
        renderControl={() => <GiSettingsKnobs size={24} />}
        renderItem={(onClose, isOpen) => (
          <Filter closeMenu={onClose} isOpen={isOpen} />
        )}
      />
    </div>
  );
};

export default Filters;
