'use client'
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import { LngLatLike, Map as MapboxMap, Marker, Popup } from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

export interface IMapProps {
  accessToken: string
}

export interface IMapRefHander {
  map: MapboxMap
  goToDefaultZoom: (center: LngLatLike) => void
}

const landmarks: { lngLat: [number, number]; label: string; description: string }[] = [
  { lngLat: [2.2945, 48.8584], label: 'Torre Eiffel', description: 'El símbolo más icónico de París, Francia.' },
  {
    lngLat: [-74.0445, 40.6892],
    label: 'Estatua de la Libertad',
    description: 'Monumento emblemático en Nueva York, EE. UU.',
  },
  { lngLat: [116.3975, 39.9087], label: 'La Ciudad Prohibida', description: 'Palacio imperial chino en Pekín, China.' },
  {
    lngLat: [139.8107, 35.7101],
    label: 'Templo Senso-ji',
    description: 'El templo budista más antiguo de Tokio, Japón.',
  },
  { lngLat: [12.4924, 41.8902], label: 'Coliseo de Roma', description: 'Anfiteatro romano en Roma, Italia.' },
  {
    lngLat: [151.2153, -33.8572],
    label: 'Ópera de Sídney',
    description: 'Famoso centro de artes escénicas en Sídney, Australia.',
  },
  { lngLat: [37.6208, 55.7539], label: 'Kremlin de Moscú', description: 'Fortaleza histórica en Moscú, Rusia.' },
  { lngLat: [77.1758, 28.6129], label: 'Taj Mahal', description: 'Mausoleo en Agra, India.' },
  { lngLat: [121.4998, 31.2397], label: 'Bund de Shanghái', description: 'Zona histórica en Shanghái, China.' },
  {
    lngLat: [31.1342, 29.9792],
    label: 'Pirámides de Giza',
    description: 'Antiguas pirámides egipcias cerca de El Cairo, Egipto.',
  },
  {
    lngLat: [13.4125, 52.52],
    label: 'Puerta de Brandeburgo',
    description: 'Monumento neoclásico en Berlín, Alemania.',
  },
  {
    lngLat: [-3.6878, 40.4167],
    label: 'Palacio Real de Madrid',
    description: 'Residencia oficial de la Familia Real Española en Madrid, España.',
  },
  { lngLat: [2.3364, 48.8606], label: 'Museo del Louvre', description: 'Famoso museo de arte en París, Francia.' },
  {
    lngLat: [18.9553, 69.6829],
    label: 'Auroras Boreales de Tromsø',
    description: 'Fenómeno natural en Tromsø, Noruega.',
  },
  { lngLat: [-43.2105, -22.9519], label: 'Cristo Redentor', description: 'Estatua icónica en Río de Janeiro, Brasil.' },
  {
    lngLat: [100.5018, 13.7563],
    label: 'Gran Palacio de Bangkok',
    description: 'Complejo de edificios reales en Bangkok, Tailandia.',
  },
  { lngLat: [3.1829, 51.0535], label: 'Belfry de Brujas', description: 'Campanario medieval en Brujas, Bélgica.' },
  { lngLat: [77.2248, 28.6139], label: 'Puerta de la India', description: 'Arco conmemorativo en Nueva Delhi, India.' },
  {
    lngLat: [174.7654, -41.2865],
    label: 'Te Papa Tongarewa',
    description: 'Museo nacional en Wellington, Nueva Zelanda.',
  },
  { lngLat: [-87.6298, 41.8781], label: 'Willis Tower', description: 'Rascacielos icónico en Chicago, EE. UU.' },
]

export const Map = forwardRef(({ accessToken }: IMapProps, ref) => {
  const mapboxRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapboxMap | null>(null)

  const getZoom = () => {
    if (!mapboxRef.current) return 1
    const mapWidth = mapboxRef.current.offsetWidth
    if (mapWidth > 1536) return 3.5
    if (mapWidth > 1024) return 3
    if (mapWidth > 768) return 2
    if (mapWidth > 480) return 1.5
    return 1
  }

  const goToDefaultZoom = (center: LngLatLike) => {
    if (!mapRef.current) return
    mapRef.current.flyTo({ center, zoom: getZoom() })
  }

  // useImperativeHandle(ref, () => mapRef.current)
  useImperativeHandle(ref, () => ({
    map: mapRef.current,
    goToDefaultZoom
  }))

  useLayoutEffect(() => {
    if (!mapboxRef.current) return
    const map = new MapboxMap({
      container: mapboxRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      zoom: getZoom(),
      center: { lat: 38.703564, lng: -0.948476 },
      accessToken,
    })

    mapRef.current = map

    // new Marker({ color: '#34d399' }).setLngLat([-0.948476, 38.703564]).addTo(map) // Caudete
    // new Marker({ color: '#34d399' }).setLngLat([2.3522, 48.8567]).addTo(map) // París
    // new Marker({ color: '#34d399' }).setLngLat([-0.1276, 51.5074]).addTo(map) // Londres
    // new Marker({ color: '#34d399' }).setLngLat([139.6917, 35.6895]).addTo(map) // Tokio
    // new Marker({ color: '#34d399' }).setLngLat([116.4074, 39.9042]).addTo(map) // Pekín
    // new Marker({ color: '#34d399' }).setLngLat([151.2093, -33.8688]).addTo(map) // Sídney
    // new Marker({ color: '#34d399' }).setLngLat([-74.006, 40.7128]).addTo(map) // Nueva York
    // new Marker({ color: '#34d399' }).setLngLat([-3.7038, 40.4168]).addTo(map) // Madrid
    // new Marker({ color: '#34d399' }).setLngLat([37.6173, 55.7558]).addTo(map) // Moscú
    // new Marker({ color: '#34d399' }).setLngLat([19.0402, 47.4979]).addTo(map) // Budapest
    // new Marker({ color: '#34d399' }).setLngLat([4.9041, 52.3676]).addTo(map) // Ámsterdam
    // new Marker({ color: '#34d399' }).setLngLat([18.4241, -33.9249]).addTo(map) // Ciudad del Cabo
    // new Marker({ color: '#34d399' }).setLngLat([-58.3816, -34.6037]).addTo(map) // Buenos Aires
    // new Marker({ color: '#34d399' }).setLngLat([100.5018, 13.7563]).addTo(map) // Bangkok
    // new Marker({ color: '#34d399' }).setLngLat([-99.1332, 19.4326]).addTo(map) // Ciudad de México
    // new Marker({ color: '#34d399' }).setLngLat([2.1734, 41.3851]).addTo(map) // Barcelona
    // new Marker({ color: '#34d399' }).setLngLat([-5.9845, 37.3891]).addTo(map) // Sevilla

    landmarks.forEach(landmark => {
      const marker = new Marker({ color: '#34d399' }).setLngLat(landmark.lngLat).addTo(map)
      marker.getElement().addEventListener('click', () => {
        console.log(landmark.description)
      })
    })
    // map.scrollZoom.disable()
    // map.doubleClickZoom.disable()

    const onResize = () => {
      map.setZoom(getZoom())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      map.remove()
    }
  }, [])

  return <div ref={mapboxRef} className="hidden md:block h-dvh w-screen bg-black" />
})

Map.displayName = 'Map'
