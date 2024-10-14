import { useState } from "react";
import Email from "./components/Email/Email";
import EditEmailForm from "./components/EditEmailForm/EditEmailForm";

const MyEmail = () => {
  const [isShowEditEmail, setIsShowEditEmail] = useState(false);
  const showEditEmail = () => setIsShowEditEmail(true);
  const closeEditEmail = () => setIsShowEditEmail(false);

  return (
    <>
      {isShowEditEmail ? (
        <EditEmailForm onClose={closeEditEmail} />
      ) : (
        <Email onEdit={showEditEmail} />
      )}
    </>
  );
};

export default MyEmail;
