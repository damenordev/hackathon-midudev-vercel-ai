import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconMenu: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper {...iconProps}>
      <path d="M3 5H21" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"></path>
      <path d="M3 12H21" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"></path>
      <path d="M3 19H21" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"></path>
    </IconWrapper>
  )
}
