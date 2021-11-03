import React from "react";
import * as Styles from "./styles";
import { IPropsModal } from "./types";
import { IoIosClose } from "react-icons/io";

const Modal: React.FC<IPropsModal> = ({ isOpen, onClose, children }) => {
  return (
    <Styles.backgroundModal isOpen={isOpen}>
      <Styles.Modal>
        <IoIosClose onClick={onClose} />
        {children}
      </Styles.Modal>
    </Styles.backgroundModal>
  );
};

export default Modal;
