import { redirect } from 'next/navigation'

import { recommenderService, TRecommenderQuestion } from '@/recommender'
import { ILayout } from '@/types'
import { Button, InputCheckboxOrRadio, InputText, InputTextArea } from '@/ui'
import { getRecommenderFormDataStore, setRecommenderFormDataStore } from '@/recommender/actions'

interface IRecommenderPageParams {
  slug: string
}

const getComponentByQuestion = (question: TRecommenderQuestion) => {
  console.log({ question })
  if (question.type === 'radio' || question.type === 'checkbox') return <InputCheckboxOrRadio {...question} />
  if (question.type === 'textarea') return <InputTextArea {...question} />
}

export default async function RecommenderPage({ params: { slug } }: any) {
  const { currentStep, nextStep } = recommenderService.getStepDataBySlug(slug)
  const initialFormData = await getRecommenderFormDataStore()

  console.log({ initialFormData })

  if (!currentStep) return redirect('/')

  const onSubmit = async (formData: FormData) => {
    'use server'
    await setRecommenderFormDataStore(formData)
    if (nextStep) return redirect(`/recommender/${nextStep}`)
    return redirect('/travel/recommended')
  }

  return (
    <form className="flex flex-col gap-6" action={onSubmit}>
      {currentStep.questions.map(question => {
        const defaultValue = initialFormData?.[question.name] || question?.defaultValue
        return getComponentByQuestion({ ...question, defaultValue })
      })}
      <div className="flex justify-end">
        <Button type="submit" className="w-fit">
          {nextStep ? 'Siguiente' : 'Busquemos el viaje perfecto'}
        </Button>
      </div>
    </form>
  )
}
