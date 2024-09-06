import { ReactNode } from "react";

export type Variant = "outlined" | "filled" | "text" | "icon";
export type Sizes = "small" | "medium" | "large" | "full" | "icon";
export type IconPosition = "left" | "right" | "center";
export type TextPosition = "start" | "end" | "center" | "between";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  textPosition?: TextPosition;
}
