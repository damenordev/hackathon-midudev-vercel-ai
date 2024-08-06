import { ComponentProps } from 'react'

import { IInputBaseProps, InputWrapper } from './InputWrapper'

export interface IInputTextAreaProps
  extends Omit<ComponentProps<'textarea'>, 'name' | 'defaultValue'>,
    IInputBaseProps {
  type: 'textarea'
}

export const InputTextArea: React.FC<IInputTextAreaProps> = ({
  className,
  label,
  helperText,
  errorMessage,
  ...inputProps
}) => {
  return (
    <InputWrapper
      key={label}
      label={label}
      name={inputProps.name!}
      // errorMessage={errorMessage}
      helperText={helperText}
    >
      <textarea
        {...inputProps}
        className="w-full h-12 p-3 border-2 border-border rounded-lg bg-transparent resize-none min-h-32 text-sm"
      />
    </InputWrapper>
  )
}
