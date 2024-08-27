import React from "react";
import backgroundImage from "./TemporaryBg/registrationBackground.png";
import LoginForm from "./components/LoginForm";

const Registration: React.FC = () => {
  return (
    <div className="w-screen h-[728px] flex justify-between gap-6">
      <img
        src={backgroundImage}
        alt=""
        className="bg-cover w-[717px] h-[832px] z-1 absolute top-0"
      />
      <LoginForm />
    </div>
  );
};

export default Registration;
