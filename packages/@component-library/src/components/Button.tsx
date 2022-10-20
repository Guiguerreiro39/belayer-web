import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string;
  textColor?: string;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, textColor } = props;

  const className = `text-${textColor ?? 'white'}`;

  return (
    <button
      className={`bg-red-600 ${className} ${props.className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
