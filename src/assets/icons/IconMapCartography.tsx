import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconMapCartography: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper fill="currentColor" {...iconProps} viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        points="96 184 32 200 32 56 96 40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></polyline>
      <polygon
        points="160 216 96 184 96 40 160 72 160 216"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></polygon>
      <polyline
        points="160 72 224 56 224 200 160 216"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></polyline>
    </IconWrapper>
  )
}
