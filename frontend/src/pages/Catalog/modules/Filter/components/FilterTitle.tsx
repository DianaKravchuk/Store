import Button from "@/Ui/Button/Button";
import classNames from "classnames";
import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";

export interface FilterTitleProps {
  title: string;
  onClose: () => void;
  onPrev?: () => void;
}

const FilterTitle: FC<FilterTitleProps> = ({ onClose, onPrev, title }) => {
  const sectionCN = classNames(
    "w-full flex justify-between items-center font-inter text-black-000 text-2xl font-bold uppercase",
    {
      ["bg-grey-opacity-35% capitalize font-normal text-lg"]: onPrev,
    },
  );
  return (
    <section className={sectionCN}>
      {onPrev && (
        <Button
          size="icon"
          variant="icon"
          onClick={onPrev}
          icon={<MdKeyboardArrowLeft size={24} />}
        />
      )}
      <h3>{title}</h3>
      <Button
        size="icon"
        variant="icon"
        onClick={onClose}
        icon={<IoCloseCircleOutline size={24} />}
      />
    </section>
  );
};

export default FilterTitle;
