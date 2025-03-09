import { device } from "@/styles/breakpoints";
import { C_DARK_THEME, C_ERROR } from "@/styles/theme";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    column-gap: 22px;
    row-gap: 12px;

    @media ${device.tablet} { 
        column-gap: 12px;
    }
`

export const Button = styled.button<{ $type: 'edit' | 'delete' | 'save' }>`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    
    &:focus {
        background-color: #A4A4A4;
    }

    &:disabled {
        color: #A4A4A4;
    }

    ${props => BUTTON_TYPE[props.$type]}
`

const BUTTON_TYPE: Record<'edit' | 'delete' | 'save', ReturnType<typeof css>> = {
    edit: css`
        display: flex;
        color: ${C_DARK_THEME};

        /* &:active {
            color: #0013FF;
        } */
        &:hover {
            color: #606492;
        }

    `,
    delete: css`
        display: flex;
        color: ${C_ERROR};

        &:hover {
            color: #FF9B9B;
        }
    `,
    save: css`
        color: #0013FF;
    `
} 
