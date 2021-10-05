import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { mobile } from '../responsive';

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
  ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })};
`;

const Option = styled.option``;

const GameList = () => {
  const location = useLocation();
  const platformId = location.pathname.split('/')[2];

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
