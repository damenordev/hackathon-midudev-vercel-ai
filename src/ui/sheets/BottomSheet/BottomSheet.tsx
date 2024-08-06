import { forwardRef } from 'react'

import { BottomSheetProvider } from './BottomSheetProvider'
import { BottomSheetTrigger } from './BottomSheetTrigger'
import { BottomSheetContainer } from './BottomSheetContainer'
import { IBottomSheetProps } from './BottomSheet.types'
import { BottomSheetBackdrop } from './BottomSheetBackdrop'

const DEFAULT_SNAP_POINTS = [25, 50, 75, 100]
const DEFAULT_INITIAL_SNAP = 50
const DEFAULT_CLOSE_OFFSET = 5

export const BottomSheet: React.FC<IBottomSheetProps> = forwardRef(
  (
    {
      children,
      snapPoints = DEFAULT_SNAP_POINTS,
      initialSnap = DEFAULT_INITIAL_SNAP,
      offsetClose = DEFAULT_CLOSE_OFFSET,
      activeCloseInBackdrop,
      showBackdrop,
    },
    ref
  ) => {
    return (
      <BottomSheetProvider snapPoints={snapPoints} initialSnap={initialSnap} ref={ref}>
        <BottomSheetTrigger />
        <BottomSheetBackdrop activeClose={activeCloseInBackdrop} show={showBackdrop} />
        <BottomSheetContainer offsetClose={offsetClose}>{children}</BottomSheetContainer>
      </BottomSheetProvider>
    )
  }
)

BottomSheet.displayName = 'BottomSheet'
