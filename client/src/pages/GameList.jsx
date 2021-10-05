import styled from 'styled-components';

// Local imports
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Games from '../components/Games';

// Styled components
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const GameList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>PLATFORM NAME</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Games:</FilterText>
          <Select name="esrbRating">
            <Option selected disabled>
              ESRB
            </Option>
            <Option>Everyone</Option>
            <Option>Teen</Option>
            <Option>Mature</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Games:</FilterText>
          <Select>
            <Option value="highest">Highest Rated</Option>
            <Option value="lowest">Lowest Rated</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Games />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default GameList;
