import Button from "@/Ui/Button/Button";
import { FC } from "react";
import { useAppSelector } from "@/redux/hooks";
import { AllPurchasesType } from "./types";
import { userProfile } from "@/redux/slices/userProfile";
import UserPurchases from "../UserPurchases/UserPurchases";

const AllPurchases: FC<AllPurchasesType> = ({ showAddNewPurchases }) => {
  const { payment } = useAppSelector(userProfile);
  return (
    <>
      <div className="w-full max-w-[390px] flex self-center md:self-end">
        <Button
          text="Add new payment"
          size="full"
          variant="outlined"
          onClick={showAddNewPurchases}
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:items-end">
        {payment.map((payment) => (
          <UserPurchases key={payment.id} payment={payment} />
        ))}
      </div>
    </>
  );
};

export default AllPurchases;
