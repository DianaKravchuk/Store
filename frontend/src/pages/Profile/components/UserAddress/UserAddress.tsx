import { useAppDispatch } from "@/redux/hooks";
import { deleteAddress } from "@/redux/slices/userAddress";
import Button from "@/Ui/Button/Button";
import { FC } from "react";
import { UserAddressType } from "./types";

const UserAddress: FC<UserAddressType> = ({
  address: { address, fullName, phone, id },
}) => {
  const dispatch = useAppDispatch();
  const handleEditAddress = () => console.log("Edit address id", id);
  const handleDeleteAddress = () => dispatch(deleteAddress(id));

  return (
    <div className="w-full m-w-[597px] py-3 px-6 bg-white rounded-3xl flex justify-between items-end">
      <div className="flex flex-col gap-7 max-w-[245px] py-[18px]">
        <p className="text-xs text-black-000 leading-4 uppercase font-montserrat font-normal tracking-widest">
          {fullName}
        </p>
        <p className="text-sm text-black-000 font-inter font-extralight leading-[17px]">
          {address}
        </p>
        <p className="text-sm text-black-000 font-inter font-extralight leading-[19px]">
          {phone}
        </p>
      </div>
      <div className="flex flex-col pr-1">
        <Button
          size="small"
          variant="text"
          text="Edit"
          textPosition="end"
          onClick={handleEditAddress}
        />
        <Button
          size="small"
          variant="text"
          text="Delete"
          textPosition="end"
          onClick={handleDeleteAddress}
        />
      </div>
    </div>
  );
};

export default UserAddress;
