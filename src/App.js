import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage, LandingPage } from "./Pages";

const Container = styled.div``;

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/signin" element={<AuthPage auth="signin" />} />
          <Route path="/register" element={<AuthPage auth="register" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
