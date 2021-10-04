import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: coral;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>VIDEOGAMES ARE A GREAT WAY TO ESCAPE REALITY!</Container>;
};

export default Announcement;
