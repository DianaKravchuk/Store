import type { FC } from "react";
import { ButtonProps } from "./Button.types";
import classNames from "classnames";

const Button: FC<ButtonProps> = ({
  variant,
  size,
  className,
  text,
  icon,
  iconPosition = "left",
  textPosition = "center",
  ...props
}) => {
  const baseStyles =
    "flex items-center self-start text-nowrap font-inter rounded-3xl leading-[24px] tracking-[0.0072em] transition-all duration-300 group";

  const variantStyles = {
    outlined:
      "py-[9.2px] bg-transparent text-black-000 border-black-000 border hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed disabled:bg-transparent disabled:text-grey-002 disabled:border-grey-002",
    filled:
      "bg-black-000 text-white hover:bg-dark-grey-hovered hover:shadow-button-hover focus:bg-dark-grey-focused active:dark-grey-pressed disabled:bg-dark-grey-disabled disabled:text-grey-002 disabled:shadow-none",
    text: "bg-transparent text-black-000 hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed disabled:bg-transparent disabled:text-grey-002",
    icon: "rounded-full flex items-center justify-center bg-transparent hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed",
  };

  const sizeStyles = {
    small: "px-3 py-[2px] text-xs gap-x-[5px] max-h-[28px] w-[116px]",
    medium: "px-6 py-2.5 text-md gap-x-[12px] w-full max-w-[160px]",
    icon: "px-[6px] py-[6px] justify-center",
    large: "",
    full: "w-full py-2.5 p-6 text-md gap-x-[12px]",
  };

  const contentClasses = classNames("flex items-center gap-3", {
    "flex-row-reverse": iconPosition === "right",
    "justify-between w-full": textPosition === "between",
  });

  const buttonClasses = classNames(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    textPosition !== "between" && `justify-${textPosition}`,
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      <div className={contentClasses}>
        {icon && <>{icon}</>}
        {text && <span>{text}</span>}
      </div>
    </button>
  );
};

export default Button;
