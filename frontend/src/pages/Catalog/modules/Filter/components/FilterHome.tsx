import Button from "@/Ui/Button/Button";
import { FILTER_DATA } from "../data";
import FilterTitle from "./FilterTitle";
import { MdKeyboardArrowLeft } from "react-icons/md";
import FilterControl from "./FilterControl";
import { type FC } from "react";
import { type FilterHomeProps } from "./types";

const FilterHome: FC<FilterHomeProps> = ({
  onClose,
  onOpenFilter,
  onRemove,
  onShow,
}) => {
  return (
    <div className="max-w-[430px] min-w-[320] w-full h-full px-3 md:px-[clamp(12px,5.962px+1.887vw,20px)] py-5 md:py-[clamp(20px,4.906px+4.717vw,40px)] bg-white !flex flex-col items-center justify-between gap-[100px] overflow-hidden">
      <div className="w-full flex flex-col gap-6">
        <FilterTitle onClose={onClose} onPrev={undefined} title="Filter" />
        <div className="flex flex-col gap-2">
          {FILTER_DATA &&
            FILTER_DATA.map(({ id, text }) => (
              <Button
                key={id}
                size="full"
                variant="text"
                text={text}
                icon={<MdKeyboardArrowLeft size={24} className="rotate-180" />}
                iconPosition="right"
                textPosition="between"
                onClick={() => onOpenFilter(text)}
              />
            ))}
        </div>
      </div>
      <FilterControl onRemove={onRemove} onShow={onShow} />
    </div>
  );
};

export default FilterHome;
