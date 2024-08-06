import { createOpenAI, openai } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { ZodType, ZodTypeDef } from 'zod'

const aiGroq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
})

export type TGenerateObjectModelIA = 'llama3-70b-8192' | 'gpt-4o' | 'gpt-3.5-turbo'

export interface IGenerateObjectByModelArgs {
  modelIA?: TGenerateObjectModelIA
  prompt: string
  schema: ZodType<unknown, ZodTypeDef, unknown>
}

const getModel = (modelIA: TGenerateObjectModelIA) => {
  if (modelIA === 'gpt-3.5-turbo') return openai('gpt-3.5-turbo')
  if (modelIA === 'gpt-4o') return openai('gpt-4o')
  return aiGroq('llama3-70b-8192')
}

export const generateObjectByModel = async ({
  schema,
  modelIA = 'llama3-70b-8192',
  prompt,
}: IGenerateObjectByModelArgs) => {
  const model = getModel(modelIA)
  return await generateObject({ model, prompt, schema, mode: 'json' })
}
