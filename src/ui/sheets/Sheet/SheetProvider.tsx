'use client'
import { createContext, useContext, useState } from 'react'

const initialState = {
  isOpen: false,
  setIsOpen: (newValue: boolean) => {},
}

const SheetContext = createContext(initialState)

export interface ISheetProviderProps {
  children: React.ReactNode
}

export const SheetProvider = ({ children }: ISheetProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return <SheetContext.Provider value={{ isOpen, setIsOpen }}>{children}</SheetContext.Provider>
}

export const useSheetContext = () => {
  const context = useContext(SheetContext)
  if (!context) throw new Error('useSheetContext must be used within a SheetProvider')
  return context
}
