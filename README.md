# 📝 POLAROID

🔗 https://level-4.vercel.app/

<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=black"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=black"/> <img src="https://img.shields.io/badge/REACT-61DAFB?style=flat&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=black"/> <img src="https://img.shields.io/badge/Glitch-3333FF?style=flat&logo=glitch&logoColor=black"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white"/>

---

## API 명세서

| Feature     | URL           | Method | Request                                                                                    | Response                                                                                   |
| ----------- | ------------- | ------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 목록 조회   | /polaroid     | GET    |                                                                                            | {"id": 고유 ID, "title": 제목, "content": 내용", "image": 이미지 링크 URL, "user": 작성자} |
| 게시글 추가 | /polaroid     | POST   | {"id": 고유 ID, "title": 제목, "content": 내용", "image": 이미지 링크 URL, "user": 작성자} |                                                                                            |
| 게시글 수정 | /polaroid/:id | PATCH  | {"title": 제목, "content": 내용", "image": 이미지 링크 URL}                                |                                                                                            |
| 게시글 삭제 | /polaroid/:id | DELETE |                                                                                            |                                                                                            |

---

## 1. `Clone`

$ git clone [https://github.com/oiooeo/level-4.git]

## 2. `Into the repository`

$ cd level-4

## 3. `Install module`

$ yarn install

## 4. `Run`

$ yarn start
