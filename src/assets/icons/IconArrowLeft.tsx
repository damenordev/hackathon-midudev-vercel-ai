import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconArrowLeft: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper {...iconProps}>
      <path
        d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconWrapper>
  )
}
