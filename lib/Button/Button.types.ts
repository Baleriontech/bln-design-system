import type { ReactNode } from 'react'
import type { TButtonVariant } from './Button.constants'


export interface IButtonProps {
  children?: ReactNode
  className?: string
  variant?: TButtonVariant
}