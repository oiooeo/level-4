import React from "react";
import { styled } from "styled-components";

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  background-color: ${(props) => props.background || "none"};
  border: 2px solid ${(props) => props.color || "#8ed3e5"};
  color: #2c2c2c;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 40px 40px ${(props) => props.color || "#8ed3e5"} inset;
    color: ${(props) => props.hoverfontcolor || "#2c2c2c"};
  }

  ${({ size }) => {
    let btnHeight;
    let btnWidth;
    let btnFontSize;

    switch (size) {
      case "large":
        btnWidth = "160px";
        btnHeight = "45px";
        btnFontSize = "large";
        break;

      case "small":
        btnWidth = "90px";
        btnHeight = "33px";
        btnFontSize = "smaller";
        break;

      default:
        btnWidth = "120px";
        btnHeight = "40px";
        btnFontSize = "medium";
        break;
    }
    return `width : ${btnWidth};
            height : ${btnHeight};
            font-size: ${btnFontSize};
            `;
  }};

  ${({ radius }) => {
    let btnRadius;

    switch (radius) {
      case "square":
        btnRadius = "0px";
        break;

      default:
        btnRadius = "30px";
        break;
    }
    return `border-radius: ${btnRadius};`;
  }};
`;
