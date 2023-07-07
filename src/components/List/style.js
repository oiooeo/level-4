import { styled } from "styled-components";

const ListContainer = styled.div`
  flex: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
`;

const ToDoList = styled.li`
  margin: 15px;
  float: left;
  position: relative;

  .wrap {
    color: #2c2c2c;
    height: 220px;
    width: 200px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #2c2c2c;
    box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
    text-align: center;
  }

  &:nth-child(even) .wrap {
    position: relative;
    top: 5px;
    transform: rotate(4deg);
  }

  &:nth-child(3n) .wrap {
    position: relative;
    top: -5px;
    transform: rotate(-2deg);
  }

  &:nth-child(5n) .wrap {
    position: relative;
    top: -10px;
    transform: rotate(5deg);
  }

  .wrap:hover {
    -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
`;

const Image = styled.img`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const DIV = styled.div`
  margin-top: 3px;
  text-align: start;

  span {
    font-size: small;
  }
`;

export { ListContainer, ToDoList, Image, DIV };
