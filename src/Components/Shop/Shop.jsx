import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { ShopItem } from "./ShopItem";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;
const ShopItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${tablet({
    justifyContent: "center",
  })}
`;
const Title = styled.h1`
  text-align: center;
  margin: 1rem 0rem 2rem 0rem;
  padding-bottom: 20px;
  background-image: linear-gradient(
    90deg,
    var(--veryDark) 100%,
    var(--veryDark) 0%
  );
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 10% 4px;
`;
const Sorting = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
  })}
`;
const Filter = styled.select`
  margin: 0px 20px;
  padding: 10px 30px;
  width: 160px;
  border: none;
  background: var(--light);
  outline: none;
  font-size: 0.8rem;
  cursor: pointer;
  color: var(--dark);
  ${mobile({
    margin: "0px",
  })}
`;
const Label = styled.label`
  color: var(--veryDark);
`;
const FilterOption = styled.option``;
export const Shop = () => {
  return (
    <Container>
      <Title> Our Products </Title>
      <Sorting>
        <Label> Filter Product: </Label>
        <Filter>
          <FilterOption selected>All Product </FilterOption>
          <FilterOption>New Arrivals</FilterOption>
          <FilterOption>Top Rating </FilterOption>
          <FilterOption>Best Sellers</FilterOption>
        </Filter>
        <Filter>
          <FilterOption selected>Price</FilterOption>
          <FilterOption>Lowest Price</FilterOption>
          <FilterOption>Hightest Price </FilterOption>
        </Filter>
      </Sorting>
      <ShopItemContainer>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ShopItemContainer>
    </Container>
  );
};
