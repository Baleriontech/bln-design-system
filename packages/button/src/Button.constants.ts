
// // Prop

// export type TButtonVariant = typeof BUTTON_VARIANTS[number]

// // Styling
// export const BUTTON_BASE_STYLE = "px-4 py-2 rounded-full cursor-pointer transition-all duration-150 hover:brightness-95 hover:-translate-y-0.5 hover:shadow-md"
// export const BUTTON_VARIANT_STYLE: Record<typeof BUTTON_VARIANTS[number], string> = {
//   primary: 'bg-slate-900! text-white font-medium',
//   outlined: 'border border-slate-900',
//   glass: `
//     relative!
//     text-white font-bold!
//     bg-white/10!
//     backdrop-blur-sm!
//     border border-white/40!
//     shadow-black/10!
//     overflow-hidden!

//     before:absolute! before:inset-0!
//     before:bg-gradient-to-br!
//     before:from-white/10! before:via-white/5! before:to-transparent!
//     before:rounded-full!
//     before:pointer-events-none!
//     hover:bg-white/20!

//     before:translate-x-[-60%]!
//     hover:before:translate-x-[60%]!
//     before:transition-transform before:duration-700!
//   `,
// }

import { cva } from "class-variance-authority"

export const BUTTON_VARIANTS = ['primary', 'outlined', 'glass'] as const

export const buttonVariants = cva(
  `
  px-4 py-2
  rounded-full
  cursor-pointer
  transition-all duration-150
  active:scale-90
  hover:brightness-95
  hover:-translate-y-0.5
  hover:shadow-md
  `,
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] text-white font-medium ",
        outlined: "border border-slate-900",
        glass: `
          relative
          text-white font-bold
          bg-white/10
          backdrop-blur-sm
          border border-white/40
          shadow-black/10
          overflow-hidden

          before:absolute before:inset-0
          before:bg-gradient-to-br
          before:from-white/10 before:via-white/5 before:to-transparent
          before:rounded-full
          before:pointer-events-none
          hover:bg-white/20

          before:translate-x-[-60%]
          hover:before:translate-x-[60%]
          before:transition-transform before:duration-700
        `
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)