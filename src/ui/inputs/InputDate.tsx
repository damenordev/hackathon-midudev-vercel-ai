import { ComponentProps } from 'react'

import { IInputLabelWithHelperTextProps, InputLabelWithHelperText } from './InputLabelWithHelperText'
import { cn } from '@/styles'

export interface IInputDateProps extends ComponentProps<'input'>, IInputLabelWithHelperTextProps {}

export const InputDate: React.FC<IInputDateProps> = ({ className, label, helperText, errorText, ...inputProps }) => {
  return (
    <div className={cn('space-y-2')}>
      <InputLabelWithHelperText label={label} helperText={helperText} errorText={errorText} />
      <input
        type="date"
        {...inputProps}
        className="w-full h-12 px-3 border-2 border-border rounded-lg bg-transparent text-sm"
      />
    </div>
  )
}
