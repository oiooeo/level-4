import React from "react";
import { HeaderContainer } from "./style";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();

  const moveToMain = () => {
    navigation("/");
  };

  return (
    <HeaderContainer>
      <p onClick={moveToMain}>HOME</p>
      <h1>Polaroids</h1>
    </HeaderContainer>
  );
}

export default Header;
