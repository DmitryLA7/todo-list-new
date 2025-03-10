import { useLayoutEffect, useRef, useState } from "react";

import { Wrapper, Buffer, Input } from "./styles";

const ResizableInput = () => {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (bufferRef.current) setWidth(bufferRef.current?.clientWidth);
  }, [text]);

  return (
    <Wrapper>
      <Input
        ref={inputRef}
        placeholder="test"
        onChange={(e) => setText(e.target.value)}
        $width={width}
      />
      <Buffer ref={bufferRef}>{text}</Buffer>
    </Wrapper>
  );
};

export default ResizableInput;
