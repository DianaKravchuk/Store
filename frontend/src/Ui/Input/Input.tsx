/* eslint-disable react/display-name */
import {
  IoEyeOutline,
  IoCloseCircleOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import classNames from "classnames";
import { forwardRef, useState } from "react";

import { type InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, resetField, ...rest }, ref) => {
    const [type, setType] = useState<boolean>(rest.type === "password");

    const handleShowPassword = () => setType(!type);
    const handleResetValue = () => resetField && resetField();

    const inputType = rest.type === "password" && type ? "password" : "text";
    const isShowReset = rest.type !== "password" && !errorMessage && resetField;
    const isShowError = errorMessage && rest.type !== "password";

    const inputClassName = classNames(
      "w-[390px] rounded-3xl px-3 py-[9.2px] text-black text-[16px] leading-[24px] font-extralight bg-transparent outline-1 outline-transparent outline border border-black divide-x-[1px] transition-all duration-300",
      "disabled:border-[#59595a] disabled:text-[#59595a]",
      "focus:border-[#474744] focus:outline-[#474744]",
      {
        ["outline-red-500 border-red-500 focus:outline-red-500 focus:border-red-500"]:
          errorMessage,
      },
    );
    return (
      <div className="flex flex-col relative">
        <div className="relative">
          <input
            {...rest}
            ref={ref}
            type={inputType}
            className={inputClassName}
          />
          {rest.type === "password" && (
            <button
              type="button"
              disabled={rest.disabled}
              className="absolute flex items-center justify-center top-2.5 right-3"
              onClick={handleShowPassword}
            >
              {!type ? (
                <IoEyeOutline size={24} />
              ) : (
                <IoEyeOffOutline size={24} />
              )}
            </button>
          )}
          {isShowReset && (
            <button
              type="button"
              className="absolute flex items-center justify-center top-2.5 right-3 py-[3px] px-[3px]"
              onClick={handleResetValue}
            >
              <IoCloseCircleOutline size={18} />
            </button>
          )}
          {isShowError && (
            <button
              type="button"
              className="absolute flex items-center justify-center top-2.5 right-3 py-[3px] px-[3px]"
            >
              <RiErrorWarningFill color="red" size={18} />
            </button>
          )}
        </div>
        {!!errorMessage && (
          <span className="absolute -bottom-6 left-2 text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

export default Input;
