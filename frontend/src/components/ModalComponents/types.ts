import { ReactNode } from "react";

export interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
