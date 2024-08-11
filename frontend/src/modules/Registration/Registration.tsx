import React from "react";
import LoginForm from "./components/LoginForm";

const Registration: React.FC = () => {
  return (
    <div className="w-full flex gap-6">
      <div className="w-[717px] h-[664px] rounded-tr-[25px] bg-[#CCCCCC]"></div>
      <LoginForm />
    </div>
  );
};

export default Registration;
