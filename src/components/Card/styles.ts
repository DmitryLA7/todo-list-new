import styled from "styled-components";
import { CardProps } from "./types";

export const StyledCard = styled.div<{ $styles?: CardProps['styles'] }>`
    padding: 20px;
    background-color: #fff;
    border-radius: 21px;
    box-shadow: 0px 4px 18px 0px #00000010;

    ${props => props.$styles}
`