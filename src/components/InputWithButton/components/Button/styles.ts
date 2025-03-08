
import styled from "styled-components";

export const StyledButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    max-width: 38px;
    min-height: 32px;
    max-height: 32px;
    background-color: transparent;
    border: 1px solid #30324B;
    border-radius: 6px;
    outline: none;
    cursor: pointer;

    &:active, &:hover, &:focus {
        color: #fff;
    }

    &:active {
      background-color: #30324B;
    };

    &:hover {
      background-color: #575A84;
    }

    &:focus {
      background-color: #30324B;
      border-color: #A4A4A4;
    }
`
