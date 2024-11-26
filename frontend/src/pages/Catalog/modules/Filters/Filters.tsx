import Select from "@/Ui/Select/Select";
import { SortOptions } from "./data";
import { useState } from "react";
import Filter from "../Filter/Filter";

const Filters = () => {
  const [sort, setSort] = useState(SortOptions.sort);
  const handleSetSort = (newValue: string) => {
    console.log(newValue);
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
      <Filter />
    </div>
  );
};

export default Filters;
