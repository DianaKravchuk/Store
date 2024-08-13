import { FC } from "react";
import { ADVANTAGES_CARDS } from "./constants";
import AdvantagesCard from "../../components/AdvantagesCard/AdvantagesCard";

const Advantages: FC = () => {
  return (
    <div className="w-[1040px] flex flex-col gap-[36px]">
      <h2 className="font-inter font-bold text-[24px] uppercase tracking-wide text-center leading-[29px]">
        Why we best
      </h2>
      <div className="flex gap-6">
        {ADVANTAGES_CARDS.map((card) => (
          <AdvantagesCard key={card.id} title={card.title} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
