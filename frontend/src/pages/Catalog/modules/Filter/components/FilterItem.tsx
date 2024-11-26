import FilterTitle from "./FilterTitle";
import FilterControl from "./FilterControl";
import { type FC } from "react";
import classNames from "classnames";
import { FILTER_ITEMS } from "../data";
import Checkbox from "@/Ui/Checkbox/Checkbox";
import FilterPrice from "./FilterPrice";
import { type FilterItemProps } from "./types";

const FilterItem: FC<FilterItemProps> = ({
  onClose,
  onRemove,
  onShow,
  onPrev,
  title = "",
  isOpen,
}) => {
  const containerCN = classNames(
    "max-w-[430px] min-w-[320px] w-full h-full px-3 md:px-[clamp(12px,5.962px+1.887vw,20px)] py-5 md:py-[clamp(20px,4.906px+4.717vw,40px)] bg-white flex flex-col items-center justify-between gap-[50px] absolute z-10 top-0 transition-transform duration-500 ease-in-out overflow-y-scroll",
    {
      "translate-x-0": isOpen,
      "translate-x-full": !isOpen,
    },
  );

  return (
    <div className={containerCN}>
      <div className="w-full flex flex-col gap-3">
        <FilterTitle onClose={onClose} onPrev={onPrev} title={title} />
        {title === "Price" ? (
          <FilterPrice />
        ) : (
          <div className="flex flex-col gap-0">
            {FILTER_ITEMS[title.toLowerCase()] &&
              FILTER_ITEMS[title.toLowerCase()].map(({ id, name }) => (
                <Checkbox key={id} label={name} />
              ))}
          </div>
        )}
      </div>
      <FilterControl onRemove={onRemove} onShow={onShow} />
    </div>
  );
};

export default FilterItem;
