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

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.div``;

const Description = styled.div``;

const SocialsContainer = styled.div``;

const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.div``;

const List = styled.div``;

const ListItem = styled.div``;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div``;

const Payment = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Header>GAMES.</Header>
        <Description></Description>
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
        <Title>Contacts</Title>
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
          contact@shop.co
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
