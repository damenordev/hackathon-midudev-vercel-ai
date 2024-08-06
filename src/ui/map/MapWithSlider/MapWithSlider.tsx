import { MAPBOX_ACCESS_TOKEN } from '@/constants'

import { MapWithSliderProvider } from './MapWithSliderProvider'
import { MapWithSliderCartography } from './MapWithSliderCartography'
import { MapWithSliderPlaceInfo } from './MapWithSliderPlaceInfo'
import { IMapWithSliderOption } from './MapWithSlider.types'

export interface IMapWithSliderProps {
  places: IMapWithSliderOption[]
}

export const MapWithSlider: React.FC<IMapWithSliderProps> = ({ places }) => {
  return (
    <MapWithSliderProvider places={places}>
      <section className="relative w-full h-full bg-black snap-start flex flex-col md:flex-col-reverse justify-between">
        <MapWithSliderCartography mapAccessToken={MAPBOX_ACCESS_TOKEN} />
        <div className="p-4">
          <MapWithSliderPlaceInfo />
        </div>
      </section>
    </MapWithSliderProvider>
  )
}
