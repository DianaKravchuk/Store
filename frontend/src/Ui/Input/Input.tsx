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
      "w-full rounded-3xl px-3 py-[9.2px] text-black-000 text-base font-extralight bg-transparent outline-1 outline-transparent outline border border-black-000 divide-x-[1px] transition-all duration-300",
      "disabled:border-grey-002 disabled:text-grey-002",
      {
        ["outline-red-error border-red-error focus:outline-red-error focus:border-red-error"]:
          errorMessage,
        "focus:border-dark-grey-hovered focus:outline-dark-grey-hovered":
          !errorMessage,
      },
    );

    return (
      <div className="flex flex-col relative w-full">
        <div className="relative w-full">
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
          <span className="absolute -bottom-3 left-3 font-inter text-red-error leading-3 text-[10px] font-extralight">
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

export default Input;
