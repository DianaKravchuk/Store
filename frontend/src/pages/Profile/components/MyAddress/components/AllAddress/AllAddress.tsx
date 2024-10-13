import Button from "@/Ui/Button/Button";
import { FC } from "react";
import UserAddress from "../UserAddress/UserAddress";
import { useAppSelector } from "@/redux/hooks";
import { userAddresses } from "@/redux/slices/userAddress";
import { AllAddressType } from "./types";

const AllAddress: FC<AllAddressType> = ({ showAddNewAddress }) => {
  const addresses = useAppSelector(userAddresses);
  return (
    <>
      <div className="w-full max-w-[390px] flex self-center md:self-end">
        <Button
          text="Add new address"
          size="full"
          variant="outlined"
          onClick={showAddNewAddress}
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:items-end">
        {addresses.map((address) => (
          <UserAddress key={address.id} address={address} />
        ))}
      </div>
    </>
  );
};

export default AllAddress;
