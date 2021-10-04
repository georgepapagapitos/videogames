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
`;

// Slider component
const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Arrow>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
