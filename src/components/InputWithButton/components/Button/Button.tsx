import type { ButtonProps } from "./types";

import {Plus} from "@/assets/svg";

import { StyledButton } from "./styles";

const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <Plus />
    </StyledButton>
  );
};

export default Button;
