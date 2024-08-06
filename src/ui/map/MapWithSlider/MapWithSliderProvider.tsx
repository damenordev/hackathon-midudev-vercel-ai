'use client'
import { createContext, RefObject, useContext, useLayoutEffect, useRef, useState } from 'react'

import { IMapRefHander, ISliderRef } from '@/ui'

import { IMapWithSliderOption } from './MapWithSlider.types'

export interface IMapWithSliderContext {
  mapRef: RefObject<IMapRefHander>
  places: IMapWithSliderOption[]
  placeSelected: IMapWithSliderOption
  setPlaceSelected: (place: IMapWithSliderOption) => void
  setPlaceSelectedByIndex: (index: number) => void
  goToDefaultZoom: () => void
  onNext: () => void
  onPrevious: () => void
}

const MapWithSliderContext = createContext({} as IMapWithSliderContext)

export interface IMapWithSliderProps {
  children: React.ReactNode
  places: IMapWithSliderOption[]
}

// TODO: Fix flyTo in first render

export const MapWithSliderProvider = ({ children, places }: IMapWithSliderProps) => {
  const [placeSelected, setPlaceSelected] = useState<IMapWithSliderOption>(places[0])
  const mapRef = useRef<IMapRefHander>(null)

  const getCoordinatesConverted = () => {
    return [placeSelected.coordinates.lng, placeSelected.coordinates.lat] as mapboxgl.LngLatLike
  }

  const onNext = () => {
    const index = places.indexOf(placeSelected) + 1
    if (index < places.length) return setPlaceSelected(places[index])
    setPlaceSelected(places[0])
  }
  const onPrevious = () => {
    const index = places.indexOf(placeSelected) - 1
    if (index >= 0) return setPlaceSelected(places[index])
    setPlaceSelected(places[places.length - 1])
  }

  const goToDefaultZoom = () => mapRef.current?.goToDefaultZoom(getCoordinatesConverted())

  const setPlaceSelectedByIndex = (index: number) => setPlaceSelected(places[index])

  useLayoutEffect(() => {
    if (mapRef.current && mapRef.current.map) mapRef.current.map.flyTo({ zoom: 8, center: getCoordinatesConverted() })
  }, [mapRef, placeSelected]) // eslint-disable-line

  const value = {
    mapRef,
    places,
    placeSelected,
    setPlaceSelected,
    setPlaceSelectedByIndex,
    goToDefaultZoom,
    onNext,
    onPrevious,
  }

  return <MapWithSliderContext.Provider value={value}>{children}</MapWithSliderContext.Provider>
}

export const useMapWithSliderContext = () => {
  const context = useContext(MapWithSliderContext)
  if (!context) throw new Error('useMapWithSliderContext must be used within a MapWithSliderProvider')
  return context
}
