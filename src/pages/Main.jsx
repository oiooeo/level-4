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
      <Button size={"small"} onClick={moveToWrite}>
        NEW
      </Button>
      <List />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 10px;
`;
