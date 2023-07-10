import React from "react";
import { ListContainer, Li, Image, DIV } from "./style";
import { useQuery } from "react-query";
import { getPolaroid } from "../../api/polaroid";
import { useNavigate } from "react-router-dom";

function List() {
  const navigation = useNavigate();
  const { isLoading, isError, data } = useQuery("polaroid", getPolaroid);

  const JsonData = data?.data || [];

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  const polaroidClickEventHandler = (id) => {
    navigation(`/${id}`);
  };

  return (
    <ListContainer>
      <ul>
        {JsonData &&
          JsonData.map((item) => {
            return (
              <Li
                key={item.id}
                onClick={() => {
                  polaroidClickEventHandler(item.id);
                }}
              >
                <div className="wrap">
                  <Image src={item.image} alt="" />
                  <DIV>
                    <p>{item.title}</p>
                    <span>@{item.user}</span>
                  </DIV>
                </div>
              </Li>
            );
          })}
      </ul>
    </ListContainer>
  );
}

export default List;
