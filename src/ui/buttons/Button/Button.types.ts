import { ComponentProps, ReactNode } from 'react'

import { buttonVariants, colorScheme } from './Button.styles'

export type TButtonVariants = typeof buttonVariants
export type TButtonVariantsKeys = keyof TButtonVariants
export type TButtonVariant<K extends TButtonVariantsKeys> = keyof (typeof buttonVariants)[K]

export type TButtonSize = TButtonVariant<'size'>
export type TButtonVariantType = TButtonVariant<'variant'>
export type TButtonRounded = TButtonVariant<'rounded'>

export interface IButtonProps extends ComponentProps<'button'> {
  size?: TButtonSize
  variant?: TButtonVariantType
  rounded?: TButtonRounded
  colorScheme?: keyof typeof colorScheme
  iconLeft?: ReactNode
  iconRight?: ReactNode
  widthFull?: boolean
}
