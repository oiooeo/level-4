import React from "react";
import { styled } from "styled-components";

function Error() {
  return (
    <ErrorMessage>
      Oops!
      <br />
      문제가 생겼습니다 😱
    </ErrorMessage>
  );
}

export default Error;

const ErrorMessage = styled.div`
  text-align: center;
  color: #2c2c2c;
  line-height: 2;
  font-size: x-large;
  font-weight: 500;
`;
