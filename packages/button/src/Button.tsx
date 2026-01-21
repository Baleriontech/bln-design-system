'use client';
// for support serverside
import "./Button.css"

import { buttonVariants } from "./Button.constants"
import type { IButtonProps } from "./Button.types"

const Button: React.FC<IButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props
}) => {
  
  return (
    <button className={buttonVariants({ variant, className })} {...props}>
      { children }
    </button>
  )
}

export default Button