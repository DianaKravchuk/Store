import { ReactNode } from "react";

export interface MenuComponentProps {
  control: ReactNode;
  className?: string;
  renderItem: (closeMenu: () => void, isOpen: boolean) => ReactNode;
}
