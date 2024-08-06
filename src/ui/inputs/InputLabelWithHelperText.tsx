import { cn } from '@/styles'

export interface IInputLabelWithHelperTextProps {
  label: string
  helperText?: string
  errorText?: string
}

export const InputLabelWithHelperText: React.FC<IInputLabelWithHelperTextProps> = ({
  label,
  helperText,
  errorText,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg text-foreground">{label}</h2>
      {helperText && !errorText && <span className={cn('text-xs leading-none text-info-200/75')}>{helperText}</span>}
      {errorText && <span className={cn('text-[0.7rem] leading-none text-danger-400 mt-0.5')}>{errorText}</span>}
    </div>
  )
}
