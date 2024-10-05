import { FC } from "react";
import { ADVANTAGES_CARDS } from "./data";
import AdvantagesCard from "./AdvantagesCard/AdvantagesCard";

const Advantages: FC = () => {
  return (
    <div className="container flex flex-col gap-9">
      <h2 className="font-inter font-bold text-[24px] uppercase tracking-wide text-center leading-[29px]">
        Why we best
      </h2>
      <div className="grid grid-cols-1 gap-6 md:max-xl:grid-cols-2 lg:max-xl:gap-x-[30px] xl:grid-cols-3">
        {ADVANTAGES_CARDS.map(({ icon, id, size, title }) => (
          <AdvantagesCard key={id} title={title} size={size} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
