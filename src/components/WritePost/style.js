import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0 50px 0;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;

  p {
    width: 60px;
    margin: 3px 0;
    font-weight: 500;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;

const View = styled.img`
  display: flex;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  object-fit: cover;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 50px;
  padding-right: 7%;
`;

export { Container, Form, InputDiv, ImageInput, Label, View, ButtonDiv };
