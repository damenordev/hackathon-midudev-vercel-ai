'use client'

import { IconArrowLeft, IconArrowRight, IconMenu } from '@/assets'
import { Button } from '@/ui'

import { useMapWithSliderContext } from './MapWithSliderProvider'

export interface IMapWithSliderPlaceInfoProps {}

export const MapWithSliderPlaceInfo: React.FC<IMapWithSliderPlaceInfoProps> = () => {
  const { placeSelected, onNext, onPrevious } = useMapWithSliderContext()

  return (
    <div className="w-full flex-2 md:flex-1 max-w-md grid gap-1 text-left fade-up px-4 md:pl-3 py-4 md:pr-6 select-none md:backdrop-blur-xl md:bg-black/35 md:rounded-lg md:border md:border-primary/10 md:overflow-hidden">
      <div className="hidden sm:block absolute w-8 bg-primary/20 left-0 h-full"></div>
      <div>
        <small className="tracking-widest text-sm text-primary uppercase">{placeSelected.country}</small>
        <h2 className="text-xl font-bold tracking-wide drop-shadow-text-lg">{placeSelected.name} ({placeSelected.city})</h2>
      </div>
      <div className="absolute right-4 top-4 md:hidden">{/* <IconMenu size={28} /> */}</div>
      <div className="hidden pb-6 md:pb-2 md:pl-10 md:mt-4 space-y-2 md:space-y-6 md:flex md:flex-col h-full md:h-auto">
        <p className="text-muted text-sm py-4 md:py-0">{placeSelected.description}</p>
        <div className="flex flex-col gap-">
          <span className="text-sm text-muted">- Días recomendados: {placeSelected.daysRecommended}</span>
          <span className="text-sm text-muted">
            - Costo diario: {placeSelected.priceForDay.converted?.amount} {placeSelected.priceForDay.converted?.currency}
          </span>
          <span className="text-sm text-muted">
            - Costo diario moneda local: {placeSelected.priceForDay.base.amount} {placeSelected.priceForDay.base.currency}
          </span>
        </div>
        <div className="space-x-2">
          <Button size="xs" rounded="full" onClick={onPrevious}>
            <IconArrowLeft size={20} />
          </Button>
          <Button size="xs" rounded="full" onClick={onNext}>
            <IconArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}
