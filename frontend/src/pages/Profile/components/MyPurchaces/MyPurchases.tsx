import { useState } from "react";
import AllPurchases from "./components/AllPurchases/AllPurchases";
import NewPurchasesForm from "./components/NewPurchasesForm/NewPurchasesForm";

const MyPurchases = () => {
  const [isShowNewPurchases, setIsShowNewPurchases] = useState(false);
  const showAddNewPurchases = () => setIsShowNewPurchases(true);
  const closeAddNewPurchases = () => setIsShowNewPurchases(false);

  return (
    <>
      {!isShowNewPurchases ? (
        <AllPurchases showAddNewPurchases={showAddNewPurchases} />
      ) : (
        <NewPurchasesForm onClose={closeAddNewPurchases} />
      )}
    </>
  );
};

export default MyPurchases;
