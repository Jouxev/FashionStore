import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: var(--dark);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light);
  font-size: 14px;
  font-weight: 300;
`;

export const Anouncement = ({ text, color }) => {
  return <Container> {text} </Container>;
};
