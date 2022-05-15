import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { tablet } from "../responsive";

import { useState } from "react";
import { Sidebar } from ".";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-family: "Six Caps", sans-serif;
  letter-spacing: 5px;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Center = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
  ${tablet({
    display: "none",
  })}
`;
const Menu = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  gap: 40px;
  display: flex;
`;
const MenuItem = styled.li`
  color: var(--medium);
  cursor: pointer;
  font-weight: 500;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    var(--veryDark) 100%,
    var(--veryDark) 0%
  );
  background-position: bottom left;
  background-size: 100% 0px;
  background-repeat: no-repeat;
  transition: 0.2s ease all;
  &:hover {
    color: var(--veryDark);
    background-size: 100% 2px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: var(--dark);
  ${tablet({
    justifyContent: "flex-end",
    padding: "0px 20px",
  })}
`;
const IconContainer = styled.div`
  position: relative;
  transition: 0.2s ease all;
  ${(props) => props.ham && `display: none; z-index: 9 !important;`}
  ${(props) => props.ham && tablet({ display: "block" })}
  &:hover {
    transform: scale(1.2);
  }
  & > svg {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--veryDark);
    cursor: pointer;
  }
`;
const Badge = styled.span`
  position: absolute;
  background: var(--medium);
  height: 20px;
  width: 20px;
  border-radius: 50px;
  display: flex;
  color: var(--light);
  align-items: center;
  justify-content: center;
  font-size: 12px;
  top: -10px;
  right: -10px;
`;

export const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  let navigate = useNavigate();
  return (
    <Container>
      <Left>
        <Logo onClick={() => navigate("/")}> Kazy Store</Logo>
      </Left>
      <Center>
        <Menu>
          <MenuItem onClick={() => navigate("/")}>Home </MenuItem>
          <MenuItem onClick={() => navigate("/shop")}>Shop</MenuItem>
          <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
        </Menu>
      </Center>
      <Right>
        <IconContainer>
          <RiSearchLine />
        </IconContainer>
        <IconContainer>
          <AiOutlineUser onClick={() => navigate("/signin")} />
        </IconContainer>
        <IconContainer>
          <Badge> 0</Badge>
          <BsCart3 />
        </IconContainer>
        <IconContainer ham onClick={() => setmenuOpened(!menuOpened)}>
          {!menuOpened ? <GiHamburgerMenu /> : <VscChromeClose />}
        </IconContainer>
      </Right>
      {menuOpened && <Sidebar />}
    </Container>
  );
};
