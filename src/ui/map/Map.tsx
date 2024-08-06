'use client'
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import { LngLatLike, Map as MapboxMap, Marker, Popup } from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

export interface IMapProps {
  accessToken: string
  markers?: { lngLat: LngLatLike; color?: string }[]
}

export interface IMapRefHander {
  map: MapboxMap
  goToDefaultZoom: (center: LngLatLike) => void
}

export const Map = forwardRef(({ accessToken, markers }: IMapProps, ref) => {
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
    goToDefaultZoom,
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

    markers?.forEach(marker => new Marker({ color: marker.color || '#34d399' }).setLngLat(marker.lngLat).addTo(map))

    const onResize = () => {
      map.setZoom(getZoom())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      map.remove()
    }
  }, [])

  return <div ref={mapboxRef} className="block h-dvh w-screen bg-black" />
})

Map.displayName = 'Map'
