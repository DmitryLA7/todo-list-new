import styled from "styled-components";

import { device } from "@/styles/breakpoints";

export const Wrapper = styled.div`
    display: flex;
    grid-gap: 5px;
`

export const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;

    @media ${device.tablet} {
        font-size: 24px
    }
`
