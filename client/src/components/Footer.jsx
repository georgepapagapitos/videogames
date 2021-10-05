import styled from 'styled-components';
import { mobile } from '../responsive';

// mui imports
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// Styled components
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column', textAlign: 'center' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialsContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

// Footer component
const Footer = () => {
  return (
    <Container>
      <Left>
        <Header>GAMES.</Header>
        <Description>
          Videogames are a great way to avoid responsibilites and distract
          yourself from the pain of reality.
        </Description>
        <SocialsContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialsContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>My Favorites</ListItem>
          <ListItem>Popular Games</ListItem>
          <ListItem>Newest Games</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Info</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          123 Street Avenue, West City 54321
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          555 123 4567
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: '10px' }} />
          contact@games.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
