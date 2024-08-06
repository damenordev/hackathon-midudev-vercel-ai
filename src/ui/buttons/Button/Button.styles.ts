import { classVariance } from '@/styles'

export const colorScheme = {
  primary: 'bg-primary-400/20 text-primary-400 border-primary-400 hover:bg-primary-400 hover:text-primary-950',
  secondary: 'bg-secondary-400/20 text-secondary-400 border-secondary-400 hover:bg-secondary-400 hover:text-secondary-950',
  info: 'bg-info-400/20 text-info-400 border-info-400 hover:bg-info-400 hover:text-info-950',
  danger: 'bg-danger-400/20 text-danger-400 border-danger-400 hover:bg-danger-400 hover:text-danger-950',
  success: 'bg-success-400/20 text-success-400 border-success-400/80 hover:bg-success-400 hover:text-success-950',
  warning: 'bg-warning-400/20 text-warning-400 border-warning-400 hover:bg-warning-400 hover:text-warning-950',
}

export const buttonVariants = {
  colorScheme,
  size: {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-3.5 py-2.5 text-lg',
    xl: 'px-4 py-3 text-xl',
  },
  variant: {
    solid: '',
    outline: 'bg-transparent',
    ghost: 'bg-transparent border-transparent',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  widthFull: {
    true: 'w-full',
  },
}

export const buttonClasses = classVariance(
  'inline-flex items-center justify-center border-2 font-medium transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100',
  {
    variants: buttonVariants,
    defaultVariants: {
      colorScheme: 'primary',
      size: 'md',
      variant: 'solid',
      rounded: 'lg',
    },
  }
)
