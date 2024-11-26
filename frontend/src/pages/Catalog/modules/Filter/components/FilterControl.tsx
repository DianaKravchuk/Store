import Button from "@/Ui/Button/Button";
import { type FC } from "react";
import { FilterControlProps } from "./types";

const FilterControl: FC<FilterControlProps> = ({ onRemove, onShow }) => {
  return (
    <div className="w-full max-m-[390px] flex flex-col gap-6">
      <Button
        size="full"
        variant="filled"
        text="Show results"
        onClick={onShow}
      />
      <Button
        size="full"
        variant="outlined"
        text="Remove filter"
        onClick={onRemove}
      />
    </div>
  );
};

export default FilterControl;
