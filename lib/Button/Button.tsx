import type { ReactNode } from "react"
import { cn } from "../utills/cn"

interface IButtonProps {
  children?: ReactNode
  className?: string
}

const Button: React.FC<IButtonProps> = ({ children, className }) => {
  const baseStyle = "rounded-full bg-white"
  return (
    <button className={cn(baseStyle, className)}>
      Design : { children }
    </button>
  )
}

export default Button