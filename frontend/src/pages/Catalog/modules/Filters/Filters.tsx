import Select from "@/Ui/Select/Select";
import { SortOptions } from "./data";
import { useState } from "react";
import Button from "@/Ui/Button/Button";
import { GiSettingsKnobs } from "react-icons/gi";

const Filters = () => {
  const [sort, setSort] = useState(SortOptions.sort);
  const handleSetSort = (newValue: string) => {
    console.log(newValue);
    setSort(newValue);
  };
  const handleOnClick = () => console.log("toggle filters");
  return (
    <div className="flex justify-between items-center">
      <div className="w-full max-w-[304px] pl-[28px]">
        <Select
          placeholder="Sort"
          variant="sort"
          value={sort}
          options={Object.values(SortOptions)}
          onChange={handleSetSort}
        />
      </div>
      <Button
        size="icon"
        variant="icon"
        icon={<GiSettingsKnobs size={24} />}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default Filters;
