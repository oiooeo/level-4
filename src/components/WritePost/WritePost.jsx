import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { ContentInput, Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { addPolaroid } from "../../api/polaroid";
import { v4 as uuidv4 } from "uuid";
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

function WritePost() {
  const [user, onChangeUserHandler] = useInput("");
  const [title, onChangeTitleHandler] = useInput("");
  const [content, onChangeContentHandler] = useInput("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

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

  const backButtonClickHandler = () => {
    navigate(-1);
  };

  const submitButtonClickHandler = async (event) => {
    event.preventDefault();

    if (submitButtonDisabled) {
      return;
    }

    const imageLink = await handleUpload();

    const newPolaroid = {
      id: uuidv4(),
      user,
      title,
      content,
      image: imageLink,
    };

    mutation.mutate(newPolaroid);
    navigate("/");
  };

  useEffect(() => {
    setSubmitButtonDisabled(!(imageFile && user && title));
  }, [imageFile, user, title]);

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
          color={submitButtonDisabled ? "#9e9e9e" : undefined}
          onClick={submitButtonClickHandler}
        >
          📸 CLICK
        </Button>
      </Buttons>

      <Polaroid autoComplete="off">
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
              id="title"
              type="text"
              value={title}
              onChange={onChangeTitleHandler}
              placeholder="제목을 적어주세요 (필수 / 20자 이내)"
              maxLength="20"
            />
          </h1>

          <h2>
            <ContentInput
              id="content"
              type="text"
              value={content}
              onChange={onChangeContentHandler}
              placeholder="내용을 적어주세요 (300자 이내)"
              maxLength="300"
            />
          </h2>
          <span>
            <Input
              id="user"
              type="text"
              value={user}
              onChange={onChangeUserHandler}
              placeholder="작성자를 적어주세요"
            />
          </span>
        </TextDiv>
      </Polaroid>
    </Container>
  );
}

export default WritePost;
