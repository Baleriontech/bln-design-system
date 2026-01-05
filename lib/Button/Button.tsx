import { cn } from "../utills/cn"
import { BUTTON_BASE_STYLE, BUTTON_VARIANT_STYLE } from "./Button.constants"
import type { IButtonProps } from "./Button.types"

const Button: React.FC<IButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary' 
}) => {
  
  return (
    <button className={cn(BUTTON_BASE_STYLE, BUTTON_VARIANT_STYLE[variant], className)}>
      { children }
    </button>
  )
}

export default Button