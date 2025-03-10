import styled, { css } from "styled-components";

import type { FiltersProps } from "./types";

export const Wrapper = styled.div<{ $styles?: FiltersProps['styles'] }>`
    display: flex;
    column-gap: 12px;
    overflow-x: auto;

    ${props => props.$styles}
`

export const filterButton = css`
    white-space: nowrap;
`