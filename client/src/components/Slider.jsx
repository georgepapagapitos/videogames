import styled from 'styled-components';

// mui imports
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

// Styled components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffffe2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div``;

const Slide = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.img``;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Description = styled.p``;

const Button = styled.button``;

// Slider component
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <InfoContainer>
            <Title>GAME TITLE</Title>
            <Description>GAME DESCRIPTION</Description>
            <Button>MORE INFO</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
