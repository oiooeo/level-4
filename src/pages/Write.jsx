import React, { useState } from "react";
import Button from "../components/Button";
import { ContentInput, Input } from "../components/Input";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { addPolaroid } from "../api/polaroid";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

function Write() {
  const [user, onChangeUserHandler] = useInput();
  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  let imageLink = "";

  const queryClient = useQueryClient();
  const mutation = useMutation(addPolaroid, {
    onSuccess: () => {
      queryClient.invalidateQueries("polaroid");
    },
  });

  const navigate = useNavigate();

  const fileSelectHandler = (event) => {
    setImageFile(event.target.files[0]);

    if (event.target.files.length === 0) {
      return;
    } else {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    }
  };

  const handleUpload = async () => {
    try {
      const imageRef = ref(storage, `${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(imageRef);
      if (downloadURL !== null) {
        return downloadURL;
      }
    } catch (error) {
      alert("사진을 추가해주세요!");
    }
  };

  const cancelButtonClickHandler = () => {
    navigate("/");
  };

  const submitButtonClickHandler = async (event) => {
    event.preventDefault();

    // if (!user || !title || !content) {
    //   return console.log("값을 모두 입력하세요");
    // }

    // const imageLink = handleUpload();
    // console.log(imageLink);

    const imageLink = await handleUpload();

    const newPolaroid = {
      user,
      title,
      content,
      image: imageLink,
      id: uuidv4(),
    };

    console.log("newPolaroid", newPolaroid);
    mutation.mutate(newPolaroid);
    navigate("/");
  };

  return (
    <Container>
      <Form>
        <InputDiv>
          <p>작성자</p>
          <Input
            type="text"
            value={user}
            id="user"
            onChange={onChangeUserHandler}
            placeholder="작성자를 적어주세요"
          />
        </InputDiv>

        <InputDiv>
          <p>제목</p>
          <Input
            type="text"
            value={title}
            id="title"
            onChange={onChangeTitleHandler}
            placeholder="제목을 적어주세요"
          />
        </InputDiv>

        <InputDiv>
          <p>내용</p>
          <ContentInput
            type="text"
            value={content}
            id="content"
            onChange={onChangeContentHandler}
            placeholder="내용을 적어주세요"
          />
        </InputDiv>

        <InputDiv>
          <Label htmlFor="file">📸 사진 선택하기</Label>
          <ImageInput
            type="file"
            onChange={fileSelectHandler}
            id="file"
            accept="image/*"
          />
        </InputDiv>

        <div>
          <View src={imagePreview || undefined} alt="" />
        </div>

        <ButtonDiv>
          <Button
            size={"small"}
            color={"#ff8787"}
            onClick={cancelButtonClickHandler}
          >
            취소
          </Button>
          <Button size={"small"} onClick={submitButtonClickHandler}>
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
