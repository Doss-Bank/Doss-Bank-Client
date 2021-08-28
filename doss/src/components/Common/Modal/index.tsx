import { FC, useEffect } from "react";
import Portal from "../Portal";
import { ModalInner, ModalOverlay, ModalWrapper } from "./ModalStyle";

interface InterfaceModalProps {
  className?: string;
  visible: boolean;
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
  closable?: boolean;
  maskClosable?: boolean;
  closeComment?: string;
  width?: string;
}

const Modal: FC<InterfaceModalProps> = ({
  visible,
  children,
  className,
  closable,
  handleClose,
  maskClosable,
  closeComment,
  width,
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

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        tabIndex={-1}
        visible={visible}
        onClick={maskClosable ? onMaskClick : undefined}
      >
        <ModalInner width={width}>
          <div className="modal-content">{children}</div>
          {closable && (
            <footer className="modal-utils">
              <button className="util-button close" onClick={close}>
                {closeComment}
              </button>
            </footer>
          )}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

Modal.defaultProps = {
  closeComment: "닫기",
};

export default Modal;
