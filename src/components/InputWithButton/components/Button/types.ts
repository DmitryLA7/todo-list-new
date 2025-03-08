import { type ButtonHTMLAttributes } from "react";

export type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>
