import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

export interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputStyles> {
  label?: string;
}

const inputStyles = cva(
  'block w-full rounded-md border-secondary-600 text-stroke placeholder:text-stroke-200 sm:text-sm',
  {
    variants: {
      focusColor: {
        highlight: 'focus:border-highlight focus:ring-highlight',
        secondary: 'focus:border-secondary focus:ring-secondary',
        disabled: 'focus:border-disabled focus:ring-disabled',
        transparent: 'focus:border-transparent focus:ring-transparent',
        background: 'focus:border-background focus:ring-background',
      },
      backgroundColor: {
        highlight: 'bg-highlight',
        secondary: 'bg-secondary',
        disabled: 'bg-disabled',
        transparent: 'bg-transparent',
        background: 'bg-background',
        white: 'bg-white',
      },
      border: {
        visible: 'border',
        none: 'border-none focus:ring-0',
      },
    },
    defaultVariants: {
      focusColor: 'highlight',
      backgroundColor: 'white',
      border: 'visible',
    },
  }
);

export const Input: React.FC<InputProps> = ({
  type = 'text',
  focusColor,
  backgroundColor,
  border,
  className,
  ...props
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-stroke mb-1">
        {props.label}
      </label>
      <input
        type={type}
        className={
          (className && className.length > 0 ? className + ' ' : '') +
          inputStyles({ focusColor, backgroundColor, border })
        }
        {...props}
      />
    </div>
  );
};
