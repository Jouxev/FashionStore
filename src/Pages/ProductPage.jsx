import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../Components";
import { API_URI } from "../config";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;
const ProductContainer = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Right = styled.div`
  flex: 1;
`;
const ImagesContainer = styled.div`
  width: 100%;
  position: relative;
`;
const Arrow = styled.div`
  opacity: 0.6;
  position: absolute;
  padding: 10px;
  border-radius: 2px;
  background: var(--light);
  ${(props) => (props.right ? "right: 0;" : "left : 0;")}
  top: 40%;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  & > svg {
    fill: var(--veryDark);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  padding: 1rem;
`;
const Title = styled.h1`
  color: var(--veryDark);
`;
const Price = styled.h2`
  color: var(--dark);
`;
const AddToCart = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({
    flexDirection: "column",
    gap: "20px",
    alignItems: "flex-start",
  })}
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  jusity-content: center;
  gap: 15px;
  background: var(--light);

  font-size: 1.5rem;
`;
const Add = styled.div`
  transition: 0.2s ease all;
  cursor: pointer;
  padding: 10px;
  color: var(--dark);
  &:hover {
    transform: scale(1.1);
    color: var(--light);
    background: var(--dark);
  }
`;
const Qty = styled.div`
  padding: 10px;
  color: var(--dark);
`;
const AddButton = styled.button`
  border: none;
  padding: 20px 30px;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--veryDark);
  color: var(--light);
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    opacity: 0.8;
  }
`;
const Desc = styled.div`
  margin: 3rem 0rem;
  color: var(--dark);
  font-size: 1.2rem;
`;
export const ProductPage = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [desiredQuantity, setDesiredQuantity] = useState(1);
  const { id } = useParams();

  const qtyAdd = (operation) => {
    if (operation === "add") {
      if (desiredQuantity >= currentProduct.qty) {
        console.log("Maximum quantity");
        return;
      }
      setDesiredQuantity(desiredQuantity + 1);
    }
    if (operation === "min") {
      if (desiredQuantity <= 1) {
        console.log("Min Qty is 1");
        return;
      }
      setDesiredQuantity(desiredQuantity - 1);
    }
  };
  const nextImage = (direction) => {
    if (!currentProduct) {
      return;
    }
    if (direction === "right") {
      if (selectedImage >= currentProduct.images.length - 1) {
        setSelectedImage(0);
      } else {
        setSelectedImage(selectedImage + 1);
      }
    }
    if (direction === "left") {
      if (selectedImage == 0) {
        setSelectedImage(currentProduct.images.length - 1);
      } else {
        setSelectedImage(selectedImage - 1);
      }
    }
  };
  const fetchProduct = async () => {
    await axios
      .get(`${API_URI}api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setCurrentProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Container>
      <Navbar />

      {currentProduct ? (
        <ProductContainer>
          <Right>
            <ImagesContainer>
              <Arrow
                right
                onClick={() => {
                  nextImage("right");
                }}
              >
                <AiOutlineArrowRight />
              </Arrow>
              <Image src={currentProduct.images[selectedImage].url} alt="img" />
              <Arrow
                left
                onClick={() => {
                  nextImage("left");
                }}
              >
                <AiOutlineArrowLeft />{" "}
              </Arrow>
            </ImagesContainer>
          </Right>
          <Left>
            <Title>{currentProduct.title}</Title>
            <Price>$ {currentProduct.price}</Price>
            <AddToCart>
              <Quantity>
                <Add
                  onClick={() => {
                    qtyAdd("min");
                  }}
                >
                  <IoMdRemove />
                </Add>
                <Qty>{desiredQuantity}</Qty>
                <Add
                  onClick={() => {
                    qtyAdd("add");
                  }}
                >
                  <IoMdAdd />
                </Add>
              </Quantity>
              <AddButton>Add To Cart</AddButton>
            </AddToCart>
            <Desc>{currentProduct.desc}</Desc>
          </Left>
        </ProductContainer>
      ) : (
        "No Product Found "
      )}
    </Container>
  );
};
