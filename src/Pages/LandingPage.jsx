import styled from "styled-components";
import { Anouncement, HeroSection, Navbar } from "../Components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
    </Container>
  );
};
