import styled from 'styled-components';
import { platforms } from '../data';
import Platform from './Platform';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Platforms = () => {
  return (
    <Container>
      {platforms.map((platform) => (
        <Platform platform={platform} key={platform.id} />
      ))}
    </Container>
  );
};

export default Platforms;
