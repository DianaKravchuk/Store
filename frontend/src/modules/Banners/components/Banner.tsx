import React from "react";
import "../stroke.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "@/Ui/Button/Button";
import { GoArrowRight } from "react-icons/go";

interface BannerProps {
  salePercent?: number;
  outlineText?: string;
  filledText: string;
  backgroundImage?: string;
  onNext: () => void;
  onPrev: () => void;
}

const Banner: React.FC<BannerProps> = ({
  outlineText,
  filledText,
  salePercent,
  backgroundImage,
  onNext,
  onPrev,
}) => {
  return (
    <div
      className="w-full h-[425px] rounded-[25px] bg-[#00000033] flex flex-col p-[30px] lg:p-[clamp(30px,-90px+11.719vw,60px)] gap-[59px] bg-no-repeat bg-center bg-[length:700px_425px] md:bg-top md:bg-cover"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className="w-full flex justify-end gap-[2px]">
        <div
          className="size-6 flex items-center justify-center rounded-full bg-white rotate-180 cursor-pointer"
          onClick={onPrev}
        >
          <MdKeyboardArrowRight color="black" size={16} />
        </div>
        <div
          className="size-6 flex items-center justify-center rounded-full bg-white cursor-pointer"
          onClick={onNext}
        >
          <MdKeyboardArrowRight color="black" size={16} />
        </div>
      </div>
      <div className="fixed bottom-[30px] lg:bottom-[clamp(30px,-90px+11.719vw,60px)] flex flex-col gap-6">
        <div>
          <p className="uppercase text-stroke-white font-black banner-text">
            {outlineText}
          </p>
          <p className="text-white flex items-center uppercase gap-6 font-inter font-black banner-text">
            {filledText}
            {salePercent !== undefined && (
              <span className="text-[#FFFFFF80]">-{salePercent}%</span>
            )}
          </p>
        </div>
        <Button
          size="medium"
          text="Shop now"
          variant="filled"
          iconPosition="right"
          icon={
            <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
              <GoArrowRight width={10} height={8} color="black" />
            </span>
          }
        />
      </div>
    </div>
  );
};

export default Banner;
