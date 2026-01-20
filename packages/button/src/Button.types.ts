import type { ReactNode } from 'react'
import type { buttonVariants } from './Button.constants'
import type { VariantProps } from 'class-variance-authority'


export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> , VariantProps<typeof buttonVariants>  {
  children?: ReactNode
  className?: string
}

