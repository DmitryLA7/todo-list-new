import styled, { css } from "styled-components";


import { device } from "@/styles/breakpoints";

export const Page = styled.div`
    padding: 30px 0;

    @media ${device.tablet} { 
        padding: 100px 0;
    }
`

export const pageTitle = css`
    margin-bottom: 17px;
    text-align: center;
`

export const addTodo = css`
    margin-bottom: 30px;
`

export const filters = css`
    margin-bottom: 20px;
`