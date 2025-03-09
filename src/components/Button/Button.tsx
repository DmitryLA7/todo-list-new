"use client";

import type { ButtonProps } from "./types";

import { StyledButton } from "./styles";

const Button = ({
  children,
  colorScheme = "default",
  styles,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props} $colorScheme={colorScheme} $styles={styles}>
      {children}
    </StyledButton>
  );
};

export default Button;
