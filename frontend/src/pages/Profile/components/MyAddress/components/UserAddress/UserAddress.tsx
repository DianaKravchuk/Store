import { useAppDispatch } from "@/redux/hooks";
import { deleteAddress } from "@/redux/slices/userProfile";
import Button from "@/Ui/Button/Button";
import { FC, useState } from "react";
import { UserAddressType } from "./types";
import PopupComponent from "@/components/ModalComponents/ModalComponents";
import DeletePopup from "@/components/DeletePopup/DeletePopup";

const UserAddress: FC<UserAddressType> = ({
  address: { address, fullName, phone, id },
}) => {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEdit = () => console.log("Edit address id", id);
  const confirmDelete = () => dispatch(deleteAddress(id));

  return (
    <div className="w-full max-w-[412px] lg:max-w-[clamp(412px,-308px+70.313vw,592px)] xl:max-w-[597px] pt-3 pb-[10px] px-6 bg-white rounded-3xl flex justify-between items-end">
      <div className="flex flex-col gap-7 w-full pt-[18px]">
        <p className="text-xs text-black-000 leading-4 uppercase font-montserrat font-normal tracking-widest md:max-w-[245px]">
          {fullName}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-black-000 font-inter font-extralight leading-[17px] md:max-w-[245px]">
            {address}
          </p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm text-black-000 font-inter font-extralight leading-[19px]">
              {phone}
            </p>
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
                description="Are you sure you want to delete the selected address?"
                title="Delete address"
              />
            </PopupComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
