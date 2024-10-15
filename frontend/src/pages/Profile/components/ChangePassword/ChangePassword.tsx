import { useState } from "react";
import EditPasswordForm from "./components/EditPasswordForm/EditPasswordForm";
import Password from "./components/Password/Password";

const ChangePassword = () => {
  const [isShowEditPassword, setIsShowEditPassword] = useState(false);
  const showEditPassword = () => setIsShowEditPassword(true);
  const closeEditPassword = () => setIsShowEditPassword(false);

  return (
    <>
      {isShowEditPassword ? (
        <EditPasswordForm onClose={closeEditPassword} />
      ) : (
        <Password onEdit={showEditPassword} />
      )}
    </>
  );
};

export default ChangePassword;
