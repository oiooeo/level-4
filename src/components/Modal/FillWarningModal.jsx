import React from "react";
import Modal from "./Modal";
import Button from "../Button";
import { styled } from "styled-components";

function FillWarningModal({ isModalOpen, setIsModalOpen }) {
  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <Type>⚠️ Warning !</Type>
      <Text>빈 칸을 모두 채워주세요</Text>
      <Button
        size={"small"}
        color={"#9e9e9e"}
        onClick={() => setIsModalOpen(false)}
      >
        확인
      </Button>
    </Modal>
  );
}

export default FillWarningModal;

const Type = styled.p`
  font-weight: 500;
`;

const Text = styled.p`
  margin: 20px;
  font-weight: 400;
`;
