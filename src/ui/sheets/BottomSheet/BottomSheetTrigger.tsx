'use client'

import { useBottomSheetContext } from './BottomSheetProvider'

export const BottomSheetTrigger = () => {
  const { onOpen } = useBottomSheetContext()

  return (
    <button
      className="bg-zinc-100 text-zinc-900 text-lg font-bold px-3 py-1 rounded-xl hover:bg-zinc-300 active:scale-[0.98] transition-all"
      onClick={onOpen}
    >
      Open bottom sheet
    </button>
  )
}
