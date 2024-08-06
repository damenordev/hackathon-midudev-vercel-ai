import { StepProgress } from '@/components'
import Link from 'next/link'

export interface IRecommenderHeaderProps {
  currentStepIndex: number
  numberOfSteps: number
  prevStep: string
}

export const RecommenderHeader: React.FC<IRecommenderHeaderProps> = ({ currentStepIndex, prevStep, numberOfSteps }) => {
  return (
    <nav className="sticky w-full top-0 left-0 backdrop-blur-lg z-40 p-4 md:py-8">
      <div className="container flex items-center justify-between gap-4 md:gap-12">
        <Link className="text-sm cursor-pointer hover:underline" href={`/recommender/${prevStep}`}>
          <span className="text-sm">Volver</span>
        </Link>
        <StepProgress currentStepIndex={currentStepIndex} numberOfSteps={numberOfSteps} />
        <span className="text-sm cursor-pointer hover:underline">Menu</span>
      </div>
    </nav>
  )
}
