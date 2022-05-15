import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.05);
  position: fixed;
  display: none;
  transition: 0.5s ease-out all;
  z-index: 8 !important;
  ${tablet({
    display: "block",
  })}
`;
const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 60%;
  background: white;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2 rem;
`;
const Menu = styled.ul`
  margin: 9rem 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 2rem;
`;
const MenuItem = styled.li`
  letter-spacing: 3px;
  font-size: 1.2rem;
`;

export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuItem>Home </MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem>Products</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};
