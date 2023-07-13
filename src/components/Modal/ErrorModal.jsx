import React, { useEffect } from "react";
import Modal from "./Modal";
import { styled } from "styled-components";

function ErrorModal({ isModalOpen, setIsModalOpen, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <Type>❗️ Error</Type>
      <Text>{text}</Text>
    </Modal>
  );
}

export default ErrorModal;

const Type = styled.p`
  font-weight: 500;
`;

const Text = styled.p`
  margin: 20px;
  font-weight: 400;
`;
