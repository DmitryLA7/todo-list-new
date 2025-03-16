import styled, { css } from "styled-components";

import type { ButtonProps } from "./types";

const SCHEMES: ($activeCLassName?: string) => Record<NonNullable<ButtonProps['colorScheme']>, ReturnType<typeof css>> = ($activeCLassName
) => ({
  default: css`
    border-color: #30324B;
    color: #30324B;

    &:active, &.${$activeCLassName} {
      background-color: #30324B;
      color: #fff;
    };

    &:not(:active, .${$activeCLassName}) {
      &:focus {
        background-color: #30324B;
        border-color: #A4A4A4;
        color: #fff;
      }
      &:hover {
        background-color: #575A84;
        color: #fff;
      }
    }
  `,
  green: css`
    border-color: #6AD400;
    color: #6AD400;

    &:active, &.${$activeCLassName} {
      background-color: #6AD400;
      color: #fff;
    };

    &:not(:active, .${$activeCLassName}) {
      &:hover {
        background-color: #CEFF9D;
        color: #6AD400;
      }

      &:focus {
        background-color: #6AD400;
        border-color: #CEFF9D;
        color: #fff;
      }
    }
  `,
  red: css`
    border-color: #FF2F2F;
    color: #FF2F2F;

    &:active, &.${$activeCLassName} {
      background-color: #FF2F2F;
      color: #fff;
    };

    &:not(:active, .${$activeCLassName}) {
      &:hover {
        background-color: #FFB8B8;
        color: #FF2F2F;
      }

      &:focus {
        background-color: #FF2F2F;
        border-color: #FFB8B8;
        color: #fff;
      }
    }
  `
})

export const StyledButton = styled.button<{ $colorScheme: NonNullable<ButtonProps['colorScheme']>; $styles?: ButtonProps['styles']; $activeCLassName?: string }>`
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  transition: color 0.2s ease-in, background-color 0.2s ease-in, border-color 0.2s ease-in;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;

  &:disabled {
    background-color: #fff;
    border-color: #fff;
    color: #F2F3F5;
  }

  ${(props) => SCHEMES(props.$activeCLassName)[props.$colorScheme]}
  ${(props) => props.$styles}
`;
