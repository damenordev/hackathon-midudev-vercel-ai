import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconArrowCircleLeft: React.FC<IIconsProps> = iconProps => {
  return (
    <IconWrapper fill="currentColor" {...iconProps} viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></circle>
      <polyline
        points="121.9 161.9 88 128 121.9 94.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></polyline>
      <line
        x1="168"
        y1="128"
        x2="88"
        y2="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></line>
    </IconWrapper>
  )
}
