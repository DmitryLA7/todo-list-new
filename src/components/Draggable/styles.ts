import styled from "styled-components";

export const StyledDraggable = styled.div<{ $x: number, $y: number, $captured: boolean }>`
    position: relative;
    ${props => props.$captured ? { top: props.$y, left: props.$x, userSelect: 'none', zIndex: 2 } : undefined}
`