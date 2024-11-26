import { ReactNode } from "react";

export interface MenuComponentProps {
  renderControl: (onClose: () => void, isOpen: boolean) => ReactNode;
  className: string;
  renderItem: (onClose: () => void, isOpen: boolean) => ReactNode;
}
