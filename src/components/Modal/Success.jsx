import React, { useEffect } from "react";
import Modal from "./Modal";
import { styled } from "styled-components";

function Success({ isModalOpen, setIsModalOpen, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
      window.location.href = "/";
    };
  }, []);

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <Type>✅ Success !</Type>
      <Text>{text}</Text>
    </Modal>
  );
}

export default Success;

const Type = styled.p`
  font-weight: 500;
`;

const Text = styled.p`
  margin: 20px;
  font-weight: 400;
`;
