{/*IMPORTS */}

import styled from "styled-components";
import { getCharacters } from "../../utils/getCharacters";
import { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard";
import { IoArrowForward, IoArrowBackOutline } from "react-icons/io5";
import { ButtonScroll } from "../../components/Button";

{/*STYLED COMPONENTS */}
const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-wrap: nowrap;
  padding: 1rem;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const ContainerCards = styled.div`
  display: flex;
  gap: 2rem;
  height: auto;
  justify-content: center;
  align-items: center;
`;

interface Character {
  id: number;
  name: string;
  description: string;
  rating: number;
  details: {
    movies: string[];
  };
  imageUrl: string;
  filmAppearences:string[];
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [limits, setLimits] = useState({start: 0, end:3});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCharacters();
        setCharacters(result);
        console.log("Dados obtidos:", result);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  {/*MANTENDO O CARROSEL DE CARDS CICLICO  */}
  const handleLimitsForward = () => {
    setLimits((prevLimits) => {
      const newStart = prevLimits.start + 1;
      const newEnd = prevLimits.end + 1;

      if (newEnd > characters!.length) {
        return { start: 0, end: 3 };
      }

      return { start: newStart, end: newEnd };
    });
  };

  const handleLimitsBackward = () => {
    setLimits((prevLimits) => {
      const newStart = prevLimits.start - 1;
      const newEnd = prevLimits.end - 1;

      if (newStart < 0) {
        return {
          start: characters!.length - 3,
          end: characters!.length,
        };
      }

      return { start: newStart, end: newEnd };
    });
  };

  



  return (
    <Container>
      <ButtonScroll onClick={handleLimitsForward}>
          <IoArrowBackOutline />
      </ButtonScroll>
      <ContainerCards>

 
      {characters?.length ? (
        characters
          .slice(limits.start, limits.end)
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
      ) : (
        <p>Nenhum personagem encontrado.</p>
      )}

      
      </ContainerCards>
      <ButtonScroll onClick={handleLimitsBackward}>
        <IoArrowForward />
      </ButtonScroll>
    </Container>
  );
};
export default Characters;
