import { ComponentProps } from 'react'

import { IInputLabelWithHelperTextProps, InputLabelWithHelperText } from './InputLabelWithHelperText'
import { cn } from '@/styles'

export interface IInputTextAreaProps extends ComponentProps<'textarea'>, IInputLabelWithHelperTextProps {}
{
}

export const InputTextArea: React.FC<IInputTextAreaProps> = ({
  className,
  label,
  helperText,
  errorText,
  ...inputProps
}) => {
  return (
    <div className={cn('space-y-2')}>
      <InputLabelWithHelperText label={label} helperText={helperText} errorText={errorText} />
      <textarea
        {...inputProps}
        className="w-full h-12 p-3 border-2 border-border rounded-lg bg-transparent resize-none min-h-32 text-sm"
      />
    </div>
  )
}
