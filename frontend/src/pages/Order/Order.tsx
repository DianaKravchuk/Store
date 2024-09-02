import { FC } from "react";
import { OrderProps } from "../Account/components/OrderPreview/types";

const formatDate = (date: Date) => {
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  return `${dayOfWeek} ${day} ${month}`;
};

const Order: FC<OrderProps> = ({ id, status, date }) => {
  const formattedDate = formatDate(date ? new Date(date) : new Date());
  return (
    <div className="max-w-[1040px] h-full flex items-center justify-center overflow-hidden mt-[168px] mb-[200px]">
      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="uppercase font-montserrat text-xs text-black tracking-widest ">
            {status}
          </h2>
          <h2 className="uppercase font-montserrat text-xs text-black tracking-widest ">
            {formattedDate}
          </h2>
        </div>
        <h2 className="uppercase font-montserrat text-xs text-black tracking-widest ">
          {id}
        </h2>
      </div>
    </div>
  );
};

export default Order;
