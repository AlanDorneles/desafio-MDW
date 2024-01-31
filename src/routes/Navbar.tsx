import { Link } from "react-router-dom";
import marvel from "../../public/marvel-logo.svg";
import styled from "styled-components";
import { Theme } from "../theme/theme";
import { ButtonText } from "../components/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 128px;
  flex-shrink: 0;
`;
const ContainerLinks = styled.div`
  display: flex;
  gap: 2em;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${Theme.colors.gray} !important;
`;

const AvatarContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const DetailsNavbar = styled.div`
display: block;
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const Navbar = () => {

  {/*SAIR DA APLICAÇÃO */}

  const signout = () => {
    localStorage.setItem('flag', 'false')
  }

  return (
    <Container>
      <Logo src={marvel} alt="marvel-logo" />
      <ContainerLinks>
        <Link to="/personagens">Personagens</Link>
        <Link to="/filmes">Filmes</Link>
        <Link to="/hq">HQs</Link>
      </ContainerLinks>
      <AvatarContainer>
        <Avatar src="https://media.licdn.com/dms/image/D5603AQFGh6LCeDFqCw/profile-displayphoto-shrink_800_800/0/1681310678292?e=1712188800&v=beta&t=HLpDbcNQ05kxJ6poaEPR6odWBgL7Bpkn-rAXve7i_Jo" />
        <DetailsNavbar>
          <Link to='/'>
            <ButtonText onClick={signout} >Sair</ButtonText>
          </Link>
        </DetailsNavbar>
        
      </AvatarContainer>
    </Container>
  );
};

export default Navbar;
