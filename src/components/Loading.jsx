import React from "react";
import { styled } from "styled-components";

function Loading() {
  return <Spinner />;
}

export default Loading;

const Spinner = styled.div`
  width: 110px;
  height: 110px;
  border: 10px solid #86a8e7;
  border-top: 10px solid #91eae4;
  border-radius: 50%;

  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
