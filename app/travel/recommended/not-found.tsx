import { IconApp } from '@/assets'
import { Button } from '@/ui'
import Link from 'next/link'

export default function TravelRecommendedNotFoundPage() {
  return (
    <div className="fixed top-0 left-0 z-[999] backdrop-blur-xl flex flex-col items-center justify-center p-4 w-full h-full">
      <IconApp size={200} />
      <h2 className="text-3xl text-center mb-2 mt-4">No se encontraron resultados</h2>
      <p className="max-w-80 text-muted text-sm text-center">
        Parece que no encontramos resultados que coincidan con tus datos de viaje
      </p>
      <Link className="mt-16 w-fit" href="/recommender">
        <Button>Volver al recomendador</Button>
      </Link>
    </div>
  )
}
