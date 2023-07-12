import React, { useEffect } from "react";
import Modal from "./Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function UpdateDone({ isModalOpen, setIsModalOpen }) {
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
      <Text>반영되었습니다</Text>
    </Modal>
  );
}

export default UpdateDone;

const Type = styled.p`
  font-weight: 500;
`;

const Text = styled.p`
  margin: 20px;
  font-weight: 400;
`;
