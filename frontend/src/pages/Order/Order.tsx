import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "@/utils/functions.ts";
import { clearCurrentOrder, selectOrder } from "@/redux/slices/orderSlice.ts";
import { HiArrowLeft } from "react-icons/hi2";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import OrderItem from "./components/OrderItem";
import { PiMapPin, PiCreditCard } from "react-icons/pi";
import Button from "@/Ui/Button/Button";
import { FaApplePay } from "react-icons/fa";

const Order: FC = () => {
  const order = useSelector(selectOrder);
  const deliveryCost: number = 5;
  const dispatch = useDispatch();
  console.log(order);

  if (!order) {
    return <p>Order not found</p>;
  }

  const {
    id,
    status,
    date,
    items,
    country,
    city,
    phoneNumber,
    homeNumber,
    street,
  } = order;
  const formattedDate = formatDate(date ? new Date(date) : new Date());
  const totalItemsPrice =
    items?.reduce((total: number, item) => total + item.price!, 0) ?? 0;

  return (
    <div className="sm:w-[304px] md:w-[720px] lg:w-[852px] xl:w-[1032px] 2xl:w-[1384px] h-full flex flex-col gap-8 items-center justify-center overflow-hidden mt-16 mb-[200px]">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-start">
          <ButtonLink
            size="icon"
            url="/account"
            variant="icon"
            icon={<HiArrowLeft size={20} />}
            onClick={() => dispatch(clearCurrentOrder())}
          />
        </div>
        <div className="w-full flex flex-col gap-3 justify-between items-start">
          <div className="w-full flex justify-between">
            <span className="uppercase font-montserrat text-xs text-black tracking-widest ">
              {status}
            </span>
            <span className="uppercase font-montserrat text-xs text-black tracking-widest ">
              Order №{id}
            </span>
          </div>
          <span className="uppercase font-montserrat text-xs text-black tracking-widest ">
            {formattedDate}
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-6 pb-[102px]">
        {items?.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            title={item.title}
            backgroundImage={item.backgroundImage}
            clothesSize={item.clothesSize}
            price={item.price}
            color={item.color}
          />
        ))}
      </div>
      <span className="w-full border-[0.2px] bg-black"></span>
      <div className="w-full pt-[24px] pb-[102px]">
        <div className="w-[191px] h-fit gap-6 flex flex-col">
          <div className="w-full flex items-center gap-[36px]">
            <PiMapPin size={24} />
            <span className="w-full uppercase font-montserrat text-xs text-black tracking-widest">
              Shipping Address
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span>
              {country}, {city}
            </span>
            <span>
              {street} st. {homeNumber}
            </span>
            <span>+{phoneNumber}</span>
          </div>
        </div>
      </div>
      <span className="w-full border-[0.2px] bg-black"></span>
      <div className="w-full flex items-start">
        <div className="w-full h-fit gap-6 flex flex-col">
          <div className="w-[191px] flex items-center gap-[36px]">
            <PiCreditCard size={24} />
            <span className="w-full uppercase font-montserrat text-xs text-black tracking-widest">
              Payment
            </span>
          </div>
          <div className="sm:w-full lg:w-[734px] flex sm:flex-col sm:gap-3 md:gap-0 md:flex-row justify-between">
            <div className="w-[272px]">
              <Button
                variant={"outlined"}
                size={"full"}
                text="APPLE PAY"
                iconPosition="right"
                textPosition="between"
                icon={<FaApplePay size={64} />}
                rounded="full"
              />
            </div>
            <div className="w-[203px] flex flex-col gap-4">
              <p className="flex justify-between font-inter font-extralight text-[14px] leading-[17px]">
                Total
                <span className="font-montserrat text-[12px] leading-[15px]">
                  {totalItemsPrice}$
                </span>
              </p>
              <p className="flex justify-between font-inter font-extralight text-[14px] leading-[17px]">
                Delivery
                <span className="font-montserrat text-[12px] leading-[15px]">
                  {deliveryCost}$
                </span>
              </p>
              <p className="flex justify-between font-inter text-[14px] leading-[17px]">
                Sum
                <span className="font-montserrat text-[12px] leading-[15px]">
                  {totalItemsPrice + deliveryCost}$
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
