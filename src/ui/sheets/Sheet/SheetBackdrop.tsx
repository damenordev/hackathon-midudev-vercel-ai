'use client'
import { sheetBackdropClassName } from './Sheet.styles'
import { useSheetContext } from './SheetProvider'

export interface ISheetBackdropProps {
  className?: string
  hidden?: boolean
}

export const SheetBackdrop = ({ className, hidden }: ISheetBackdropProps) => {
  const { setIsOpen, isOpen } = useSheetContext()
  if (!isOpen) return null
  return <div className={sheetBackdropClassName({ className, isOpen, hidden })} onClick={() => setIsOpen(false)} />
}
