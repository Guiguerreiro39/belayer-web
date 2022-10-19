import React from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: string;
    textColor?: string;
    outline?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
