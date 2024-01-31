import styled from "styled-components";
import { Theme } from "../theme/theme";

export const Button = styled.button<{$primary?: boolean;}>`
    height:3.5rem;
    border-radius:2rem;
    border: none;
    font-weight: bold;
    color:white;
    background: ${props => props.$primary ? Theme.colors.primary : '' };

    &:hover{
        background:${props => props.$primary ? Theme.colors.gradient : '' };
    }

`

export const ButtonText = styled.button`
 
 background-color: transparent;
 color: white;
 border: none;
 height: 2rem;
 text-decoration:underline ${Theme.colors.primary};
 cursor:pointer;


`

export const ButtonScroll = styled(ButtonText)`
    text-decoration:none;
    color: ${Theme.colors.primary};
    display: flex;
`