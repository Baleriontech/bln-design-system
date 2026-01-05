import type { ReactNode } from "react"
import { cn } from "../utills/cn"

// Data Type
interface IButtonProps {
  children?: ReactNode
  className?: string
  variant?: TButtonVariant
}

export type TButtonVariant = 'primary' | 'secondary'

// Styling
const BaseStyle = "px-4 py-2 rounded-full cursor-pointer transition-all duration-150 hover:brightness-95 hover:-translate-y-0.5 hover:shadow-md"
const VariantStyle: Record<TButtonVariant, string> = {
  'primary': 'bg-slate-900! text-white font-medium!',
  'secondary': 'border border-slate-900',
}

// Component
const Button: React.FC<IButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary' 
}) => {
  
  return (
    <button className={cn(BaseStyle, VariantStyle[variant], className)}>
      { children }
    </button>
  )
}

export default Button