'use client'
import { createContext, useContext, useImperativeHandle } from 'react'

import { IBottomSheetContext, IBottomSheetProviderProps } from './BottomSheet.types'
import { useBottomSheetReducer } from './BottomSheet.reducer'

const BottomSheetContext = createContext({} as IBottomSheetContext)

export const BottomSheetProvider = ({ children, snapPoints, initialSnap, ref }: IBottomSheetProviderProps) => {
  const { dispatchSetAnimatingOut, dispatchSetHeight, dispatchSetIsOpen, ...bottomSheetState } = useBottomSheetReducer({
    snapPoints,
  })

  const onOpen = () => {
    dispatchSetAnimatingOut(false)
    dispatchSetHeight(initialSnap)
    dispatchSetIsOpen(true)
    document.body.style.overflowY = 'hidden'
  }

  const onClose = () => {
    dispatchSetAnimatingOut(true)
    document.body.style.overflowY = 'auto'
  }

  useImperativeHandle(ref, () => ({ onOpen, onClose }))

  const value = {
    ...bottomSheetState,
    setAnimatingOut: dispatchSetAnimatingOut,
    setHeight: dispatchSetHeight,
    setIsOpen: dispatchSetIsOpen,
    onOpen,
    onClose,
  }

  return <BottomSheetContext.Provider value={value}>{children}</BottomSheetContext.Provider>
}

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext)
  if (!context) throw new Error('useBottomSheetContext must be called within a BottomSheetProvider')
  return context
}
