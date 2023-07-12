import { styled } from "styled-components";

const FooterContainer = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 25px 0;
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);

  & > p {
    margin: 3px;
    color: #2c2c2c;
    font-size: 0.8rem;
  }
`;

const FooterIcons = styled.div`
  margin-top: 20px;

  & > a {
    position: relative;
    display: inline-flex;
    width: 32px;
    height: 32px;
    margin: 10px;
    padding: 5px;
    cursor: pointer;
  }
`;

export { FooterContainer, FooterIcons };
