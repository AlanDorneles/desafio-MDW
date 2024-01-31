import styled from "styled-components";
import { Theme } from "../theme/theme";

const colors = Theme.colors;

export const TitleH3 = styled.h3`
  color: ${colors.primary};
  text-align: center;
`;

export const TitleH2 = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom:1rem
`;
