import { notFound, redirect } from 'next/navigation'
import { getRecommenderFormDataStore } from '@/recommender/actions'
import { travelService } from '@/travel'
import { MapWithSlider } from '@/ui'
export default async function TravelRecommendedPage() {
  const recommenderFormDataStore = await getRecommenderFormDataStore()

  if (!recommenderFormDataStore) return redirect('/recomender')

  const recommendations = await travelService.getRecommendations(recommenderFormDataStore)

  if (!recommendations) return notFound()

  console.log({ recommendations })

  return (
    <>
      <MapWithSlider places={recommendations} />
    </>
  )
}
