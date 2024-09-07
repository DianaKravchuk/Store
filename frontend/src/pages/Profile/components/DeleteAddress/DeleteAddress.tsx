import Button from "@/Ui/Button/Button";
import { IoCloseCircleOutline } from "react-icons/io5";

const DeleteAddress = () => {
  const onDelete = () => console.log("delete");
  const onClose = () => console.log("close");

  return (
    <section className="flex flex-col items-center gap-9 rounded-3xl relative py-20 px-20 bg-white w-[496px]">
      <h3 className="font-inter text-lg leading-[22px] text-black-000">
        Delete address
      </h3>
      <p className="w-full max-w-[210px] text-center font-inter text-black-000 test-sm leading-[17px] font-extralight tracking-tighter">
        Are you sure you want to delete the selected address?
      </p>
      <div className="flex gap-4 w-full">
        <Button size="medium" variant="filled" text="Yes" onClick={onDelete} />
        <Button size="medium" variant="filled" text="No" onClick={onClose} />
      </div>
      <div className="absolute top-3 right-3">
        <Button
          size="icon"
          variant="icon"
          onClick={onClose}
          icon={<IoCloseCircleOutline size={24} />}
        />
      </div>
    </section>
  );
};

export default DeleteAddress;
