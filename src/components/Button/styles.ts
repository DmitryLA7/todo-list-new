import styled, { css } from "styled-components";

import type { ButtonProps } from "./types";

const SCHEMES: Record<NonNullable<ButtonProps['colorScheme']>, ReturnType<typeof css>> = {
  default: css`
    border-color: #30324B;
    color: '#30324B';

    &:active {
      background-color: #30324B;
      color: #fff;
    };

    &:hover {
      background-color: #575A84;
      color: #fff;
    }

    &:focus {
      background-color: #30324B;
      border-color: #A4A4A4;
      color: #fff;
    }
  `,
  green: css`
    border-color: #6AD400;
    color: #6AD400;

    &:active {
      background-color: #6AD400;
      color: #fff;
    };

    &:hover {
      background-color: #CEFF9D;
      color: #6AD400;
    }

    &:focus {
      background-color: #6AD400;
      border-color: #CEFF9D;
      color: #fff;
    }
  `,
  red: css`
    border-color: #FF2F2F;
    color: #FF2F2F;

    &:active, &:target {
      background-color: #FF2F2F;
      color: #fff;
    };

    &:hover {
      background-color: #FFB8B8;
      color: #FF2F2F;
    }

    &:focus {
      background-color: #FF2F2F;
      border-color: #FFB8B8;
      color: #fff;
    }
  `
}

export const StyledButton = styled.button<{ $colorScheme: NonNullable<ButtonProps['colorScheme']>; $styles?: ButtonProps['styles'] }>`
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  transition: color 0.2s ease-in, background-color 0.2s ease-in, border-color 0.2s ease-in;
  cursor: pointer;

  &:disabled {
    background-color: #fff;
    border-color: #fff;
    color: #F2F3F5;
  }

  ${(props) => SCHEMES[props.$colorScheme]}
  ${(props) => props.$styles}
`;
