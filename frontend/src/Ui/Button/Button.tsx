import type { FC } from "react";

import { ButtonProps } from "./Button.types";
import classNames from "classnames";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "m",
  className,
  text,
  children,
  iconPosition = "left",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center gap-[15px] rounded-3xl leading-6";

  const variantStyles = {
    primary:
      "bg-black text-white focus:bg-[#181818] hover:bg-[#474747] disabled:bg-[#8b8b8b] disabled:text-[#59595a]",
    secondary: "",
    tertiary: "",
  };

  const sizeStyles = {
    s: "px-3 py-[2px] text-xs",
    m: "px-6 py-2.5 text-md",
    l: "",
    full: "w-full py-2.5 text-md",
  };
  const position = {
    left: "flex-row",
    right: "flex-row-reverse",
  };

  const buttonClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    { [position[iconPosition]]: children },
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {children && <>{children}</>}
      {text && <>{text}</>}
    </button>
  );
};

export default Button;
