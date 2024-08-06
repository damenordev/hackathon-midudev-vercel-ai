'use client'
import { useRouter } from 'next/navigation'

import { IconApp } from '@/assets'
import { Button } from '@/ui'

export default function ErrorPage({ error }: { error: Error }) {
  const router = useRouter()

  const onClick = () => router.refresh()

  return (
    <div className="fixed top-0 left-0 z-[999] backdrop-blur-xl flex flex-col items-center justify-center p-4 w-full h-full">
      <IconApp size={200} />
      <h2 className="text-5xl text-center mb-2 mt-4">Ups! No puede ser</h2>
      <p className="max-w-80 text-muted text-sm text-center">
        Parece que hubo algún error, pero no te preocupes, puedes intentar nuevamente
      </p>
      <Button className="mt-12 w-fit" size="xl" onClick={onClick}>
        Volver a buscar
      </Button>
    </div>
  )
}
