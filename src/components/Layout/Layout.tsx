import { PropsWithChildren } from "react";

import { Container, StyledLayout } from "./styles";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout>
      <Container>{children}</Container>
    </StyledLayout>
  );
};

export default Layout;
