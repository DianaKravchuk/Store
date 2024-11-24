import { FC } from "react";
import { Link } from "react-router-dom";
import { OrderProps } from "./types";
import ProductCard from "@/components/ProductCard/ProductCard";
import { formatDate } from "@/utils/functions.ts";
import { useDispatch } from "react-redux";
import { addCurrentOrder } from "@/redux/slices/orderSlice";
import { ProductCardSize } from "@components/ProductCard/types.ts";

const OrderPreview: FC<OrderProps> = ({
  id,
  price,
  status,
  items,
  date,
  country,
  city,
  phoneNumber,
  homeNumber,
  street,
}) => {
  const formattedDate = formatDate(date ? new Date(date) : new Date());
  const dispatch = useDispatch();
  const totalItemsPrice =
    items?.reduce((total: number, item) => total + item.price!, 0) ?? 0;
  const handleSetCurrentOrder = () => {
    dispatch(
      addCurrentOrder({
        id,
        price,
        status,
        items,
        date,
        country,
        city,
        phoneNumber,
        homeNumber,
        street,
      }),
    );
  };
  return (
    <div className="w-full max-w-[1032px] flex flex-col gap-3" key={id}>
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
            {totalItemsPrice}$
          </span>
          <Link
            to={`/account/orders/order`}
            className="font-inter font-extralight"
            onClick={handleSetCurrentOrder}
          >
            View order
          </Link>
        </div>
      </div>
      <div className="w-full flex gap-[24px] flex-wrap sm:justify-center md:justify-start">
        {items?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            size={ProductCardSize.OrderPreviewSize}
            backgroundImage={item.backgroundImage}
            isPreview={true}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPreview;
