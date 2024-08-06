import { IIconsProps } from './icons.types'

export const IconWrapper: React.FC<IIconsProps> = ({ children, size = 24, ...svgProps }) => {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth="2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...svgProps}
    >
      {children}
    </svg>
  )
}
