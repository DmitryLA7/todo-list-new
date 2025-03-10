import styled, { css } from "styled-components";

import type { TodoStatus } from "@/types/todo";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const StyledTodo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    column-gap: 30px;
    align-items: center;
    overflow: hidden;
`

export const StatusButton = styled.button<{ $status: TodoStatus; }>`
    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    max-height: 20px;
    border: 1px solid;
    background-color: #fff;
    border-color: #A4A4A4;
    border-radius: 100%;
    cursor: pointer;
    transition: color .2s ease-in, background-color .2s ease-in;

    &:hover {
        background-color: #D9D9D9;
    }

    ${props => BUTTON_STATUS[props.$status]}
`

const BUTTON_STATUS: Partial<{ [key in TodoStatus]: ReturnType<typeof css> }> = {
    done: css`
        background-color: #6AD400;
        border-color: #6AD400;

        &:hover {
            background-color: #CEFF9D;
        }
    `
}

export const Description = styled.div<{ $status: TodoStatus }>`
    ${props => DESCRIPTION_STATUS[props.$status]}
`

const DESCRIPTION_STATUS: Partial<{ [key in TodoStatus]: ReturnType<typeof css> }> = {
    done: css`
        text-decoration:  line-through;
    `,
}