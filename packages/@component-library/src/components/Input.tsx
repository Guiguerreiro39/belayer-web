import React from 'react';
import { bgColor, outlineColor } from '../common/colors';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  focusColor?: string;
  backgroundColor?: string;
}

export const Input: React.FC<InputProps> = ({
  className = '',
  focusColor = 'highlight',
  backgroundColor = 'background',
  ...props
}) => {
  const colorClassName = [
    outlineColor[focusColor] ?? 'outline-higlight',
    bgColor[backgroundColor] ?? 'bg-background',
  ];
  const defaultClassName = 'py-1 px-4 rounded-lg border text-stroke text-sm';

  return (
    <input
      className={`${className} ${colorClassName.join(' ')} ${defaultClassName}`}
      {...props}
    />
  );
};
