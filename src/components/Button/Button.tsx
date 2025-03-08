"use client";

import { ButtonColorsSchemes, type ButtonProps } from "./types";

import { StyledButton } from "./styles";

const Button = ({
  children,
  colorScheme = ButtonColorsSchemes.DEFAULT,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props} $colorScheme={colorScheme}>
      {children}
    </StyledButton>
  );
};

export default Button;
