'use client'
import { cloneElement, isValidElement, PropsWithChildren } from 'react'
import { useSheetContext } from './SheetProvider'
import { cn } from '@/styles'

export interface ISheetTriggerProps extends PropsWithChildren {
  className?: string
}

export const SheetTrigger = ({ children, className }: ISheetTriggerProps) => {
  const { setIsOpen } = useSheetContext()
  return (
    <>
      {isValidElement(children) &&
        cloneElement(children, {
          ...children.props,
          onClick: () => setIsOpen(true),
          className: cn(children.props.className, 'cursor-pointer'),
        })}
    </>
  )
}
