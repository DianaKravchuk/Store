import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import shirt from "./TemporaryCardImage/shirt.png";

const NewCollection: React.FC = () => {
  return (
    <div className="w-[1040px]">
      <ProductCard
        id={1}
        title="Men`s t-shirt"
        price={25}
        size={"small"}
        backgroundImage={shirt}
      />
    </div>
  );
};

export default NewCollection;
