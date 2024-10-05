import { FC } from "react";
import { GoArrowRight } from "react-icons/go";

import ProductCard from "@components/ProductCard/ProductCard";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { ProductSectionProps } from "./types";

const ProductSection: FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <section className="container flex flex-col gap-9">
      <h3 className="font-inter uppercase text-center text-black-000 font-bold text-2xl leading-[29px]">
        {title}
      </h3>
      <div className="grid  grid-cols-1 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-2 lg:max-xl:max-w-[680px] lg:m-auto xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <div className="w-fit self-end lg:max-xl:pr-[86px]">
        <ButtonLink
          size="small"
          url="/catalog"
          text="See more"
          variant="text"
          iconPosition="right"
          icon={
            <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
              <GoArrowRight width={15} height={13} color="black" />
            </span>
          }
        />
      </div>
    </section>
  );
};

export default ProductSection;
