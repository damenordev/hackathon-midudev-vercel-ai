import { redirect } from 'next/navigation'

import { recommenderService } from '@/recommender'

export default async function RecommenderPage() {
  const firstStep = recommenderService.getFirstStep()
  return redirect(`/recommender/${firstStep.slug}`)
}
