import React from "react";
import "../stroke.css";
import Button from "../../../Ui/Button";
import { MdKeyboardArrowRight } from "react-icons/md";

interface BannerProps {
  salePercent?: number;
  outlineText?: string;
  filledText: string;
  backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({
  outlineText,
  filledText,
  salePercent,
  backgroundImage,
}) => {
  return (
    <div
      className="w-[1040px] h-[425px] rounded-[25px] bg-[#00000033] flex flex-col py-[60px] gap-[59px]"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-end pr-[60px]">
        <div className="size-6 flex items-center justify-center rounded-full bg-white rotate-180">
          <MdKeyboardArrowRight color="black" size={16} />
        </div>
        <div className="size-6 flex items-center justify-center rounded-full bg-white">
          <MdKeyboardArrowRight color="black" size={16} />
        </div>
      </div>
      <div className="flex flex-col pl-[84px] gap-6">
        <div>
          <p className="uppercase text-stroke-white font-inter font-black text-[64px] leading-[77px]">
            {outlineText}
          </p>
          <p className="text-white flex items-center uppercase gap-6 font-inter font-black text-[64px] leading-[77px]">
            {filledText}
            {salePercent !== undefined && <span>-{salePercent}%</span>}
          </p>
        </div>
        <Button text="Shop now" size="small" />
      </div>
    </div>
  );
};

export default Banner;
