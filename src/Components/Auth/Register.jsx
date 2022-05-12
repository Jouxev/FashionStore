import styled from "styled-components";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: 2rem 0rem;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  color: var(--veryDark);
`;
const Form = styled.form``;
const InputGroupe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
const InputLabel = styled.label`
  color: var(--dark);
  font-size: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--light);
  justify-content: space-between;
  padding: 5px 10px;
  & > svg {
    fill: var(--veryDark);
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s ease all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
`;
const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  outline: none;
  border: none;
  background: var(--light);
  color: var(--veryDark);
  font-size: 1.2rem;
`;
const Span = styled.span`
  font-size: 0.6rem;
  color: var(--veryDark);
`;
const Button = styled.button`
  padding: 15px 20px;
  border: none;
  background: var(--veryDark);
  color: var(--light);
  font-size: 1.2rem;
  margin: 1rem 0rem;
  cursor: pointer;
  font-weight: 700;
  place-self: flex-end;
  transition: 0.2s ease all;
  &:hover {
    opacity: 0.8;
  }
`;
const AccountDesc = styled.div`
  font-size: 0.8rem;
  color: var(--dark);
  display: flex;
  justify-content: center;
  & > a {
    text-decoration: none;
    font-weight: 700;
    margin: 0px 5px;
    color: var(--veryDark);
  }
`;
export const Register = () => {
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fullName == "" ? setFullNameError(true) : setFullNameError(false);
    email == "" ? setEmailError(true) : setEmailError(false);
    password == "" ? setPasswordError(true) : setPasswordError(false);
    if (fullName == "" || email == "" || password == "") {
      return;
    }
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <Title> Register </Title>
          <InputGroupe>
            <InputLabel> Full Name :</InputLabel>
            <InputContainer>
              <Input
                type={"text"}
                placeholder="Jhon Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </InputContainer>
            {fullNameError && <Span> Your Name is required </Span>}
          </InputGroupe>
          <InputGroupe>
            <InputLabel> Email :</InputLabel>
            <InputContainer>
              <Input
                type={"text"}
                placeholder="Email Adress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            {emailError && <Span> Your email is required </Span>}
          </InputGroupe>
          <InputGroupe>
            <InputLabel> Password :</InputLabel>
            <InputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordVisible ? (
                <MdVisibilityOff
                  onClick={() => setpasswordVisible(!passwordVisible)}
                />
              ) : (
                <MdVisibility
                  onClick={() => setpasswordVisible(!passwordVisible)}
                />
              )}
            </InputContainer>
            {passwordError && <Span> Your Password is required </Span>}
          </InputGroupe>
          <InputGroupe>
            <Button type={"submit"}> Register </Button>
          </InputGroupe>
          <AccountDesc>
            Already Have account ? <Link to="/signin">Sign in </Link>
          </AccountDesc>
        </Form>
      </Wrapper>
    </Container>
  );
};
