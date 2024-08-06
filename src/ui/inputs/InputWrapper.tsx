import { cn } from '@/styles'

export interface IInputBaseProps {
  label: string
  name: string
  helperText?: string
  errorMessage?: string
  defaultValue?: string
}

export interface IInputWrapperProps extends IInputBaseProps {
  children: React.ReactNode
  numberOfColumns?: number
  classNameContainer?: string
}

const getColsByNumberOfColumns = (numberOfOptions?: number) => {
  if (numberOfOptions === 2) return 'md:grid-cols-2'
  if (numberOfOptions === 3) return 'md:grid-cols-3'
  if (numberOfOptions === 4 || numberOfOptions === 8) return 'md:grid-cols-4'
  if (numberOfOptions === 5) return 'md:grid-cols-5'
  if (numberOfOptions === 6) return 'md:grid-cols-6'
  return 'md:grid-cols-1'
}

export const InputWrapper: React.FC<IInputWrapperProps> = ({
  children,
  label,
  name,
  errorMessage,
  numberOfColumns,
  helperText,
  classNameContainer,
}) => {
  return (
    <div className={cn('flex flex-col gap-2', classNameContainer)}>
      <div className="flex flex-col">
        <label htmlFor={name} className="text-md text-foreground">
          {label}
        </label>
        {helperText && !errorMessage && (
          <span className={cn('text-xs leading-none text-info-200/75')}>{helperText}</span>
        )}
        {errorMessage && (
          <span className={cn('text-[0.7rem] leading-none text-danger-400 mt-0.5')}>{errorMessage}</span>
        )}
      </div>
      <div className={cn('grid gap-2', getColsByNumberOfColumns(numberOfColumns))}>{children}</div>
    </div>
  )
}
