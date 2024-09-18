import { FC } from "react";
import { Link } from "react-router-dom";
import { OrderProps } from "./types";
import ProductCard from "@/components/ProductCard/ProductCard";
import { formatDate } from "../../../../utils/functions";

const OrderPreview: FC<OrderProps> = ({ id, price, status, items, date }) => {
  const formattedDate = formatDate(date ? new Date(date) : new Date());

  return (
    <div className="w-full max-w-[680px] flex flex-col gap-3" key={id}>
      <div className="flex flex-col mt-[51px] gap-[18px]">
        <div className="flex flex-col gap-3">
          <h2 className="uppercase font-montserrat text-xs text-black tracking-widest ">
            {status}
          </h2>
          <h2 className="uppercase font-montserrat text-xs text-black tracking-widest ">
            {formattedDate}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-inter text-[18px] leading-[22px]">
            {price}$
          </span>
          <Link to={`/order/${id}`} className="font-inter font-extralight">
            View order
          </Link>
        </div>
      </div>
      <div className="w-full flex gap-[23px]">
        {items?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            size={item.size}
            backgroundImage={item.backgroundImage}
            isPreview={true}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPreview;
