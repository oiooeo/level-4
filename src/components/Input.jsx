import React from "react";
import { styled } from "styled-components";

function Input({ ...props }) {
  return <StyledInput {...props}></StyledInput>;
}

function ContentInput({ ...props }) {
  return <Content {...props}></Content>;
}

export { Input, ContentInput };

const StyledInput = styled.input`
  width: 80%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #2c2c2c;

  &:focus {
    outline: none !important;
    border: 2px solid #8ed3e5;
    border-radius: 3px;
  }
`;

const Content = styled.textarea`
  width: 80%;
  height: 200px;
  padding: 5px;
  border: 1px solid #2c2c2c;
  resize: none;

  &:focus {
    outline: none !important;
    border: 2px solid #8ed3e5;
    border-radius: 3px;
  }
`;
