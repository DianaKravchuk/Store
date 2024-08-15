import type { FC } from "react";

import { ButtonProps } from "./Button.types";
import classNames from "classnames";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "m",
  className,
  text,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const baseStyles =
    "flex items-center rounded-3xl leading-[24px] transition-all duration-300 group";

  const variantStyles = {
    primary:
      "bg-black text-white focus:bg-[#181818] hover:bg-[#474747] active:bg-[#575757] disabled:bg-[#8b8b8b] disabled:text-[#59595a] justify-center",
    secondary:
      "bg-transparent text-black focus:bg-[#a3a3a4] hover:bg-[#9e9e9f] active:bg-[#a3a3a4] disabled:bg-transparent disabled:text-[#616062] justify-center",
    secondaryLeft:
      "bg-transparent text-black focus:bg-[#a3a3a4] hover:bg-[#9e9e9f] active:bg-[#a3a3a4] disabled:bg-transparent disabled:text-[#616062] justify-start",
    tertiary:
      "bg-transparent text-black border-black border focus:bg-[#a3a3a4] hover:bg-[#9e9e9f] active:bg-[#a3a3a4] disabled:bg-transparent disabled:text-[#616062] disabled:border-[#616062] justify-center py-[9.2px]",
  };

  const sizeStyles = {
    s: "px-3 py-[2px] text-xs gap-x-[5px] max-h-[28px]",
    m: "px-6 py-2.5 text-md gap-x-[12px]",
    l: "",
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
