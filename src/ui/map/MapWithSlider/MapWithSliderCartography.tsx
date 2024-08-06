'use client'

import { Map } from '@/ui'
import { useMapWithSliderContext } from './MapWithSliderProvider'

export interface IMapWithSliderCartographyProps {
  mapAccessToken: string
}

export const MapWithSliderCartography: React.FC<IMapWithSliderCartographyProps> = ({ mapAccessToken }) => {
  const { mapRef, places } = useMapWithSliderContext()

  return (
    <div className="block absolute left-0 top-0 w-full h-full">
      <Map
        accessToken={mapAccessToken}
        ref={mapRef}
        markers={places.map(place => ({ lngLat: [place.coordinates.lng, place.coordinates.lat] }))}
      />
    </div>
  )
}
