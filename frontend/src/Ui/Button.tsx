import React from "react";
import { HiArrowRight } from "react-icons/hi2";

interface ButtonProps {
  text: string;
  size: "small" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, size }) => {
  const sizeClass = size === "large" ? "w-[390px]" : "w-[124px]";

  return (
    <button
      className={`flex items-center justify-center font-inter font-normal text-[16px] leading-6 gap-3 py-[10px] px-[48px] bg-black text-white rounded-full ${sizeClass}`}
    >
      {text}
      <div className="size-6 rounded-full bg-white flex items-center justify-center">
        <HiArrowRight color="black" />
      </div>
    </button>
  );
};

export default Button;
