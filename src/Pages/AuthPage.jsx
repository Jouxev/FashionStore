import styled from "styled-components";
import { Navbar } from "../Components";
import { Register } from "../Components/Auth/Register";
import { Signin } from "../Components/Auth/Signin";

const Container = styled.div``;

export const AuthPage = ({ auth }) => {
  return (
    <Container>
      <Navbar />
      {auth === "register" && <Register />}
      {auth === "signin" && <Signin />}
    </Container>
  );
};
