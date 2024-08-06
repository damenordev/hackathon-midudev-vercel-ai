'use client'

import { cn } from '@/styles'

import { useBottomSheetContext } from './BottomSheetProvider'

export interface IBottomSheetBackdropProps {
  activeClose?: boolean
  show?: boolean
}

export const BottomSheetBackdrop = ({ activeClose, show }: IBottomSheetBackdropProps) => {
  const { animatingOut, onClose, isOpen } = useBottomSheetContext()

  if (!isOpen || !show) return null

  const handleOnClick = () => {
    if (activeClose) onClose()
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-full h-full bg-card/15 backdrop-blur-md',
        animatingOut ? 'animate-fade-out' : 'animate-fade-in'
      )}
      onClick={handleOnClick}
    />
  )
}
