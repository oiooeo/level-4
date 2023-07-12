import { styled } from "styled-components";
import { createPortal } from "react-dom";

export const PORTAL_MODAL = "modal";

function Modal({ isModalOpen, setIsModalOpen, children }) {
  return isModalOpen
    ? createPortal(
        <Outer onClick={() => setIsModalOpen(false)}>
          <Inner>{children}</Inner>
        </Outer>,
        document.getElementById(PORTAL_MODAL)
      )
    : null;
}

export default Modal;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00000010;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: fit-content;
  margin-top: 100px;
  padding: 16px 70px;
  background-color: #f5f5f5;
  border-top: 10px solid #8ed3e5;
  border-radius: 5px;
  box-shadow: 5px 5px 12px rgba(33, 33, 33, 0.7);
`;
