import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export interface IconButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof iconButtonStyle> {
  children: React.ReactNode;
}

const iconButtonStyle = cva('rounded-xl p-1', {
  variants: {
    iconColor: {
      white: 'fill-white',
      stroke: 'fill-stroke',
      highlight: 'fill-highlight',
      secondary: 'fill-secondary',
      disabled: 'fill-disabled',
      background: 'fill-background',
    },
    backgroundColor: {
      highlight: 'bg-highlight',
      secondary: 'bg-secondary',
      disabled: 'bg-disabled',
      transparent: 'bg-transparent',
      background: 'bg-background',
    },
    active: {
      false: 'bg-transparent fill-disabled shadow-none',
      true: 'shadow',
    },
  },
  defaultVariants: {
    iconColor: 'white',
    backgroundColor: 'highlight',
    active: true,
  },
});

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  iconColor,
  backgroundColor,
  active,
  ...props
}) => {
  return (
    <>
      <button
        className={iconButtonStyle({ iconColor, backgroundColor, active })}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
