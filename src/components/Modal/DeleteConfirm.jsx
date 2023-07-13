import React from "react";
import Modal from "./Modal";
import { styled } from "styled-components";
import Button from "../Button";
import api from "../../axios/api";

function DeleteConfirm({ id, isModalOpen, setIsModalOpen }) {
  const deleteButtonClickHandler = () => {
    api.delete(`polaroid/${id}`);
    window.location.href = "/";
  };

  const cancelButtonClickHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <Type>⚠️ Warning !</Type>
      <Text>게시글을 삭제하시겠습니까?</Text>

      <Buttons>
        <Button
          size={"small"}
          color={"#f89b9b"}
          onClick={deleteButtonClickHandler}
        >
          삭제
        </Button>

        <Button
          size={"small"}
          color={"#9e9e9e"}
          onClick={cancelButtonClickHandler}
        >
          취소
        </Button>
      </Buttons>
    </Modal>
  );
}

export default DeleteConfirm;

const Type = styled.p`
  font-weight: 500;
`;

const Text = styled.p`
  margin: 20px;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
`;
