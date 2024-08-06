import { IconApp } from '@/assets'
import { APP_NAME } from '@/constants'
import { getRecommenderFormDataStore } from '@/recommender/actions'
import { travelService } from '@/travel'
import { MapWithSlider } from '@/ui'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function TravelRecommendedPage() {
  const recommenderFormDataStore = await getRecommenderFormDataStore()
  const recommendations = await travelService.getRecommendations(recommenderFormDataStore)

  if (!recommendations) return notFound()

  return (
    <>
      <header className="sticky top-0 left-0 z-40 w-full p-2 flex items-center justify-between backdrop-blur-xl">
        <Link className="flex items-center gap-1" href="/recomender/basic-information">
          <IconApp size={28} />
          <h1 className="font-bold text-[10px] w-16 leading-3">{APP_NAME}</h1>
        </Link>
        <div className="flex items-center gap-2 pt-2"></div>
      </header>
      <MapWithSlider places={recommendations} />
    </>
  )
}
