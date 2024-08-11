import React from "react";
import BigProductCard from "../../Ui/BigProductCard";
import SmallProductCard from "../../Ui/SmallProductCard";

const SaleProducts: React.FC = () => {
  const testProducts = [
    {
      id: 1,
      title: "Female Shirt",
      price: 25,
    },
    {
      id: 2,
      title: "Female Shirt",
      price: 25,
    },
  ];
  return (
    <div className="w-[1040px] flex flex-col gap-9">
      <span className="font-inter font-bold text-[24px] text-center leading-[29px]">
        SALE
      </span>
      <div className="flex gap-6">
        <BigProductCard id={2} title="Female shirt" price={25} />
        <div className="flex flex-col gap-6">
          {testProducts.map((item) => (
            <SmallProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
