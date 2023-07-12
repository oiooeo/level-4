import React, { useEffect } from "react";
import Modal from "./Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function Success({ isModalOpen, setIsModalOpen, text }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
      navigate("/");
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
