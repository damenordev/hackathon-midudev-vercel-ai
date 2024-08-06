import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconArrowNavLeft: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper {...iconProps}>
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        stroke-width="2"
        strokeLinecap="round"
        stroke-linejoin="round"
      ></path>
    </IconWrapper>
  )
}
