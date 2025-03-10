import type { CardProps } from "./types";

import { StyledCard } from "./styles";

const Card = ({ children, styles }: CardProps) => {
  return <StyledCard $styles={styles}>{children}</StyledCard>;
};

export default Card;
