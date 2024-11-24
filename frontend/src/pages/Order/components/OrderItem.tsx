import { FC } from "react";

export interface ProductCardProps {
  id: number;
  title: string;
  price?: number;
  size?: string;
  color?: string;
  backgroundImage: string;
  clothesSize?: string;
}

const OrderItem: FC<ProductCardProps> = ({
  price,
  title,
  color,
  clothesSize,
  backgroundImage,
}) => {
  return (
    <div className="w-fit h-fit flex sm:flex-col md:flex-row gap-6">
      <div
        className="sm:size-[224px] lg:size-[328px] bg-cover bg-top rounded-3xl"
        style={{
          backgroundImage: !backgroundImage
            ? undefined
            : `url(${backgroundImage})`,
        }}
      ></div>
      <div className="w-fit h-fit flex flex-col pt-9 gap-9">
        <p className="font-inter text-[18px] leading-[22px]">{title}</p>
        <div className="w-[111px] flex justify-between font-inter text-[18px] leading-[22px]">
          <div className="flex flex-col gap-[17px]">
            <span>Size</span>
            <span>Color</span>
            <span>Price</span>
          </div>
          <div className="flex flex-col gap-[17px]">
            <span>{clothesSize}</span>
            <span> {color}</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
