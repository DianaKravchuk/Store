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
  ...props
}) => {
  const baseStyles =
    "flex items-center self-start font-inter rounded-3xl leading-[24px] tracking-[0.0072em] transition-all duration-300 group";

  const variantStyles = {
    outlined:
      "justify-center py-[9.2px] bg-transparent text-black-000 border-black-000 border hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed disabled:bg-transparent disabled:text-grey-002 disabled:border-grey-002",
    filled:
      "justify-center bg-black-000 text-white hover:bg-dark-grey-hovered hover:shadow-button-hover focus:bg-dark-grey-focused active:dark-grey-pressed disabled:bg-dark-grey-disabled disabled:text-grey-002 disabled:shadow-none",
    text: "justify-center bg-transparent text-black-000 hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed disabled:bg-transparent disabled:text-grey-002",
    textLeft:
      "justify-start bg-transparent text-black-000 hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed disabled:bg-transparent disabled:text-grey-002",
    icon: "rounded-full flex items-center justify-center bg-transparent hover:bg-light-grey-hovered focus:bg-light-grey-focused active:bg-light-color-pressed",
  };

  const sizeStyles = {
    small: "px-3 py-[2px] text-xs gap-x-[5px] max-h-[28px]",
    medium: "px-6 py-2.5 text-md gap-x-[12px]",
    icon: "px-[6px] py-[6px]",
    large: "",
    full: "w-full py-2.5 p-6 text-md gap-x-[12px]",
  };
  const position = {
    left: "flex-row",
    right: "flex-row-reverse",
  };

  const buttonClasses = classNames(
    baseStyles,
    sizeStyles[size],
    { [position[iconPosition]]: icon },
    variantStyles[variant],
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {icon && <>{icon}</>}
      {text && <>{text}</>}
    </button>
  );
};

export default Button;
