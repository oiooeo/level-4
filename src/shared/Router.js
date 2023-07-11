import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Write from "../pages/Write";
import { styled } from "styled-components";
import Update from "../pages/Update";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/update" element={<Update />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
