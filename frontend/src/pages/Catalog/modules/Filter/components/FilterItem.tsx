import FilterTitle from "./FilterTitle";
import FilterControl from "./FilterControl";
import { FC } from "react";
import classNames from "classnames";
import { FILTER_ITEMS } from "../data";
import Checkbox from "@/Ui/Checkbox/Checkbox";

export interface FilterItemProps {
  onClose: () => void;
  onRemove: () => void;
  onShow: () => void;
  onPrev: () => void;
  title?: string;
  isOpen: boolean;
}

const FilterItem: FC<FilterItemProps> = ({
  onClose,
  onRemove,
  onShow,
  onPrev,
  title = "",
  isOpen,
}) => {
  const containerCN = classNames(
    "max-w-[430px] min-w-[320px] w-full h-full px-3 md:px-[clamp(12px,5.962px+1.887vw,20px)] py-5 md:py-[clamp(20px,4.906px+4.717vw,40px)] bg-white flex flex-col items-center justify-between gap-[100px] absolute z-10 top-0 transition-transform duration-500 ease-in-out",
    {
      "translate-x-0": isOpen,
      "translate-x-full": !isOpen,
    },
  );

  return (
    <div className={containerCN}>
      <div className="w-full flex flex-col gap-6">
        <FilterTitle onClose={onClose} onPrev={onPrev} title={title} />
        <div className="flex flex-col gap-2">
          {FILTER_ITEMS[title.toLowerCase()] &&
            FILTER_ITEMS[title.toLowerCase()].map(({ id, name }) => (
              <Checkbox key={id} label={name} />
            ))}
        </div>
      </div>
      <FilterControl onRemove={onRemove} onShow={onShow} />
    </div>
  );
};

export default FilterItem;
