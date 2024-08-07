'use client'
import { useState } from 'react'

import { IconMoon, IconSun } from '@/assets'
import { useOutsideClick } from '@/hooks'

export interface IThemeProps {}

export const Theme: React.FC<IThemeProps> = props => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useOutsideClick(() => setIsOpen(false))

  return (
    <div ref={ref} className="relative w-fit flex items-center gap-2 bg-popover p-2 rounded-xl">
      <div className="bg-background p-2 rounded-xl">
        <IconMoon size={32} />
      </div>
      <div
        className="bg-background opacity-25 p-2 rounded-xl cursor-pointer"
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <IconSun size={32} />
      </div>
      {isOpen && (
        <div className="absolute w-full -top-[calc(100%+56px)] left-0 bg-popover p-2 text-center text-xs text-muted rounded-xl animate-fade-in">
          No en mi web. Jámas traicionaria al chat fastidiandole la vista
        </div>
      )}
    </div>
  )
}
