import { type ButtonHTMLAttributes } from "react";
import { type Interpolation } from "styled-components";

type ColorsSchemes = 'default' | 'green' | 'red'

export type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children' | 'disabled'> & Partial<{ colorScheme: ColorsSchemes; styles: Interpolation<React.CSSProperties>; isActive: boolean }>