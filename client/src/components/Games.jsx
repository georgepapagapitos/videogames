import styled from 'styled-components';
import { games } from '../data';

// Local imports
import Game from './Game';

// Styled components
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Games component
const Games = () => {
  return (
    <Container>
      {games.slice(0, 8).map((game) => (
        <Game game={game} key={game.id} />
      ))}
    </Container>
  );
};

export default Games;
