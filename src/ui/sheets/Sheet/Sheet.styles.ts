import { VariantProps, cva } from 'class-variance-authority'

export const sheetBackdropClassName = cva(
  'fixed top-0 left-0 z-50 w-screen h-screen backdrop-blur-md bg-[rgba(0,0,0,0.15)]',
  {
    variants: {
      isOpen: { true: 'flex', false: 'hidden' },
      hidden: { true: 'hidden', false: 'flex' },
    },
  }
)

export const sheetContainerClassName = cva('fixed z-50 transition-all border-border', {
  variants: {
    isOpen: {
      true: 'opacity-100',
      false: 'opacity-0',
    },
    mode: {
      left: 'top-0 left-0 h-screen',
      right: 'top-0 right-0 h-screen',
      top: 'left-0 top-0 w-full',
      bottom: 'left-0 bottom-0 w-full',
      center: 'top-1/2 left-1/2',
    },
  },
  compoundVariants: [
    {
      mode: ['left', 'right'],
      isOpen: true,
      className: 'translate-x-0',
    },
    {
      mode: ['top', 'bottom'],
      isOpen: true,
      className: 'translate-y-0',
    },
    {
      mode: 'left',
      isOpen: false,
      className: 'translate-x-[-120%]',
    },
    {
      mode: 'right',
      isOpen: false,
      className: 'translate-x-[120%]',
    },
    {
      mode: 'top',
      isOpen: false,
      className: 'translate-y-[-120%]',
    },
    {
      mode: 'bottom',
      isOpen: false,
      className: 'translate-y-[120%]',
    },
    {
      mode: 'center',
      isOpen: false,
      className: '-translate-x-1/2 -translate-y-1/2 scale-75',
    },
    {
      mode: 'center',
      isOpen: true,
      className: '-translate-x-1/2 -translate-y-1/2 scale-100',
    },
  ],
  defaultVariants: {
    mode: 'right',
  },
})

export type TSheetVariants = VariantProps<typeof sheetContainerClassName>
