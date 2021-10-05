import styled from 'styled-components';

// mui imports
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1``;

const Description = styled.div``;

const InputContainer = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Title></Title>
      <Description></Description>
      <InputContainer>
        <Input />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
