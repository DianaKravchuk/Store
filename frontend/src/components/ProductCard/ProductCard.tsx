import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  priceBeforeSale,
  size,
  backgroundImage,
  isPreview = false,
}) => {
  const sizeClass = {
    small: "w-[331px] h-[328px]",
    medium: "w-[328px] h-[680px] row-span-2",
    large: "size-[680px] col-span-2 row-span-2",
  }[size];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${sizeClass} relative rounded-3xl overflow-hidden p-5 flex flex-col justify-between hover:cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-cover bg-top ${
          isHovered
            ? "transform transition-transform duration-300 scale-105"
            : ""
        }`}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
        }}
      ></div>

      {!isPreview && (
        <div className="z-10 h-full flex flex-col justify-between">
          <div className="w-full flex justify-end">
            <CiHeart size={24} />
          </div>
          <div className="w-full h-[53px] flex justify-between items-center bg-white rounded-[15px] py-1 px-3">
            <div className="flex flex-col">
              <span className="font-inter font-medium leading-5 text-[18px] text-black">
                {title}
              </span>
              <p className="font-inter font-light leading-5 text-[16px] flex gap-1">
                Price:
                <span
                  className={`${priceBeforeSale ? "text-[#CC2E25] line-through" : "hidden"}`}
                >
                  {priceBeforeSale}$
                </span>
                <span>{price}$</span>
              </p>
            </div>
            <div className="size-6 bg-[#989899] flex items-center justify-center rounded-full">
              <SlArrowRight size={12} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
