import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { styled } from "styled-components";
import List from "../components/List/List";

function Main() {
  const navigation = useNavigate();

  const moveToWrite = () => {
    navigation("/write");
  };

  return (
    <MainContainer>
      <Button onClick={moveToWrite}>📸 NEW</Button>
      <List />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
