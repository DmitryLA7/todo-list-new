import { Button } from "./components";

import { Input, Wrapper } from "./styles";

const InputWithButton = () => {
  return (
    <Wrapper>
      <Input placeholder="Some" />
      <Button />
    </Wrapper>
  );
};

export default InputWithButton;
