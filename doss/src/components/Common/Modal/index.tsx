import { FC } from "react";
import { ModalInner, ModalOverlay, ModalWrapper } from "./ModalStyle";

interface InterfaceModalProps {
  className?: string;
  visible: boolean;
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
  closable?: boolean;
  maskClosable?: boolean;
}

const Modal: FC<InterfaceModalProps> = ({
  visible,
  children,
  className,
  closable,
  handleClose,
  maskClosable,
}) => {
  const onMaskClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      handleClose!(e);
    }
  };

  const close = (e: React.MouseEvent<HTMLElement>) => {
    if (handleClose) {
      handleClose(e);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        tabIndex={-1}
        visible={visible}
        onClick={maskClosable ? onMaskClick : undefined}
      >
        <ModalInner>
          {closable && (
            <button className="modal-close" onClick={close}>
              X
            </button>
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
