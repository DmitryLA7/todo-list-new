import { type PropsWithChildren } from "react";
import { type Interpolation } from "styled-components";

export type CardProps = PropsWithChildren<Partial<{ styles: Interpolation<React.CSSProperties> }>>