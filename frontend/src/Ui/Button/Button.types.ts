import { ReactNode } from "react";

export type Variant = "primary" | "secondary" | "secondaryLeft" | "tertiary";
export type Sizes = "s" | "m" | "l" | "full";
export type Position = "left" | "right";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text: string;
  icon?: ReactNode;
  iconPosition?: Position;
}
