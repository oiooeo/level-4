import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { styled } from "styled-components";

function Main() {
  const navigation = useNavigate();

  const moveToWrite = () => {
    navigation("/write");
  };

  const moveToList = () => {
    navigation("/list");
  };

  return (
    <MainContainer>
      <Buttons>
        <Button onClick={moveToWrite}>✍🏻 𝙉𝙚𝙬</Button>
        <Button onClick={moveToList}>📝 𝙇𝙞𝙨𝙩</Button>
      </Buttons>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  padding: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
