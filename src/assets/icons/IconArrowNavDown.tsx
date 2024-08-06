import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconArrowNavDown: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper {...iconProps}>
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconWrapper>
  )
}
