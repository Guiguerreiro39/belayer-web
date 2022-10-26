import React from 'react';
import { bgColor, fillColor, activeColor, hoverColor } from '../common/colors';

export interface ClickableIconProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string;
  backgroundColor?: string;
  active?: boolean;
}

export const ClickableIcon: React.FC<ClickableIconProps> = ({
  children,
  color = 'white',
  backgroundColor = 'highlight',
  className = '',
  active = true,
  ...props
}) => {
  const colorClassName = `${bgColor[backgroundColor] ?? ''} ${
    fillColor[color] ?? ''
  } ${hoverColor[backgroundColor] ?? ''} ${
    activeColor[backgroundColor] ?? ''
  } shadow`;
  const defaultClassName = 'rounded-xl p-1';
  const disabledClassName = `bg-transparent fill-disabled`;

  return (
    <button
      className={`${className} ${
        active ? colorClassName : disabledClassName
      } ${defaultClassName}`}
      {...props}
    >
      {children}
    </button>
  );
};
