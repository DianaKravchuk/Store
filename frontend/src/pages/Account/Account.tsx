import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slices/userSlice";
import Button from "@/Ui/Button/Button";
import { FC } from "react";

const Account: FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <section className="pt-[150px] h-svh">
      <Button
        size="medium"
        variant="filled"
        text="Log out"
        onClick={handleLogout}
      />
      <p>Account Page</p>
    </section>
  );
};

export default Account;
