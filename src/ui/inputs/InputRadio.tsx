'use client'
import { cn } from '@/styles'
import { ComponentProps, useState } from 'react'

export interface IInputRadioProps extends ComponentProps<'input'> {
  label?: string
  error?: string
}

export const InputRadio: React.FC<IInputRadioProps> = ({ defaultChecked, placeholder, label, ...inputProps }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked)
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => setIsChecked(prevState => (prevState ? false : true))}
    >
      <input {...inputProps} className="w-0 h-0" checked={isChecked} type="radio" />
      <div
        className={cn(
          'relative w-4 h-4 rounded-full bg-foreground transition-colors before:scale-0 before:transition-transform before:content-[""] before:absolute before:w-2 before:h-2 before:bg-background before:rounded-full before:top-[4px] before:left-[4px]',
          {
            'before:scale-100': isChecked,
            'bg-danger-400': inputProps.error && isChecked,
            'bg-primary-400': !inputProps.error && isChecked,
          }
        )}
      />
      <label className={cn('select-none cursor-pointer', { 'text-danger-400': inputProps.error })}>
        {label || placeholder}
      </label>
    </div>
  )
}
