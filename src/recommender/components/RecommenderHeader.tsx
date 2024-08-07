import Link from 'next/link'

import { IconAppLink, StepProgress, Theme } from '@/components'
import { Sheet } from '@/ui'

export interface IRecommenderHeaderProps {
  currentStepIndex: number
  numberOfSteps: number
  prevStep: string
}

export const RecommenderHeader: React.FC<IRecommenderHeaderProps> = ({ currentStepIndex, prevStep, numberOfSteps }) => {
  return (
    <nav className="sticky w-full top-0 left-0 bg-background z-40 p-4 md:py-8">
      <div className="container flex items-center justify-between gap-4 md:gap-12">
        <Link
          className="text-sm cursor-pointer hover:underline"
          href={currentStepIndex > 0 ? `/recommender/${prevStep}` : '/'}
        >
          <span className="text-sm">Volver</span>
        </Link>
        <StepProgress currentStepIndex={currentStepIndex} numberOfSteps={numberOfSteps} />
        <Sheet trigger={<span className="text-sm cursor-pointer hover:underline">Menu</span>}>
          <div className="bg-card w-[280px] h-dvh flex flex-col gap-4 p-6">
            <IconAppLink iconSize={80} classNameText="text-2xl w-40" />
            <div className="flex flex-col justify-between items-end flex-1">
              <div></div>
              <Theme />
            </div>
          </div>
        </Sheet>
      </div>
    </nav>
  )
}
