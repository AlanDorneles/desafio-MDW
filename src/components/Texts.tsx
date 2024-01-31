import styled from "styled-components";
import { Theme } from "../theme/theme";

const colors = Theme.colors

export const Text = styled.h3<{$primary?:boolean}>`
    font-size:1.25rem;
    text-align: center;
    color:white;
`

export const TextGray = styled(Text)`
    color:${colors.gray}
`

export const TextDescription = styled(Text)`
    font-size:0.75rem;
    text-align:justify;
    text-overflow:ellipsis;
    overflow: hidden;
    width: 100%;
`