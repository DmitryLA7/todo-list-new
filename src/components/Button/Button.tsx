"use client";

import type { ButtonProps } from "./types";

import { StyledButton } from "./styles";

const Button = ({
  children,
  colorScheme = "default",
  styles,
  isActive,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      className={isActive ? "active" : ""}
      $colorScheme={colorScheme}
      $styles={styles}
      $activeCLassName={isActive ? "active" : ""}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
