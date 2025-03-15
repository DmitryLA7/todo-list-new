import {
  type MouseEvent as SynteticMouseEvent,
  type PropsWithChildren,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import { StyledDraggable } from "./styles";

const INIT_COORDS = {
  x: 0,
  y: 0,
} as const;

const Draggable = <Items extends unknown[]>({
  children,
  index,
  toggleItems,
}: PropsWithChildren<{
  index: number;
  toggleItems: (callback: (t: Items) => Items) => void;
}>) => {
  const [isDragging, setIsDragging] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>(INIT_COORDS);
  const ref = useRef<HTMLDivElement>(null);
  const initElementCoordsRef = useRef<{ x: number; y: number }>(INIT_COORDS);

  const onMouseDown = ({
    pageX,
    pageY,
  }: SynteticMouseEvent<HTMLDivElement>) => {
    if (window.getSelection()?.toString()) return;

    initElementCoordsRef.current = { x: pageX, y: pageY };
    toggleCaptured();
  };

  const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
    if (!isDragging) return;
    const nextSibling = ref.current?.nextSibling as HTMLElement;
    const prevSibling = ref.current?.previousSibling as HTMLElement;

    if (
      nextSibling &&
      isOffsetToMiddleOfSibling(nextSibling)((v) => pageY >= v)
    ) {
      updateYAxisOffset(pageY);
      toggleItems(
        (p) => p.toSpliced(index, 2, p[index + 1], p[index]) as Items
      );
    } else if (
      prevSibling &&
      isOffsetToMiddleOfSibling(prevSibling)((v) => pageY <= v)
    ) {
      updateYAxisOffset(pageY);
      toggleItems(
        (p) => p.toSpliced(index - 1, 2, p[index], p[index - 1]) as Items
      );
    }

    setCoords({
      x: pageX - initElementCoordsRef.current.x,
      y: pageY - initElementCoordsRef.current.y,
    });
  };

  const isOffsetToMiddleOfSibling =
    (sibling: HTMLElement) => (validatior: (n: number) => boolean) =>
      validatior(sibling.offsetTop + sibling.clientHeight / 2);

  const updateYAxisOffset = (y: number) => {
    initElementCoordsRef.current = {
      x: initElementCoordsRef.current.x,
      y,
    };
  };

  const toggleCaptured = () => setIsDragging((p) => !p);

  const onMouseUp = () => {
    resetDrag();
  };

  const resetDrag = () => {
    if (window.getSelection()?.toString()) return;

    initElementCoordsRef.current = INIT_COORDS;

    toggleCaptured();
    setCoords(INIT_COORDS);
  };

  return (
    <StyledDraggable
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onDrag={onMouseDown}
      onMouseMove={onMouseMove}
      $captured={isDragging}
      $x={coords.x}
      $y={coords.y}
    >
      {children}
    </StyledDraggable>
  );
};

export default Draggable;
