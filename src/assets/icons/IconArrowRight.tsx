import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconArrowRight: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper {...iconProps}>
      <path
        d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconWrapper>
  )
}
