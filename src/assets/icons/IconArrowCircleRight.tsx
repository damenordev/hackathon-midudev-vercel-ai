import { IIconsProps } from './icons.types'
import { IconWrapper } from './IconWrapper'

export const IconArrowCircleRight: React.FC<IIconsProps> = iconProps => {
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
        points="134.1 161.9 168 128 134.1 94.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></polyline>
      <line
        x1="88"
        y1="128"
        x2="168"
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
