import Button from "@/Ui/Button/Button";
import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { DeletePopupProps } from "./types";

const DeletePopup: FC<DeletePopupProps> = ({
  onClose,
  onDelete,
  description,
  title,
}) => {
  const isMobile = window.innerWidth < 768;

  return (
    <section className="flex flex-col items-center gap-9 rounded-3xl relative py-10 px-5 md:py-20 md:px-20 bg-white w-[296px] md:w-[496px]">
      <h3 className="font-inter text-lg leading-[22px] text-black-000">
        {title}
      </h3>
      <p className="w-full max-w-[210px] text-center font-inter text-black-000 test-sm leading-[17px] font-extralight tracking-tighter">
        {description}
      </p>
      <div className="flex gap-4 w-full">
        <Button
          size={isMobile ? "small" : "medium"}
          variant="filled"
          type="button"
          text="Yes"
          onClick={onDelete}
        />
        <Button
          size={isMobile ? "small" : "medium"}
          variant="filled"
          type="button"
          text="No"
          onClick={onClose}
        />
      </div>
      <div className="absolute top-3 right-3">
        <Button
          size="icon"
          variant="icon"
          onClick={onClose}
          type="button"
          icon={<IoCloseCircleOutline size={24} />}
        />
      </div>
    </section>
  );
};

export default DeletePopup;
