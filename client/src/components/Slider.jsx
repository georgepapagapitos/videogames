import styled from 'styled-components';
import {
  ArrowLeftOutlinedIcon,
  ArrowRightOutlinedIcon,
} from '@mui/icons-material';

const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Arrow = styled.div``;

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
