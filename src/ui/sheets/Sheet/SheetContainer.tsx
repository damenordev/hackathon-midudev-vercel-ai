'use client'
import { forwardRef, useImperativeHandle } from 'react'

import { useSheetContext } from './SheetProvider'
import { sheetContainerClassName } from './Sheet.styles'

export const SheetContainer = forwardRef(({ children, className, mode }: any, ref: any) => {
  const { setIsOpen, isOpen } = useSheetContext()

  useImperativeHandle(ref, () => ({
    setIsOpen: (newValue: boolean) => setIsOpen(newValue),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }))

  if (!isOpen) return null

  return (
    <div className={sheetContainerClassName({ className, isOpen, mode })} ref={ref}>
      {children}
    </div>
  )
})

SheetContainer.displayName = 'SheetContainer'
