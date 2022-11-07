import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface CardProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof cardStyle> {
  children: React.ReactNode;
}

const cardStyle = cva('bg-white rounded-lg shadow px-4 py-2');

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={
        (className && className.length > 0 ? className + ' ' : '') + cardStyle()
      }
      {...props}
    >
      {children}
    </div>
  );
};
