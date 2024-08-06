import { Fragment } from 'react'

import { cn } from '@/styles'

export interface IStepProgressProps {
  numberOfSteps: number
  currentStepIndex: number
}

export const StepProgress: React.FC<IStepProgressProps> = ({ currentStepIndex, numberOfSteps }) => {
  return (
    <div className="w-full flex items-center">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <Fragment key={`step-${index}`}>
          <div
            className={cn('relative w-8 h-8 grid place-items-center border-[4px]', {
              'bg-primary border-transparent text-background rounded-lg': index < currentStepIndex,
              'bg-transparent border-primary-50 rounded-full': index > currentStepIndex && index !== currentStepIndex,
              'bg-transparent border-primary text-primary rounded-xl': index === currentStepIndex,
            })}
          >
            <span className="text-md font-bold">{index + 1}</span>
          </div>
          {index < numberOfSteps - 1 && (
            <div
              className={cn('w-full h-1 flex-1', {
                'bg-primary-50': index >= currentStepIndex,
                'bg-primary': index < currentStepIndex,
              })}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}
