import { ReactNode } from "react";

export type Variant = "textLeft" | "outlined" | "filled" | "text" | "icon";
export type Sizes = "small" | "medium" | "large" | "full" | "icon";
export type Position = "left" | "right";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text?: string;
  icon?: ReactNode;
  iconPosition?: Position;
}
