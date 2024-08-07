'use client'
import Link from 'next/link'

import { IconApp, IconArrowLeft, IconArrowRight } from '@/assets'
import { APP_NAME } from '@/constants'
import { Button } from '@/ui'

import { useMapWithSliderContext } from './MapWithSliderProvider'
import { IconAppLink } from '@/components'

const getFormattedDateTime = (utcString: string): { date: string; time: string } => {
  // Extraer el desplazamiento numérico de la cadena UTC
  const match = utcString.match(/([+-])(\d+)/)
  if (!match) {
    throw new Error('Formato de cadena UTC no válido')
  }
  const sign = match[1]
  const offset = parseInt(match[2], 10)

  // Calcular el desplazamiento en horas
  const offsetHours = sign === '+' ? offset : -offset

  // Obtener la hora actual en UTC
  const now = new Date()

  // Definir las opciones para Intl.DateTimeFormat para la fecha
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: `Etc/GMT${offsetHours >= 0 ? '-' : '+'}${Math.abs(offsetHours)}`,
  }

  // Definir las opciones para Intl.DateTimeFormat para la hora
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: `Etc/GMT${offsetHours >= 0 ? '-' : '+'}${Math.abs(offsetHours)}`,
  }

  // Formatear la fecha y la hora en la zona horaria especificada
  const formattedDate = new Intl.DateTimeFormat('es-ES', dateOptions).format(now)
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(now)

  return {
    date: formattedDate,
    time: formattedTime,
  }
}

export interface IMapWithSliderPlaceInfoProps {}

export const MapWithSliderPlaceInfo: React.FC<IMapWithSliderPlaceInfoProps> = () => {
  const { placeSelected, onNext, onPrevious } = useMapWithSliderContext()

  return (
    <div className="w-full flex-2 md:flex-1 max-w-md grid gap-1 text-left fade-up px-4 md:pl-3 py-4 md:pr-6 select-none md:backdrop-blur-xl md:bg-black/35 md:rounded-lg md:border md:border-primary/10 md:overflow-hidden">
      <div className="hidden sm:block absolute w-8 bg-primary/20 left-0 h-full"></div>
      <div className="flex items-center justify-between mb-4">
        <IconAppLink />
        <div className="flex flex-col items-end">
          <span className="text-sm">{getFormattedDateTime(placeSelected.timeZone).time}</span>
          <span className="text-xs">{getFormattedDateTime(placeSelected.timeZone).date}</span>
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
