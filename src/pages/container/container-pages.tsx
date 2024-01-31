import { useLocation } from "react-router-dom";
import Characters from '../private/Characters'
import Movie from '../private/Movies'
import HQs from '../private/HQs'
import styled from "styled-components";
import Navbar from "../../routes/Navbar";

const Main = styled.main`
  width:100vw;
  height: 100vh;
`;

export default function Container() {
  const location = useLocation();
  return (
    <>
    <Navbar/>{/*NAVBAR MANTEM FIXA */}
      <Main>
        {/*PÁGINAS RENDERIZADAS DENTRO DE UM CONTAINER PRINCIPAL */}
        {location.pathname === "/personagens" && <Characters />}
        {location.pathname === '/filmes' && <Movie/>}
        {location.pathname === '/hq' && <HQs/>}
      </Main>
    </>
  );
}