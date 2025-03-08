import type { CardProps } from "./types";

import { StyledCard } from "./styles";

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
