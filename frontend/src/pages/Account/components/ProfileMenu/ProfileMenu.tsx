import { FC, useState } from "react";

import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import Button from "@/Ui/Button/Button";

import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slices/userSlice";
import { PROFILE_BUTTON } from "./data";
import PopupComponent from "@/components/ModalComponents/ModalComponents";
import DeletePopup from "@/components/DeletePopup/DeletePopup";
import { useNavigate } from "react-router";

const ProfileMenu: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogOut = () => dispatch(logout());
  const confirmDelete = () => {
    handleLogOut();
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        {PROFILE_BUTTON &&
          PROFILE_BUTTON.map((button) => (
            <ButtonLink
              key={button.id}
              text={button.text}
              size="full"
              type="button"
              url={button.url}
              variant="text"
              textPosition="start"
            />
          ))}
      </div>
      <div className="flex flex-col gap-[5px]">
        <Button
          text="Log out"
          size="small"
          variant="text"
          type="button"
          textPosition="start"
          onClick={handleLogOut}
        />
        <Button
          text="Delete account"
          size="small"
          variant="text"
          type="button"
          textPosition="start"
          onClick={openModal}
        />
      </div>
      <PopupComponent onClose={closeModal} open={isModalOpen}>
        <DeletePopup
          onClose={closeModal}
          onDelete={confirmDelete}
          description="Are you sure you want to delete account?"
          title="Delete account"
        />
      </PopupComponent>
    </div>
  );
};

export default ProfileMenu;
