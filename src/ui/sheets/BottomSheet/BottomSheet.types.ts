export interface IBottomSheetProviderProps {
  children: React.ReactNode
  snapPoints: number[]
  initialSnap: number
  ref?: any
}

export interface IBottomSheetContextState {
  animatingOut: boolean
  height: number
  isOpen: boolean
  snapPoints: number[]
}

export interface IBottomSheetContext extends IBottomSheetContextState {
  setAnimatingOut: (newValue: boolean) => void
  setHeight: (newValue: number) => void
  setIsOpen: (newValue: boolean) => void
  onOpen: () => void
  onClose: () => void
}

export interface IBottomSheetProps {
  children: React.ReactNode
  snapPoints?: number[]
  initialSnap?: number
  showBackdrop?: boolean
  activeCloseInBackdrop?: boolean
  offsetClose?: number
}
