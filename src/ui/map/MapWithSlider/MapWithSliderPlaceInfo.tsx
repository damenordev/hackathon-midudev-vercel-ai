'use client'

import { IconApp, IconArrowLeft, IconArrowRight } from '@/assets'
import { Button } from '@/ui'

import { useMapWithSliderContext } from './MapWithSliderProvider'
import { HourCounter, IconAppLink } from '@/components'
import { getDateFormated, getFormattedDateTime } from '@/utils/date.utils'

export interface IMapWithSliderPlaceInfoProps {}

export const MapWithSliderPlaceInfo: React.FC<IMapWithSliderPlaceInfoProps> = () => {
  const { placeSelected, onNext, onPrevious } = useMapWithSliderContext()

  return (
    <div className="w-full flex-2 md:flex-1 max-w-md grid gap-1 text-left fade-up px-4 md:pl-3 py-4 md:pr-6 select-none md:backdrop-blur-xl md:bg-black/35 md:rounded-lg md:border md:border-primary/10 md:overflow-hidden">
      <div className="hidden sm:block absolute w-8 bg-primary/20 left-0 h-full"></div>
      <div className="flex items-center justify-between mb-4">
        <IconAppLink />
        <div className="flex flex-col items-end">
          <HourCounter utc={placeSelected.timeZone} />
          <span className="text-xs">{getDateFormated(placeSelected.timeZone)}</span>
        </div>
      </div>
      <div>
        <small className="tracking-widest text-md text-primary uppercase">{placeSelected.country}</small>
        <h2 className="text-xl font-bold tracking-wide drop-shadow-text-lg">
          {placeSelected.name} ({placeSelected.city})
        </h2>
      </div>
      <div className="hidden pb-6 md:pb-2 md:pl-10 md:mt-4 space-y-2 md:space-y-6 md:flex md:flex-col h-full md:h-auto">
        <p className="text-muted text-sm py-4 md:py-0">{placeSelected.description}</p>
        <ul className="list-disc pl-4">
          <li className="text-sm text-muted">Días recomendados: {placeSelected.daysRecommended}</li>
          <li className="text-sm text-muted">
            Costo diario: {placeSelected.priceForDay.converted?.amount} {placeSelected.priceForDay.converted?.currency}
          </li>
          <li className="text-sm text-muted">
            Costo diario moneda local: {placeSelected.priceForDay.base.amount} {placeSelected.priceForDay.base.currency}
          </li>
          <li className="text-sm text-muted">{placeSelected.visaRequired ? 'Requiere visa' : 'No requiere visa'}</li>
          <li className="text-sm text-muted">
            {placeSelected.insuranceRequired ? 'Requiere seguro' : 'No requiere seguro'}
          </li>
        </ul>
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
