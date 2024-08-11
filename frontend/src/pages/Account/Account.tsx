import React from "react";
import Header from "../../modules/Header";
import Registration from "../../modules/Registration";

const Account: React.FC = () => {
  return (
    <div className="w-screen h-fit flex flex-col items-center">
      <Header />
      <Registration />
    </div>
  );
};

export default Account;
