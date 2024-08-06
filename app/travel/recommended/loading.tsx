export default function TravelRecommendedLoadingPage() {
  return (
    <div className="fixed top-0 left-0 z-[999] backdrop-blur-xl flex flex-col items-center justify-center p-4 w-full h-full">
      <h2 className="text-3xl mb-2">Espere un momento...</h2>
      <p className="text-muted text-sm text-balance">
        Estamos buscando en cada rincón para encontrar el mejor lugar para ti
      </p>
    </div>
  )
}
