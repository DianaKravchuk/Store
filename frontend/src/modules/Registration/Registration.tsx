import React from "react";
import AfterSingUpComponent from "./components/AfterSingUpComponent";
import backgroundImage from "./TemporaryBg/registrationBackground.png";

const Registration: React.FC = () => {
  return (
    <div className="w-full flex gap-6">
      <img
        src={backgroundImage}
        alt=""
        className="absolute top-0 bg-cover w-[717px] h-[832px]"
      />
      <AfterSingUpComponent />
    </div>
  );
};

export default Registration;
