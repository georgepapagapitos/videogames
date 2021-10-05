import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://wallpaperaccess.com/full/2645205.jpg') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: coral;
  ${mobile({ width: '75%' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: white;
  letter-spacing: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: '75%' })};
`;

const StyledLink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  letter-spacing: 2px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOG IN</Button>
          <StyledLink>FORGOT PASSWORD?</StyledLink>
          <Link to="/register">
            <StyledLink>CREATE AN ACCOUNT</StyledLink>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
