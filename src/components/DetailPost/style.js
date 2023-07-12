import { styled } from "styled-components";

const DetailContainer = styled.div`
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

const Polaroid = styled.div`
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
  border: 0.5px solid #2c2c2c;
  object-fit: cover;
`;

const TextDiv = styled.div`
  width: 468px;
  margin-top: 20px;

  h1 {
    margin: 5px;
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    margin: 5px;
    font-size: 14px;
  }

  span {
    float: right;
    margin: 5px;
    font-size: 13px;
  }
`;

export { DetailContainer, Buttons, Polaroid, Image, TextDiv };
