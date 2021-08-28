import styled from "@emotion/styled";

interface InterfaceStyledModal {
  visible?: boolean;
}

interface ModalInnerInterfaces {
  width?: string;
}

export const ModalWrapper = styled.div<InterfaceStyledModal>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div<InterfaceStyledModal>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  transition: ease-in-out 0.2s;
`;

export const ModalInner = styled.div<ModalInnerInterfaces>`
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width || "360px"};
  @media (max-width: 768px) {
    width: 80%;
  }
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .modal-content {
    padding: 1.5rem;
  }
  .modal-utils {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    .util-button {
      cursor: pointer;
      border: none;
      border-radius: 10px;
      width: 80px;
      padding: 0.5rem 0;
    }
    .close {
      background: #dde9fc;
      color: #4592fc;
    }
  }
`;
