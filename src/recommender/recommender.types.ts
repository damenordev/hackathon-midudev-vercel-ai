import { IInputCheckboxOrRadioProps, IInputTextAreaProps } from '@/ui'

export interface IRecommenderStep {
  slug: string
  title: string
  description: string
  videoUrl: string
  questions: TRecommenderQuestion[]
}

export type TRecommenderQuestion = IInputCheckboxOrRadioProps | IInputTextAreaProps
