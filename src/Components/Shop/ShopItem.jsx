import { BsHeart, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  margin: 1rem 0rem;
  height: fit-content;
  width: 220px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background: var(--light);
    border-bottom: 2px solid var(--veryDark);
  }
  ${mobile({
    width: "90%",
  })}
`;
const ImageContainer = styled.div`
  height: 240px;
  width: 220px;
  position: relative;
  ${mobile({
    width: "100%",
    display: "flex",
    justifyContent: "center",
  })}
`;
const Discount = styled.div`
  background: var(--veryDark);
  color: var(--light);
  padding: 2px 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 12px;
`;
const Like = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid var(--veryDark);
  background: var(--light);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.2);
    background: var(--dark);
    color: var(--light);
    border: 1px solid var(--dark);
  }
`;

const Image = styled.img`
  height: 240px;
  width: 220px;
  object-fit: cover;
`;
const Title = styled.h1`
  font-weight: 400;
  color: var(--veryDark);
  font-size: 1.2rem;
  text-align: center;
`;
const Price = styled.h2`
  font-weight: 700;
  color: var(--dark);
  font-size: 1rem;
`;
const Rating = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  & > svg {
    fill: var(--dark);
    transition: 0.2s ease all;
    &:hover {
      transform: scale(1.4);
    }
  }
  margin-bottom: 20px;
`;
const Review = styled.span`
  font-size: 0.8rem;
  color: var(--dark);
  margin-left: 5px;
`;
export const ShopItem = (props) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/product/${props.item._id}`)}>
      <ImageContainer>
        <Discount>20 %</Discount>
        <Like>
          <BsHeart />
        </Like>
        <Image src={props.item.images[0].url} alt={props.item.title} />
      </ImageContainer>
      <Title> {props.item.title} </Title>
      <Price> {props.item.price} $ </Price>
      <Rating>
        {props.item.rating.length > 0 ? <BsStarFill /> : <BsStar />}
        {props.item.rating.length > 0 ? <BsStarFill /> : <BsStar />}
        {props.item.rating.length > 0 ? <BsStarFill /> : <BsStar />}
        {props.item.rating.length > 0 ? <BsStarFill /> : <BsStar />}
        {props.item.rating.length > 0 ? <BsStarFill /> : <BsStar />}
        <Review> ({props.item.rating.length} reviews)</Review>
      </Rating>
    </Container>
  );
};
