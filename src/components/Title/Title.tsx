import type { TitleProps } from "./types";

import { StyledTitle } from "./styles";

const Title = ({ children, level = "h1", styles }: TitleProps) => {
  return (
    <StyledTitle $level={level} $styles={styles}>
      {children}
    </StyledTitle>
  );
};

export default Title;
