import React, { type PropsWithChildren } from "react";
import { type Interpolation } from "styled-components";

export type TitleProps = PropsWithChildren<{ level: 'h1' | 'h2', } & Partial<{ styles: Interpolation<React.CSSProperties> }>> 