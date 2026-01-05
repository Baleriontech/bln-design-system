
// Prop
export const BUTTON_VARIANTS = ['primary', 'secondary'] as const
export type TButtonVariant = typeof BUTTON_VARIANTS[number]

// Styling
export const BUTTON_BASE_STYLE = "px-4 py-2 rounded-full cursor-pointer transition-all duration-150 hover:brightness-95 hover:-translate-y-0.5 hover:shadow-md"
export const BUTTON_VARIANT_STYLE: Record<typeof BUTTON_VARIANTS[number], string> = {
  primary: 'bg-slate-900! text-white font-medium!',
  secondary: 'border border-slate-900',
}