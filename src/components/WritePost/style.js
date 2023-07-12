import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97vw;
  margin-bottom: 30px;
`;

const Polaroid = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  color: #2c2c2c;
  width: 482px;
  padding: 7px 0;
  background-color: #ffffff;
  border: 1px solid #2c2c2c;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
`;

const Image = styled.img`
  justify-content: center;
  align-items: center;
  width: 468px;
  height: 468px;
  background-color: #d0d0d0;
  object-fit: cover;
`;

const TextDiv = styled.div`
  width: 468px;
  margin-top: 10px;

  span {
    float: right;
    margin: 5px;
    font-size: 13px;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  float: right;
  margin: 7px;
  font-size: 13px;
  cursor: pointer;
`;

export { Container, Buttons, Polaroid, Image, TextDiv, ImageInput, Label };
