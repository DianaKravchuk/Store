/* eslint-disable react/display-name */
import classNames from "classnames";
import { forwardRef, useId } from "react";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...rest }, ref) => {
    const id = useId();
    const inputClassNames = classNames(
      "appearance-none cursor-pointer w-[18px] h-[18px] rounded-sm relative border-2 border-black border-solid",
      "checked:bg-black checked:before:absolute checked:before:content-[''] checked:before:bg-checked checked:before:bg-no-repeat checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:bg-cover checked:before:w-[12px] checked:before:h-[10px]",
    );
    return (
      <div className="flex gap-[6px] items-center">
        <div className="flex items-center justify-center py-[15px] px-[15px]">
          <input
            {...rest}
            id={id}
            type="checkbox"
            ref={ref}
            className={inputClassNames}
          />
        </div>
        {label && (
          <label
            htmlFor={id}
            className="font-inter text-sm font-extralight text-black leading-[17px] cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

export default Checkbox;
