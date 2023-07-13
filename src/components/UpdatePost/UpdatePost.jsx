import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios/api";
import Button from "../../components/Button";
import { ContentInput, Input } from "../../components/Input";
import useInputVer2 from "../../hooks/useInputVer2";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import {
  Container,
  Buttons,
  Polaroid,
  Image,
  TextDiv,
  ImageInput,
  Label,
} from "./style";
import FillWarningModal from "../Modal/FillWarningModal";
import Success from "../Modal/Success";
import ErrorModal from "../Modal/ErrorModal";

function UpdatePost() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [polaroid, setPolaroid] = useState(null);
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(false);
  const [title, setTitle, onChangeTitleHandler] = useInputVer2("");
  const [content, setContent, onChangeContentHandler] = useInputVer2("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoneModalOpen, setIsDoneModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const fetchTodos = async () => {
    const { data } = await api.get(`/polaroid/${id}`);
    setPolaroid(data);
    setImagePreview(data?.image);
    setTitle(data?.title);
    setContent(data?.content);
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
      setIsErrorModalOpen(true);
    }
  };

  const backButtonClickHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    setUpdateButtonDisabled(!title);
  }, [title]);

  const updateButtonClickHandler = async (event) => {
    event.preventDefault();

    try {
      if (updateButtonDisabled) {
        setIsModalOpen(true);
        return;
      }

      let imageLink = polaroid.image;

      if (imageFile !== null) {
        imageLink = await handleUpload();
      }

      api.patch(`/polaroid/${id}`, {
        title: title,
        content: content,
        image: imageLink,
      });

      setIsDoneModalOpen(true);
    } catch (error) {
      setIsErrorModalOpen(true);
    }
  };

  return (
    <Container>
      <Buttons>
        <Button
          size={"small"}
          color={"#9e9e9e"}
          onClick={backButtonClickHandler}
        >
          BACK
        </Button>

        <Button
          size={"small"}
          color={updateButtonDisabled ? "#9e9e9e" : undefined}
          onClick={updateButtonClickHandler}
        >
          UPDATE
        </Button>
        {isModalOpen && (
          <FillWarningModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        {isDoneModalOpen && (
          <Success
            isModalOpen={isDoneModalOpen}
            setIsModalOpen={setIsDoneModalOpen}
            text={"수정되었습니다"}
          />
        )}

        {isErrorModalOpen && (
          <ErrorModal
            isModalOpen={isErrorModalOpen}
            setIsModalOpen={setIsErrorModalOpen}
            text={"수정을 실패했습니다"}
          />
        )}
      </Buttons>

      <Polaroid>
        <Image src={imagePreview || undefined} alt="" />

        <TextDiv>
          <Label htmlFor="file">📸 다른 사진 선택하기</Label>
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
            />
          </h1>

          <h2>
            <ContentInput
              type="text"
              value={content}
              id="content"
              onChange={onChangeContentHandler}
            />
          </h2>
          <span>@{polaroid?.user}</span>
        </TextDiv>
      </Polaroid>
    </Container>
  );
}

export default UpdatePost;
