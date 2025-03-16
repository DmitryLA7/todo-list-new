import styled from "styled-components";

import { device } from "@/styles/breakpoints";

export const StyledDraggable = styled.div<{ $x: number, $y: number, $captured: boolean }>`
    position: relative;

    ${props => props.$captured ? { top: props.$y, left: props.$x, userSelect: 'none', zIndex: 1 } : undefined}
`

export const IconDrag = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    padding: 10px;
    touch-action: none;

    @media ${device.tablet} {
        display: none;
    }
`