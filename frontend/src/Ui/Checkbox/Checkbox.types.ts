import { ComponentPropsWithoutRef } from "react";

export interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  variant?: "radio" | "checkbox";
}
