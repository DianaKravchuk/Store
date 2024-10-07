import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { ProductCardProps } from "./types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addFavoriteItem,
  deleteFavoriteItem,
  selectFavoriteItems,
} from "@/redux/slices/userFavorites";
import Button from "@/Ui/Button/Button";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  priceBeforeSale,
  size,
  backgroundImage,
  id,
  isPreview = false,
}) => {
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector(selectFavoriteItems);

  const isFavorite = favoriteItems.includes(id);

  const toggleFavorite = () => {
    isFavorite
      ? dispatch(deleteFavoriteItem(id))
      : dispatch(addFavoriteItem(id));
  };
  const sizeClass = {
    small: "w-full h-[328px] min-w-[224px] max-w-[328px] lg:min-w-[240px]",
    medium:
      "w-full min-w-[224px] max-w-[328px] h-[328px] lg:min-w-[240px] lg:h-[680px] row-span-1 lg:row-span-2",
    large:
      "w-full min-w-[224px] max-w-[328px] h-[328px] lg:w-[680px] lg:h-[680px] lg:max-w-full col-span-1 lg:col-span-2 row-span-1 lg:row-span-2",
  }[size];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${sizeClass} relative rounded-3xl overflow-hidden p-[17px] flex flex-col justify-between hover:cursor-pointer`}
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
            <Button
              size="icon"
              variant="icon"
              onClick={toggleFavorite}
              icon={
                isFavorite ? (
                  <FaHeart size={20} color="#cc2e25" />
                ) : (
                  <FaRegHeart size={20} color="#cc2e25" />
                )
              }
            />
          </div>
          <div className="w-full flex justify-between items-center bg-white rounded-[15px] py-1 px-3">
            <div className="flex flex-col gap-1">
              <span className="font-inter font-medium leading-[19px] text-[16px] text-black">
                {title}
              </span>
              <p className="font-inter font-light leading-[19px] text-[16px] flex gap-1">
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
