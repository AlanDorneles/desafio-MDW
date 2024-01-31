import styled from "styled-components";
import { Theme } from "../theme/theme";

export const Label = styled.label`
    font-size:0.75rem;
    color:${Theme.colors.gray}
    
`;

export const LabelError = styled(Label)`
    color: ${Theme.colors.primary};

`