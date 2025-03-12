import styled, { css } from "styled-components";


import { device } from "@/styles/breakpoints";
import { PADDINGS } from "@/styles/containers";

export const Wrapper = styled.div`
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

export const Sticky = styled.div`
    position: sticky;
    top: 0;
    margin-top: -${PADDINGS.sm}px;
    margin-left: -${PADDINGS.sm}px;
    padding: 0 ${PADDINGS.sm}px;
    padding-top: ${PADDINGS.sm}px;
    padding-bottom: 20px;
    background: #fff;
    width: calc(100% + ${PADDINGS.sm * 2}px);

    @media ${device.tablet} { 
        margin-top: -${PADDINGS.xl}px;
        margin-left: -${PADDINGS.xl}px;
        padding: 0 ${PADDINGS.xl}px;
        padding-top: ${PADDINGS.xl}px;
        padding-bottom: 20px;
        width: calc(100% + ${PADDINGS.xl * 2}px);
    }
`