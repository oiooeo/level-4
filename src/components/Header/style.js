import { styled } from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  border-bottom: 1px solid #c1c1c1;
  font-size: large;
  font-weight: 600;

  & > h1 {
    color: #2c2c2c;
  }

  & > p {
    position: relative;
    display: inline-flex;
    color: #8ed3e5;
    cursor: pointer;
  }
`;

export { HeaderContainer };
