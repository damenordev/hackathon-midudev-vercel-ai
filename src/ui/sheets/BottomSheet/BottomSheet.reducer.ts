'use client'
import { useReducer } from 'react'
import { IBottomSheetContextState } from './BottomSheet.types'

type TBottomSheetActions =
  | { type: 'SET_IS_OPEN'; payload: boolean }
  | { type: 'SET_ANIMATING_OUT'; payload: boolean }
  | { type: 'SET_HEIGHT'; payload: number }

export const bottomSheetReducer = (
  state: IBottomSheetContextState,
  action: TBottomSheetActions
): IBottomSheetContextState => {
  if (action.type === 'SET_IS_OPEN') return { ...state, isOpen: action.payload }
  if (action.type === 'SET_ANIMATING_OUT') return { ...state, animatingOut: action.payload }
  if (action.type === 'SET_HEIGHT') return { ...state, height: action.payload }
  return state
}

export interface IBottomSheetReducerArgs {
  snapPoints: number[]
}

export const useBottomSheetReducer = ({ snapPoints }: IBottomSheetReducerArgs) => {
  const [bottomSheetState, dispatch] = useReducer(bottomSheetReducer, {
    animatingOut: false,
    height: 0,
    isOpen: false,
    snapPoints,
  })

  const dispatchSetIsOpen = (payload: boolean) => dispatch({ type: 'SET_IS_OPEN', payload })
  const dispatchSetHeight = (payload: number) => dispatch({ type: 'SET_HEIGHT', payload })
  const dispatchSetAnimatingOut = (payload: boolean) => dispatch({ type: 'SET_ANIMATING_OUT', payload })

  return {
    ...bottomSheetState,
    dispatchSetIsOpen,
    dispatchSetHeight,
    dispatchSetAnimatingOut,
  }
}
