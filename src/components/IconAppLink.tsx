import { IconApp } from '@/assets'
import { APP_NAME } from '@/constants'
import { cn } from '@/styles'
import Link from 'next/link'

export interface IIconAppLinkProps {
  iconSize?: number
  href?: string
  classNameText?: string
}

export const IconAppLink: React.FC<IIconAppLinkProps> = ({ iconSize = 28, href = '/', classNameText }) => {
  return (
    <Link className="flex items-center gap-1 " href={href}>
      <IconApp size={iconSize} />
      <h1 className={cn('font-bold text-[10px] w-16 leading-3', classNameText)}>{APP_NAME}</h1>
    </Link>
  )
}
