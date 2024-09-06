import { FC } from "react";

import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import Button from "@/Ui/Button/Button";

import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slices/userSlice";
import { PROFILE_BUTTON } from "./data";

const ProfileMenu: FC = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => dispatch(logout());
  const handleDeleteAccount = () => console.log("Account delete");

  return (
    <div className="w-[328px] flex flex-col gap-3 pt-12">
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
          onClick={handleLogOut}
        />
        <Button
          text="Delete account"
          size="small"
          variant="text"
          type="button"
          onClick={handleDeleteAccount}
        />
      </div>
    </div>
  );
};

export default ProfileMenu;
