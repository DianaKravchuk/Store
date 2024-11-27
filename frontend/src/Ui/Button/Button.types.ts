import { ReactNode } from "react";

export type Variant =
  | "outlined"
  | "filled"
  | "text"
  | "icon"
  | "pagination"
  | "pagination-active";

export type Sizes =
  | "small"
  | "medium"
  | "large"
  | "full"
  | "icon"
  | "pagination";

export type IconPosition = "left" | "right" | "center";
export type TextPosition = "start" | "end" | "center" | "between";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text?: string;
  icon?: ReactNode;
  isActive?: boolean;
  iconPosition?: IconPosition;
  textPosition?: TextPosition;
}
