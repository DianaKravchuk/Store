export type Variant = "primary" | "secondary" | "tertiary";
export type Sizes = "s" | "m" | "l" | "full";
export type Position = "left" | "right";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text: string;
  iconPosition?: Position;
}
