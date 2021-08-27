import { FC } from "react";
import { ModalInner, ModalOverlay, ModalWrapper } from "./ModalStyle";

interface InterfaceModalProps {
  className?: string;
  visible: boolean;
}

const Modal: FC<InterfaceModalProps> = ({ visible, children, className }) => {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex={-1} visible={visible}>
        <ModalInner>{children}</ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
