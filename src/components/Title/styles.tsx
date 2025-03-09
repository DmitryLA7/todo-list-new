import { type PropsWithChildren } from "react";
import styled from "styled-components";

import { C_DARK_THEME } from "@/styles/theme";

import { device } from "@/styles/breakpoints";

import type { TitleProps } from "./types";

export const StyledTitle = ({
  $level,
  $styles,
  children,
}: PropsWithChildren<{
  $level: TitleProps["level"];
  $styles: TitleProps["styles"];
}>) => {
  const Title = Titles[$level];

  return <Title $styles={$styles}>{children}</Title>;
};

const Titles = {
  h1: styled.h1<{ $styles: TitleProps["styles"] }>`
    font-size: 24px;
    line-height: 1;
    font-weight: 700;
    color: ${C_DARK_THEME};

    @media ${device.tablet} {
      font-size: 96px;
    }

    ${(props) => props.$styles}
  `,
  h2: styled.h2<{ $styles: TitleProps["styles"] }>`
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
    color: ${C_DARK_THEME};

    @media ${device.tablet} {
      font-size: 20px;
    }

    ${(props) => props.$styles}
  `,
};
