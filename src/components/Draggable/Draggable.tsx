import {
  MouseEvent,
  PropsWithChildren,
  RefObject,
  useRef,
  useState,
} from "react";
import { StyledDraggable } from "./styles";

const INIT_COORDS = {
  x: 0,
  y: 0,
} as const;

const Draggable = ({
  children,
  containerRef,
}: PropsWithChildren<{ containerRef: RefObject<HTMLDivElement | null> }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>(INIT_COORDS);

  const onMouseDown = ({ clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    toggleCaptured();

    const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
      if (ref.current) {
        setCoords({
          x: pageX - clientX,
          y: pageY - clientY,
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
  };

  const toggleCaptured = () => setIsCaptured((p) => !p);

  //   const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
  //     setCoords({ x: pageX - (clientX - left), y: pageX - (clientY - top) });
  //   };
  //   console.log(coords);
  const onMouseUp = () => {
    toggleCaptured();
    setCoords(INIT_COORDS);
    // document.removeEventListener("mousemove", onMouseMove);
  };

  //   useEffect(() => {
  //     document.addEventListener("mousemove", onMouseMove);
  //     document.addEventListener("mouseup", onMouseUp);

  //     return () => {
  //       document.removeEventListener("mousedown", onMouseMove);
  //       document.addEventListener("mouseup", onMouseUp);
  //     };
  //   }, [isCaptured]);

  return (
    <StyledDraggable
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onDrag={(e) => {
        e.preventDefault();
      }}
      $captured={isCaptured}
      $x={coords.x}
      $y={coords.y}
    >
      {children}
    </StyledDraggable>
  );
};

export default Draggable;
