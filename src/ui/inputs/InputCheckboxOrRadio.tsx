import { cn } from '@/styles'

import { InputWrapper, IInputBaseProps } from './InputWrapper'

export interface IInputCheckboxOrRadioOptions {
  label: string
  value: string
  emoji: string
}

export interface IInputCheckboxOrRadioProps extends IInputBaseProps {
  options: IInputCheckboxOrRadioOptions[]
  type: 'checkbox' | 'radio'
}

export const InputCheckboxOrRadio: React.FC<IInputCheckboxOrRadioProps> = ({
  label,
  name,
  errorMessage,
  helperText,
  options,
  type,
  defaultValue,
}) => {
  return (
    <InputWrapper
      key={label}
      label={label}
      name={name}
      // errorMessage={errorMessage}
      helperText={helperText}
      numberOfColumns={options.length}
    >
      {options.map(option => (
        <label
          key={option.value}
          className="relative w-full flex flex-col gap-2 bg-card border-2 border-card-border rounded-lg p-2 pt-4 cursor-pointer opacity-60 has-[input:checked]:border-success has-[input:checked]:opacity-100 select-none"
        >
          <input
            type={type}
            name={name}
            value={option.value}
            defaultChecked={defaultValue?.includes(option.value)}
            className="absolute top-0 left-0 w-0 h-0 [&:checked+div:before]:scale-100"
          />
          <div
            className={cn(
              'absolute top-2 left-2 w-4 h-4 bg-foreground/30',
              'before:transition-transform before:content-[""] before:absolute before:bg-success/90 before:scale-0',
              type === 'radio'
                ? 'rounded-full before:rounded-full before:w-[50%] before:h-[50%] before:top-[25%] before:left-[25%]'
                : 'rounded-[4px] before:rounded-[2px] before:w-[60%] before:h-[60%] before:top-[20%] before:left-[20%]'
            )}
          />
          <span className="text-4xl leading-none text-center">{option.emoji}</span>
          <p className="font-bold text-center text-xs">{option.label}</p>
        </label>
      ))}
    </InputWrapper>
  )
}
