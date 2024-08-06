import { Suspense } from 'react'

import { RecommenderHeader, recommenderService, RecommenderStepSkeleton } from '@/recommender'
import { ILayout } from '@/types'
import { AsideWithVideo } from '@/components'

interface IRecommenderLayoutParams {
  slug: string
}

export default function RecommenderLayout({ children, params: { slug } }: ILayout<IRecommenderLayoutParams>) {
  const { currentStep, currentStepIndex, numberOfSteps, prevStep } = recommenderService.getStepDataBySlug(slug)

  if (!currentStep) return null

  return (
    <>
      <RecommenderHeader currentStepIndex={currentStepIndex} numberOfSteps={numberOfSteps} prevStep={prevStep} />
      <main className="relative container grid lg:grid-cols-[auto_1fr] gap-8 xl:gap-16 p-4 lg:px-0 lg:py-2">
        <AsideWithVideo
          videoUrl={currentStep?.videoUrl}
          title={currentStep?.title}
          description={currentStep?.description}
        />
        <Suspense fallback={<RecommenderStepSkeleton />}>{children}</Suspense>
      </main>
    </>
  )
}
