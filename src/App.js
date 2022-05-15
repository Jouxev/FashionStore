import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage, LandingPage, ShopPage } from "./Pages";
import { Anouncement } from "./Components";
import store from "./redux/store";
import { Provider } from "react-redux";
const Container = styled.div``;

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Anouncement
          text={"Big discount Today 50% using Promo code (fiftyOFF)"}
        />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route index path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<AuthPage auth="signin" />} />
            <Route path="/register" element={<AuthPage auth="register" />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  );
};
