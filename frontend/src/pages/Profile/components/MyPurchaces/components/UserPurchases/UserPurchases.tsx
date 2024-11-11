import { useAppDispatch } from "@/redux/hooks";
import { deletePayment } from "@/redux/slices/userProfile";
import Button from "@/Ui/Button/Button";
import { FC, useState } from "react";
import { UserPurchasesType } from "./types";
import PopupComponent from "@/components/ModalComponents/ModalComponents";
import Checkbox from "@/Ui/Checkbox/Checkbox";
import visa from "@assets/icons/visa.svg";
import DeletePopup from "@/components/DeletePopup/DeletePopup";

const UserPurchases: FC<UserPurchasesType> = ({
  payment: { id, cardsNumber, fullName, isDefault },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEdit = () => console.log("Edit address id", id);
  const confirmDelete = () => dispatch(deletePayment(id));

  return (
    <div className="w-full max-w-[412px] lg:max-w-[clamp(412px,-308px+70.313vw,592px)] xl:max-w-[597px] pt-3 pb-[10px] px-6 bg-white rounded-3xl flex justify-between items-end">
      <div className="flex flex-col w-full pt-[19px]">
        <div className="pt-[1px] flex flex-col gap-3">
          <img src={visa} alt="visa icon" width={36} height={12} />
          <div className="pt-[1px] flex flex-col gap-2">
            <p className="text-xs text-black-000 leading-4 font-montserrat font-normal tracking-wide md:max-w-[245px]">
              {fullName}
            </p>
            <p className="text-sm text-black-000 font-inter font-extralight leading-[17px] md:max-w-[245px]">
              {`**** **** **** ${cardsNumber.slice(14, 19)}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div className="self-start pt-3">
              <Checkbox
                label="Use as default"
                variant="radio"
                checked={isDefault}
              />
            </div>
            <div>
              <Button
                size="small"
                variant="text"
                text="Edit"
                textPosition="end"
                onClick={handleEdit}
              />
              <Button
                size="small"
                variant="text"
                text="Delete"
                textPosition="end"
                onClick={openModal}
              />
            </div>
            <PopupComponent onClose={closeModal} open={isModalOpen}>
              <DeletePopup
                onClose={closeModal}
                onDelete={confirmDelete}
                description="Are you sure you want to delete the selected payment?"
                title="Delete payment"
              />
            </PopupComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPurchases;
