/* eslint-disable react/display-name */
import classNames from "classnames";
import { forwardRef, useId } from "react";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, variant = "checkbox", ...rest }, ref) => {
    const id = useId();
    const checkboxVariant = {
      radio:
        "appearance-none cursor-pointer w-[18px] h-[18px] rounded-full relative border-2 border-black border-solid checked: checked:before:absolute checked:before:content-[''] checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:bg-black checked:before:rounded-full checked:before:w-[10px] checked:before:h-[10px]",
      checkbox:
        "appearance-none cursor-pointer w-[18px] h-[18px] rounded-sm relative border-2 border-black border-solid checked:bg-black checked:before:absolute checked:before:content-[''] checked:before:bg-checked checked:before:bg-no-repeat checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:bg-cover checked:before:w-[12px] checked:before:h-[10px]",
    };
    const gap = {
      radio: "gap-[11px]",
      checkbox: "gap-[6px]",
    };
    const wrapperCL = classNames("flex items-center", {
      [gap[variant]]: variant,
    });
    const container = {
      radio: "p-[3px]",
      checkbox: "p-[15px]",
    };
    const containerCL = classNames("flex items-center justify-center", {
      [container[variant]]: variant,
    });
    const inputClassNames = classNames(checkboxVariant[variant]);
    return (
      <div className={wrapperCL}>
        <div className={containerCL}>
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
