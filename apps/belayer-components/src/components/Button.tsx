import React from 'react'

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string
  textColor?: string
  outline?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, textColor } = props

  const className = `bg-${color} text-${textColor}`

  return (
    <button className={`${className} ${props.className}`} {...props}>
      {children}
    </button>
  )
}
