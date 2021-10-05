import styled from 'styled-components';
import { mobile } from '../responsive';

// mui imports
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Heading = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px', marginLeft: '10px' })};
  cursor: pointer;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: '2', justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search..." />
            <SearchIcon style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Heading>GAMES.</Heading>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem>LOG IN</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
