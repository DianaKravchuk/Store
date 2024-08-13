import { FC } from "react";
import { CardProps } from "./types";

const AdvantagesCard: FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="w-1/3 bg-[#fff] rounded-[24px] pt-10 pr-[27px] pb-[44px] pl-6 gap-14 flex flex-col">
      <div>{icon}</div>
      <p className="font-inter text-[18px] leading-[28px]">{title}</p>
    </div>
  );
};

export default AdvantagesCard;
