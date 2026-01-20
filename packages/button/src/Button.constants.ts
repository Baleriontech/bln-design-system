import { cva } from "class-variance-authority"

export const BUTTON_VARIANTS = ['primary', 'outlined', 'glass'] as const

export const buttonVariants = cva("bln-button", {
  variants: {
    variant: {
      primary: "bln-button--primary",
      outlined: "bln-button--outlined",
      glass: "bln-button--glass",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});