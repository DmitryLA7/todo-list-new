import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ResizableInputProps } from "./types";

import { Wrapper, Buffer, Input } from "./styles";

const ResizableInput = ({
  value,
  onChangeValue,
  defaultValue,
}: ResizableInputProps) => {
  const [width, setWidth] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (bufferRef.current) setWidth(bufferRef.current?.clientWidth);
  }, [value]);

  useEffect(() => {
    return () => {
      onChangeValue(defaultValue);
    };
  }, []);

  return (
    <Wrapper>
      <Input
        ref={inputRef}
        placeholder="Введите описание"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        $width={width}
        type="text"
      />
      <Buffer ref={bufferRef}>{value}</Buffer>
    </Wrapper>
  );
};

export default ResizableInput;
