'use server'

import { cookies } from 'next/headers'

const RECOMMENDER_STORE_KEY = 'recommenderFormData'

export const setRecommenderFormDataStore = async (formData: FormData) => {
  const storedData = await getRecommenderFormDataStore()
  const stepData: Record<string, any> = {}

  formData.forEach((value, key) => {
    if (key.startsWith('$ACTION') || !value || value === '') return
    if (!stepData[key]) return (stepData[key] = value)
    if (Array.isArray(stepData[key])) return stepData[key].push(value)
    stepData[key] = [stepData[key], value]
  })

  const newStoredData = { ...(storedData || {}), ...stepData }

  cookies().set(RECOMMENDER_STORE_KEY, JSON.stringify(newStoredData), {
    maxAge: 60 * 60 * 2, // maxAge two hours
    sameSite: 'strict',
    path: '/',
  })
}

export const getRecommenderFormDataStore = async () => {
  const storedData = cookies().get(RECOMMENDER_STORE_KEY)?.value
  if (!storedData) return
  return JSON.parse(storedData)
}
