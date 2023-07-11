import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/api";
import Button from "../components/Button";
import { styled } from "styled-components";
import { ContentInput, Input } from "../components/Input";
import useInput from "../hooks/useInput";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

function Update() {
  const [title, onChangeTitleHandler] = useInput("");
  const [content, onChangeContentHandler] = useInput("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [polaroid, setPolaroid] = useState(null);

  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const fetchTodos = async () => {
    const { data } = await api.get(`/polaroid/${id}`);
    setPolaroid(data);
    setImagePreview(data?.image);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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

  const backButtonClickHandler = () => {
    navigate(-1);
  };

  const updateButtonClickHandler = async (event) => {
    event.preventDefault();

    let imageLink = polaroid.image;

    if (imageFile !== null) {
      imageLink = await handleUpload();
    }

    api.patch(`/polaroid/${id}`, {
      title: title,
      content: content,
      image: imageLink,
    });
    navigate("/");
  };

  return (
    <DetailContainer>
      <Buttons>
        <Button
          size={"small"}
          color={"#9e9e9e"}
          onClick={backButtonClickHandler}
        >
          ◀︎ BACK
        </Button>

        <Button size={"small"} onClick={updateButtonClickHandler}>
          UPDATE
        </Button>
      </Buttons>

      <Polaroid>
        <Image src={imagePreview || undefined} alt="" />

        <TextDiv>
          <Label htmlFor="file">📸 사진 선택하기</Label>
          <ImageInput
            type="file"
            onChange={fileSelectHandler}
            id="file"
            accept="image/*"
          />

          <h1>
            <Input
              type="text"
              value={title}
              id="title"
              onChange={onChangeTitleHandler}
              placeholder={polaroid?.title}
            />
          </h1>

          <h2>
            <ContentInput
              type="text"
              value={content}
              id="content"
              onChange={onChangeContentHandler}
              placeholder={polaroid?.content}
            />
          </h2>
          <span>@{polaroid?.user}</span>
        </TextDiv>
      </Polaroid>
    </DetailContainer>
  );
}

export default Update;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 10px 0;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97vw;
  margin-bottom: 30px;

  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
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
  object-fit: cover;
`;

const TextDiv = styled.div`
  width: 468px;
  margin-top: 10px;

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

const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  float: right;
  margin: 7px;
  font-size: 13px;
  cursor: pointer;
`;
