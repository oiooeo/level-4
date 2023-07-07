import React from "react";
import { styled } from "styled-components";

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.div`
  width: 180px;
  padding: 15px;
  background-color: ${(props) => props.background || "none"};
  border: ${(props) => props.border || "2px solid #8ed3e5"};
  border-radius: 25px;
  text-align: center;
  font-size: medium;
  cursor: pointer;

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px ${(props) => props.color || "#8ed3e5"} inset;
  }
`;
