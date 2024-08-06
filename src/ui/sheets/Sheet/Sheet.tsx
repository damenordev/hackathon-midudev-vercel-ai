import { forwardRef } from 'react'

import { SheetProvider } from './SheetProvider'
import { TSheetVariants } from './Sheet.styles'
import { SheetBackdrop } from './SheetBackdrop'
import { SheetContainer } from './SheetContainer'
import { SheetTrigger } from './SheetTrigger'

export interface ISheetProps extends TSheetVariants {
  children: React.ReactNode
  className?: string
  classNameBackdrop?: string
  classNameContainer?: string
  trigger?: React.ReactNode
  hiddenBackdrop?: boolean
  disableCloseInBackdrop?: boolean
}

export const Sheet = forwardRef(
  (
    {
      children,
      mode,
      trigger,
      className,
      classNameBackdrop,
      classNameContainer,
      hiddenBackdrop,
      disableCloseInBackdrop,
    }: ISheetProps,
    ref
  ) => {
    return (
      <SheetProvider>
        {trigger && <SheetTrigger className={className}>{trigger}</SheetTrigger>}
        <SheetBackdrop className={classNameBackdrop} hidden={hiddenBackdrop} />
        <SheetContainer className={classNameContainer} mode={mode} ref={ref}>
          {children}
        </SheetContainer>
      </SheetProvider>
    )
  }
)

Sheet.displayName = 'Sheet'
