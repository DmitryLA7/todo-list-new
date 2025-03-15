import {
  type MouseEvent as SynteticMouseEvent,
  type PropsWithChildren,
  useRef,
  useState,
  type MouseEvent,
  useEffect,
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
  onDragEnd,
  dragBlocked,
}: PropsWithChildren<{
  index: number;
  toggleItems: (callback: (t: Items) => Items) => void;
  onDragEnd: () => void;
  dragBlocked: boolean;
}>) => {
  const [isDragging, setIsDragging] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>(INIT_COORDS);
  const ref = useRef<HTMLDivElement>(null);
  const initElementCoordsRef = useRef<{ x: number; y: number }>(INIT_COORDS);
  const timerRef = useRef<NodeJS.Timeout>(null);

  const onDragStart = ({ pageX, pageY }: { pageX: number; pageY: number }) => {
    if (window.getSelection()?.toString() || dragBlocked) return;

    initElementCoordsRef.current = { x: pageX, y: pageY };
    setIsDragging(true);
  };

  const onDragMove = ({ pageX, pageY }: { pageX: number; pageY: number }) => {
    if (!isDragging || dragBlocked) return;
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

  const handleOnDragEnd = () => {
    resetDrag();
    onDragEnd();
  };

  const resetDrag = () => {
    if (window.getSelection()?.toString()) return;

    initElementCoordsRef.current = INIT_COORDS;

    setIsDragging(false);
    setCoords(INIT_COORDS);
  };

  useEffect(() => {
    if (isDragging && !dragBlocked) {
      window.addEventListener("touchmove", preventTouchScroll, {
        passive: false,
      });

      return () => {
        window.removeEventListener("touchmove", preventTouchScroll);
      };
    }
  }, [isDragging, dragBlocked]);

  const preventTouchScroll = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
  };

  const handleToucheStart = ({
    pageX,
    pageY,
  }: {
    pageX: number;
    pageY: number;
  }) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      console.log("lets roll");
      onDragStart({ pageX, pageY });
    }, 300);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, [dragBlocked]);

  return (
    <StyledDraggable
      ref={ref}
      onMouseDown={onDragStart}
      onTouchStart={(e) =>
        handleToucheStart({
          pageX: e.touches[0].pageX,
          pageY: e.touches[0].pageY,
        })
      }
      onMouseMove={isDragging ? onDragMove : undefined}
      onTouchMove={(e) => {
        onDragMove({ pageX: e.touches[0].pageX, pageY: e.touches[0].pageY });
      }}
      onTouchEnd={handleOnDragEnd}
      onMouseUp={handleOnDragEnd}
      onMouseLeave={handleOnDragEnd}
      $captured={isDragging}
      $x={coords.x}
      $y={coords.y}
    >
      {children}
    </StyledDraggable>
  );
};

export default Draggable;
