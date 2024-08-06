import { ComponentProps } from 'react'

import { IInputBaseProps, InputWrapper } from './InputWrapper'

export interface IInputTextProps extends Omit<ComponentProps<'input'>, 'name' | 'defaultValue'>, IInputBaseProps {}

export const InputText: React.FC<IInputTextProps> = ({ className, label, helperText, errorMessage, ...inputProps }) => {
  return (
    <InputWrapper
      key={label}
      label={label}
      name={inputProps.name!}
      // errorMessage={errorMessage}
      helperText={helperText}
    >
      <input
        {...inputProps}
        type="text"
        className="w-full py-2 px-3 border-2 border-border rounded-lg bg-transparent text-xs"
      />
    </InputWrapper>
  )
}
