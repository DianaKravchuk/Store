import Button from "@/Ui/Button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const SETTINGS = [
  {
    id: 1,
    title: "Newsleter",
    description:
      "Please select your interests to receive the latest news and trends every week",
  },
  {
    id: 2,
    title: "language of communication",
    description:
      "Please select your preferred language to receive news and notifications.",
  },
  {
    id: 3,
    title: "Cookie settings",
    description: "Setting your privacy references",
  },
];
const Settings = () => {
  return (
    <div className="w-full pt-[35px]  md:pt-[110px] flex justify-end">
      <div className="w-full max-w-full md:max-w-[412px] lg:max-w-[clamp(412px,-308px+70.313vw,592px)] flex flex-col gap-3">
        {SETTINGS &&
          SETTINGS.map(({ description, id, title }) => (
            <div
              key={id}
              className="w-full bg-white min-h-[129px] md:min-h-[102px] rounded-3xl px-6 pt-[27px] md:pt-8 flex flex-row justify-between items-center  md:items-end"
            >
              <div className="flex flex-col gap-4 md:gap-3 xl:gap-5 pb-[5px] xl:pb-[14px]">
                <h3 className="font-montserrat text-xs text-black-000 uppercase tracking-widest">
                  {title}
                </h3>
                <p className="font-inter text-sm font-extralight text-black-000 leading-[19px]">
                  {description}
                </p>
              </div>
              <div className="pb-[5px] pl-1 self-end">
                <Button
                  size="icon"
                  variant="icon"
                  icon={<MdOutlineKeyboardArrowRight size={24} color="#000" />}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Settings;
