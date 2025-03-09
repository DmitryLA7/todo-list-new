import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`

export const Input = styled.input<{ $width: number }>`
    border: none;
    outline: none;
    min-width: 100px;
    max-width: 100%;
    width: ${props => props.$width}px;
`

export const Buffer = styled.div`
    position: absolute;
    opacity: 0;
    z-index: -1;
`