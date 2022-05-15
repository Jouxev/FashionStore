import styled from "styled-components";
import { Navbar } from "../Components";
import { Shop } from "../Components/Shop/Shop";

const Container = styled.div``;

export const ShopPage = () => {
  return (
    <Container>
      <Navbar />
      <Shop />
    </Container>
  );
};
