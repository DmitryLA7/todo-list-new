import { CONTAINERS, PADDINGS } from "@/styles/containers";
import styled from "styled-components";

export const StyledLayout = styled.div`
    min-height: 100svh;
`
export const Container = styled.main`
    margin: auto;
    padding: ${PADDINGS.sm}px;
    max-width: ${CONTAINERS.xl}px;
`