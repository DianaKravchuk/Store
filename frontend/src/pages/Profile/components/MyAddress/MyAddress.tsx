import { useState } from "react";
import AllAddress from "../AllAddress/AllAddress";
import NewAddressForm from "../NewAddressForm/NewAddressForm";

const MyAddress = () => {
  const [isShowNewAddress, setIsShowNewAddress] = useState(false);
  const showAddNewAddress = () => setIsShowNewAddress(true);
  const closeAddNewAddress = () => setIsShowNewAddress(false);

  return (
    <>
      {!isShowNewAddress ? (
        <AllAddress showAddNewAddress={showAddNewAddress} />
      ) : (
        <NewAddressForm onClose={closeAddNewAddress} />
      )}
    </>
  );
};

export default MyAddress;
