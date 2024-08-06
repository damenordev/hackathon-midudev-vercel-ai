import { IButtonProps } from './Button.types'
import { buttonClasses } from './Button.styles'

export const Button: React.FC<IButtonProps> = ({
  size,
  variant,
  rounded,
  colorScheme,
  iconLeft,
  iconRight,
  className,
  children,
  widthFull,
  ...props
}) => {
  const classes = buttonClasses({ size, variant, rounded, className, colorScheme, widthFull })

  return (
    <button className={classes} {...props}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  )
}
