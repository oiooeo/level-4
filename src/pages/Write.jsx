import React, { useState } from "react";
import Button from "../components/Button";
import { ContentInput, Input } from "../components/Input";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function Write() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const fileSelectHandler = (event) => {
    setImageFile(event.target.files[0]);

    if (imageFile === 0) {
      return;
    } else {
      const imagePreview = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(imagePreview);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    }
  };

  const cancelButtonClickHandler = () => {
    navigate("/");
  };

  const submitButtonClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={submitButtonClickHandler}>
        <InputDiv>
          <p>작성자</p>
          <Input placeholder="작성자를 적어주세요" />
        </InputDiv>

        <InputDiv>
          <p>제목</p>
          <Input placeholder="제목을 적어주세요" />
        </InputDiv>

        <InputDiv>
          <p>내용</p>
          <ContentInput placeholder="내용을 적어주세요" />
        </InputDiv>

        <InputDiv>
          <Button
            // size={"small"}
            radius={"square"}
            color={"#ffffff"}
            htmlFor="file"
          >
            📸 사진 선택하기
          </Button>
          <ImageInput
            type="file"
            onChange={fileSelectHandler}
            id="file"
            accept="image/*"
          />
        </InputDiv>

        <ButtonDiv>
          <Button
            size={"small"}
            color={"#ff8787"}
            onClick={cancelButtonClickHandler}
          >
            취소
          </Button>
          <Button size={"small"} type="submit">
            등록
          </Button>
        </ButtonDiv>
      </Form>
    </Container>
  );
}

export default Write;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;

  p {
    width: 60px;
    margin: 3px 0;
    font-weight: 500;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 7%;
`;
