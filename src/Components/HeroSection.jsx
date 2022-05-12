import styled from "styled-components";
import manImage from "../Assets/man1.jpeg";
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGoogleplus } from "react-icons/io";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  ${mobile({
    flexDirection: "column-reverse",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin: 3rem 0rem;
  font-weight: 700;
  ${tablet({
    margin: "3rem 2rem",
  })}
  ${mobile({
    placeSelf: "center",
    fontSize: "1.5rem",
    margin: "1rem",
  })}
`;
const Desc = styled.p`
  text-align: center;
  font-size: 0.8rem;
  width: 80%;
  color: var(--dark);
  margin: 1rem 0;
  ${tablet({
    textAlign: "left",
  })}
  ${mobile({
    placeSelf: "center",
    margin: "1rem",
  })}
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 20px 40px;
  border: none;
  background: var(--veryDark);
  color: var(--light);
  cursor: pointer;
  margin-top: 4rem;
  &:hover {
    opacity: 0.8;
  }
  ${tablet({
    placeSelf: "flex-start",
    marginLeft: "2rem",
  })}
  ${mobile({
    marginTop: "1rem",
    fontSize: "1rem",
    marginBottom: "3rem",
  })}
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  gap: 40px;
  & > svg {
    font-size: 1.5rem;
    cursor: pointer;
    fill: var(--dark);
    transition: 0.2s ease transform;
    &:hover {
      transform: scale(1.2);
      fill: var(--veryDark);
    }
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  height: 450px;
  ${mobile({
    height: "300px",
  })}
`;

export const HeroSection = () => {
  return (
    <Container>
      <Right>
        <Title> Men's Summer Collections </Title>
        <Desc>
          A specialist label creating luxury essentials. Ethically crafted with
          an unwavering commitment to exceptional quality{" "}
        </Desc>
        <Button> Shop Now </Button>
        <SocialContainer>
          <SiFacebook />
          <BsInstagram />
          <AiOutlineTwitter />
          <IoLogoGoogleplus />
        </SocialContainer>
      </Right>
      <Left>
        <Image src={manImage} alt="fashoinMen" />
      </Left>
    </Container>
  );
};
