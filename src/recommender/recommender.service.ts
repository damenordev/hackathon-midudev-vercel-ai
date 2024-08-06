import { IRecommenderStep } from './recommender.types'
import { STEPS } from './steps'

class RecommenderService {
  constructor(readonly steps: IRecommenderStep[]) {}

  getStepDataBySlug = (slug: string) => {
    const currentStep = this.steps.find(step => step.slug === slug)
    const currentStepIndex = this.steps.findIndex(step => step.slug === slug)
    const numberOfSteps = this.steps.length
    const prevStepIndex = currentStepIndex - 1 < 0 ? 0 : currentStepIndex - 1
    const nextStepIndex = currentStepIndex + 1 > this.steps.length - 1 ? null : currentStepIndex + 1
    const prevStep = this.steps[prevStepIndex].slug
    const nextStep = nextStepIndex && this.steps[nextStepIndex]?.slug
    return { currentStep, currentStepIndex, numberOfSteps, prevStep, nextStep }
  }
}

export const recommenderService = new RecommenderService(STEPS)
