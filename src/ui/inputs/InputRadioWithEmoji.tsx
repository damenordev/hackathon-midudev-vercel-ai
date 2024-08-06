import { cn } from '@/styles'

export interface IInputRadioWithEmojiProps {
  emoji: string
  label: string
  name: string
  value: string | number
  defaultChecked?: boolean
  type?: 'checkbox' | 'radio'
}

export const InputRadioWithEmoji: React.FC<IInputRadioWithEmojiProps> = ({
  emoji,
  label,
  name,
  value,
  defaultChecked,
  type = 'radio',
}) => {
  return (
    <label className="relative w-full flex flex-col gap-2 border-2 border-border rounded-lg p-2 cursor-pointer opacity-40 has-[input:checked]:border-success has-[input:checked]:opacity-100 select-none">
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="absolute top-0 left-0 w-0 h-0 [&:checked+div:before]:scale-100"
      />
      <div
        className={cn(
          'relative w-4 h-4 bg-border',
          'before:transition-transform before:content-[""] before:absolute before:bg-success/90 before:scale-0',
          type === 'radio'
            ? 'rounded-full before:rounded-full before:w-[50%] before:h-[50%] before:top-[25%] before:left-[25%]'
            : 'rounded-[4px] before:rounded-[2px] before:w-[60%] before:h-[60%] before:top-[20%] before:left-[20%]'
        )}
      />
      <span className="text-4xl leading-none text-center">{emoji}</span>
      <p className="font-bold text-center text-xs">{label}</p>
    </label>
  )
}
