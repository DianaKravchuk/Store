import React from "react";
import Banner from "./components/Banner";

const Banners: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center mb-[200px]">
      <Banner outlineText="Summer" filledText="Sale" salePercent={60} />
    </div>
  );
};

export default Banners;
