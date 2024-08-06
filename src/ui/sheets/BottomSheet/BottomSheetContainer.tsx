'use client'
import { PointerEvent } from 'react'

import { cn } from '@/styles'

import { useBottomSheetContext } from './BottomSheetProvider'
import { BottomSheetBackdrop } from './BottomSheetBackdrop'

export interface IBottomSheetContainerProps {
  children: React.ReactNode
  offsetClose: number
}

export const BottomSheetContainer: React.FC<IBottomSheetContainerProps> = ({ children, offsetClose }) => {
  const { isOpen, height, animatingOut, onClose, setHeight, setAnimatingOut, setIsOpen, snapPoints } =
    useBottomSheetContext()

  const handleAnimationEnd = () => {
    if (animatingOut) {
      setIsOpen(false)
      setAnimatingOut(false)
    }
  }

  const detectLeftMouse = (event: PointerEvent<HTMLDivElement>) => {
    event = event || window.event
    if ('buttons' in event) return event.buttons === 1
    // @ts-ignore
    const button = event.which || event.button
    return button === 1
  }

  const findClosestSnap = (newHeight: number) => {
    return snapPoints.reduce((prev, curr) => (Math.abs(curr - newHeight) < Math.abs(prev - newHeight) ? curr : prev))
  }

  const dragStart = (event: PointerEvent<HTMLDivElement>) => {
    if (!detectLeftMouse(event)) return
    const startY = event.clientY
    let newHeight = 0

    const dragMove = (event: MouseEvent) => {
      const delta = startY - event.clientY
      newHeight = height + (delta / window.innerHeight) * 100
      setHeight(newHeight)
    }
    document.addEventListener('pointermove', dragMove)

    const dragEnd = () => {
      document.removeEventListener('pointermove', dragMove)
      document.removeEventListener('pointerup', dragEnd)
      if (newHeight > 0 && newHeight < snapPoints[0] - offsetClose) return onClose()
      setHeight(findClosestSnap(newHeight))
    }
    document.addEventListener('pointerup', dragEnd)
  }

  return (
    <>
      {isOpen && (
        <div
          className={cn(
            'fixed bottom-0 left-1/2 w-full max-w-screen-xl bg-card shadow-lg flex flex-col z-50',
            height === 100 ? 'rounded-none' : 'rounded-t-3xl',
            animatingOut ? 'animate-slide-down-x-center' : 'animate-slide-up-x-center',
            isOpen ? 'visible' : 'invisible'
          )}
          style={{ height: `${height}%` }}
          onAnimationEnd={handleAnimationEnd}
        >
          <div
            className="flex justify-center border-b border-card-border py-3 cursor-grab select-none touch-none"
            onPointerDown={dragStart}
          >
            <span className="block h-1 w-12 bg-primary-50/15 rounded-md"></span>
          </div>
          <div className="w-full h-full overflow-y-auto">{children}</div>
        </div>
      )}
    </>
  )
}
