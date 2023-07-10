import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/api";
import Button from "../components/Button";
import { styled } from "styled-components";

function Detail() {
  const [polaroid, setPolaroid] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const fetchTodos = async () => {
    const { id } = params;
    const { data } = await api.get(`/polaroid/${id}`);
    setPolaroid(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const backButtonClickHandler = () => {
    navigate(-1);
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
          <Button size={"small"} onClick={backButtonClickHandler}>
            UPDATE
          </Button>
          <Button
            size={"small"}
            color={"#9e9e9e"}
            onClick={backButtonClickHandler}
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

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 10px;
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
