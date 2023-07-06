import React from "react";
import { styled } from "styled-components";

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.div`
  width: 210px;
  margin: 20px;
  padding: 15px 60px;
  align-items: center;
  background-color: ${(props) => props.background || "none"};
  border: ${(props) => props.border || "2px solid #7f7fd5"};
  border-radius: 20px;
  font-size: large;
  cursor: pointer;
`;
