import { FC } from "react";
import { CardProps } from "./types";

const AdvantagesCard: FC<CardProps> = ({ icon, title, size }) => {
  const sizeClass = {
    small: "col-span-1",
    large: "col-span-1 md:max-xl:col-span-2",
  }[size];
  return (
    <div
      className={`${sizeClass} w-full bg-[#fff] rounded-[24px] py-[38px] px-6 gap-12 flex justify-center items-center flex-col`}
    >
      <div>{icon}</div>
      <div className="flex justify-center items-center h-11">
        <p className="align-middle font-inter text-[18px] text-center leading-[22px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AdvantagesCard;
