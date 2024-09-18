import Button from "@/Ui/Button/Button";
import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { DeleteAddressProps } from "./types";

const DeleteAddress: FC<DeleteAddressProps> = ({ onClose, onDelete }) => {
  return (
    <section className="flex flex-col items-center gap-9 rounded-3xl relative py-20 px-20 bg-white w-[496px]">
      <h3 className="font-inter text-lg leading-[22px] text-black-000">
        Delete address
      </h3>
      <p className="w-full max-w-[210px] text-center font-inter text-black-000 test-sm leading-[17px] font-extralight tracking-tighter">
        Are you sure you want to delete the selected address?
      </p>
      <div className="flex gap-4 w-full">
        <Button
          size="medium"
          variant="filled"
          type="button"
          text="Yes"
          onClick={onDelete}
        />
        <Button
          size="medium"
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

export default DeleteAddress;
