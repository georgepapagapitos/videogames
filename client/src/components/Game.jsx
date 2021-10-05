import styled from 'styled-components';

// mui imports
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

// Styled components
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.25s ease;

  &:hover {
    background-color: coral;
    transform: scale(1.1);
  }
`;

// Game component
const Game = ({ game }) => {
  return (
    <Container>
      <Image src={game.image} />
      <Info>
        <Icon>
          <RedeemOutlinedIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Game;
