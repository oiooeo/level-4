import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios/api";
import Button from "../../components/Button";
import { DetailContainer, Buttons, Polaroid, Image, TextDiv } from "./style";

function DetailPost() {
  const [polaroid, setPolaroid] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const fetchTodos = async () => {
    const { data } = await api.get(`/polaroid/${id}`);
    setPolaroid(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const backButtonClickHandler = () => {
    navigate(-1);
  };

  const deleteButtonClickHandler = () => {
    api.delete(`polaroid/${id}`);
    alert("삭제되었습니다");
    navigate("/");
  };

  const updateButtonClickHandler = () => {
    navigate("update");
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

        <div>
          <Button size={"small"} onClick={updateButtonClickHandler}>
            UPDATE
          </Button>

          <Button
            size={"small"}
            color={"#9e9e9e"}
            onClick={deleteButtonClickHandler}
          >
            DELETE
          </Button>
        </div>
      </Buttons>

      <Polaroid>
        <Image src={polaroid?.image} alt="" />
        <TextDiv>
          <h1>{polaroid?.title}</h1>
          <h2>{polaroid?.content}</h2>
          <span>@{polaroid?.user}</span>
        </TextDiv>
      </Polaroid>
    </DetailContainer>
  );
}

export default DetailPost;
