import { FC } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { PopupProps } from "./types";

const PopupComponent: FC<PopupProps> = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      closeOnOverlayClick
      showCloseIcon={false}
      focusTrapped={false}
      classNames={{ modal: "bg-transparent shadow-none" }}
    >
      <div>{children}</div>
    </Modal>
  );
};

export default PopupComponent;
