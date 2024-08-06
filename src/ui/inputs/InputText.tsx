import { ComponentProps } from 'react'

import { cn } from '@/styles'
import { InputLabelWithHelperText, IInputLabelWithHelperTextProps } from './InputLabelWithHelperText'

export interface IInputTextProps extends ComponentProps<'input'>, IInputLabelWithHelperTextProps {}

export const InputText: React.FC<IInputTextProps> = ({ className, label, helperText, errorText, ...inputProps }) => {
  return (
    <label className={cn('space-y-2', className)}>
      <InputLabelWithHelperText label={label} helperText={helperText} errorText={errorText} />
      <input
        {...inputProps}
        type="text"
        className="w-full py-3 px-3 border-2 border-border rounded-lg bg-transparent text-sm"
      />
    </label>
  )
}
