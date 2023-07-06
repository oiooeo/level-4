import React from "react";
import { FooterContainer, FooterIcons } from "./style";

function Footer() {
  return (
    <FooterContainer>
      <p>ᴛᴏ ᴅᴏ ʟɪsᴛ</p>
      <p> &copy; 2023 All rights reserved</p>

      <FooterIcons>
        <a href="https://github.com/oiooeo/level-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            alt=""
          />
        </a>
        <a href="https://velog.io/@choiys1103">
          <img src="https://simpleicons.org/icons/velog.svg" alt="" />
        </a>
        <a href="mailto:choiys1103@naver.com">
          <img src="https://simpleicons.org/icons/gmail.svg" alt="" />
        </a>
      </FooterIcons>
    </FooterContainer>
  );
}

export default Footer;
