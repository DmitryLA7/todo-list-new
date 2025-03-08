import { type ButtonHTMLAttributes } from "react";

export enum ButtonColorsSchemes {
    DEFAULT = 'default',
    GREEN = 'green',
    RED = 'red'
}

export type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children' | 'disabled'> & Partial<{ colorScheme: ButtonColorsSchemes }>