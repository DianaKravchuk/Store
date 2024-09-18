import { useState } from "react";
import AllAddress from "./components/AllAddress/AllAddress";
import NewAddressForm from "./components/NewAddressForm/NewAddressForm";

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
