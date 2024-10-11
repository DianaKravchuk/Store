import { ReactNode } from "react";
import { ADVANTAGES_SIZE } from "../data";

export interface CardProps {
  title: string;
  icon: ReactNode;
  size: ADVANTAGES_SIZE;
}
