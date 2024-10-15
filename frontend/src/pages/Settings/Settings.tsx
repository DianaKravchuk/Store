import PopupComponent from "@/components/ModalComponents/ModalComponents";
import Button from "@/Ui/Button/Button";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LanguagePopup from "./components/LanguagePopup/LanguagePopup";
import { SETTINGS } from "./data";
import { SettingFunctionKeys } from "./components/LanguagePopup/types";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const newsleterClick = () => console.log("Newsleter click");

  const settingsFunction: Record<SettingFunctionKeys, () => void> = {
    newsleter: newsleterClick,
    languages: onOpen,
  };
  return (
    <>
      <div className="w-full pt-[35px]  md:pt-[110px] flex justify-center md:justify-end">
        <div className="w-full max-w-[412px] lg:max-w-[clamp(412px,-308px+70.313vw,592px)] flex flex-col gap-3">
          {SETTINGS &&
            SETTINGS.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white rounded-3xl min-h-[129px] md:min-h-[112px] xl:min-h-[102px] px-6 pt-3 flex flex-row justify-between"
              >
                <div className="flex flex-col justify-between pb-3 xl:justify-normal xl:gap-[2px] 2xl:gap-1">
                  <div className="h-[54px] flex justify-start items-center">
                    <h3 className="font-montserrat text-xs text-black-000 uppercase tracking-widest">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-inter text-sm font-extralight text-black-000 -tracking-[0.022em] leading-[17px] xl:tracking-normal">
                    {item.description}
                  </p>
                </div>
                <div className="pb-[5px] pl-1 self-end">
                  <Button
                    size="icon"
                    variant="icon"
                    icon={
                      <MdOutlineKeyboardArrowRight size={24} color="#000" />
                    }
                    onClick={settingsFunction[item.function]}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <PopupComponent onClose={onClose} open={isOpen}>
        <LanguagePopup onClose={onClose} />
      </PopupComponent>
    </>
  );
};

export default Settings;
