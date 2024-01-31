import React from "react";
import styled from "styled-components";
import { Theme } from "../theme/theme";
import { ButtonText } from "./Button";
import { TextDescription } from "./Texts";
import { TitleH2 } from "./Titles";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { List } from "./List";


interface CharacterCardProps {
    character: {
    id: number;
    name: string;
    description: string;
    rating: number;
    filmAppearences: string[];
    imageUrl: string;
  },
}

const CardContainer = styled.div<{ isExpanded: boolean }>`
  border-radius: 2em;
  max-width: ${({ isExpanded }) => (isExpanded ? "540px" : "289px")};
  position: ${({ isExpanded }) => (isExpanded ? "initial" : "relative")};
  transition: all 0.5s ease-in-out;
  display: ${({ isExpanded }) => (isExpanded ? "flex" : "initial")};
  z-index: ${({ isExpanded }) => (isExpanded ? "40" : "auto")};
`;

const Image = styled.div<{ isExpanded: boolean }>`
  object-fit: contain;
  width: 100%;
`;

const DescriptionContainer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${Theme.colors.gradient};
  color: white;
  border-radius: ${({ isExpanded }) => (isExpanded ? "0em" : "2em")};
  padding: 1rem;
  z-index: 2;
  height:  ${({ isExpanded }) => (isExpanded ? "auto" : "16em")};;
  position: ${({ isExpanded }) => (isExpanded ? "initial" : "absolute")};
  text-overflow: ellipsis;
  overflow: hidden;
  bottom: 0;
  transition: height 0.5s ease-in-out;
`;
const Rating = styled.div`
  display: flex;
  color: ${Theme.colors.rating};
  align-items: center;
  justify-content: center;
`;

const MoreDetails = styled.div<{ isExpanded: boolean }>`
  display: ${({ isExpanded }) => (isExpanded ? "initial" : "none")};
`;
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullStars = Math.floor(character.rating);
  const hasHalfStar = character.rating - fullStars >= 0.5;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <div key={index}>
      <FaStar />
    </div>
  ));

  if (hasHalfStar) {
    stars.push(
      <div key="half-star">
        <FaStarHalfAlt />
      </div>
    );
  }

  return (
    <CardContainer isExpanded={isExpanded}>
      <Image isExpanded={isExpanded}>
        <img src={character.imageUrl} alt={`${character.name}`} />
      </Image>

      <DescriptionContainer isExpanded={isExpanded}>
        <TitleH2>{character.name}</TitleH2>
        <TextDescription>{character.description}</TextDescription>
        <MoreDetails isExpanded={isExpanded}>
          <p>Aparições</p>
          <List>
            {character.filmAppearences.map((appearence) => (
              <li>{appearence}</li>
            ))}
          </List>
          <TitleH2>Avaliação dos fãs</TitleH2>
          <Rating>{stars}</Rating>
        </MoreDetails>
        <ButtonText onClick={toggleExpand}>{isExpanded ? "Ocultar detalhes" : "Ver detalhes"}</ButtonText>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default CharacterCard;
