import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`

export const Input = styled.input<{ $width: number }>`
    border: none;
    border-bottom: 1px solid;
    border-color: #878787;
    outline: none;
    min-width: 150px;
    max-width: 100%;
    font-size: 16px;
    font-family: inherit;
    font-size: inherit;
    width: ${props => props.$width}px;
`

export const Buffer = styled.div`
    position: absolute;
    opacity: 0;
    z-index: -1;
`