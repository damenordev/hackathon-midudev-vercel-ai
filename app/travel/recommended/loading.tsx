import { IconApp } from '@/assets'

export default function TravelRecommendedLoadingPage() {
  return (
    <div className="fixed top-0 left-0 z-[999] backdrop-blur-xl flex flex-col items-center justify-center p-4 w-full h-full">
      <IconApp size={200} />
      <h2 className="text-3xl mb-2 mt-4">Espere un momento</h2>
      <p className="text-muted max-w-80 text-sm text-center">
        Estamos buscando en cada rincón para encontrar el mejor lugar para ti
      </p>
      <div className="flex flex-row gap-2 mt-12">
        <div className="w-4 h-4 rounded-full bg-secondary animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-secondary animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-secondary animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  )
}
