import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  ${mobile({ height: '30vh' })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 20px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Platform = ({ platform }) => {
  return (
    <Container>
      <Image src={platform.image} />
      <Info>
        <Title>{platform.name}</Title>
        <Button>FIND GAMES</Button>
      </Info>
    </Container>
  );
};

export default Platform;
