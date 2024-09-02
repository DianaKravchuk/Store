import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import shirt from "./TemporaryCardImage/shirt.png";

const SaleProducts: React.FC = () => {
  const testProducts = [
    {
      id: 1,
      title: "Men`s t-shirt",
      price: 25,
      backgroundImage: shirt,
      priceBeforeSale: 45,
    },
    {
      id: 2,
      title: "Men`s t-shirt",
      price: 25,
      backgroundImage: shirt,
      priceBeforeSale: 45,
    },
  ];
  return (
    <div className="w-[1040px] flex flex-col gap-9">
      <span className="font-inter font-bold text-[24px] text-center leading-[29px]">
        SALE
      </span>
      <div className="flex gap-6">
        <ProductCard
          id={2}
          title="Female shirt"
          price={25}
          size={"large"}
          backgroundImage={shirt}
          priceBeforeSale={45}
          isPreview={false}
        />
        <div className="flex flex-col gap-6">
          {testProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              size={"small"}
              backgroundImage={item.backgroundImage}
              priceBeforeSale={item.priceBeforeSale}
              isPreview={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
