import { useState } from "react";

import { Button } from "./components";

import type { InputWithButtonProps } from "./types";

import { Input, Wrapper } from "./styles";

const InputWithButton = ({ onAdd, placeholder }: InputWithButtonProps) => {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    onAdd(text);
    setText("");
  };

  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button onClick={handleOnClick} disabled={!text} />
    </Wrapper>
  );
};

export default InputWithButton;
