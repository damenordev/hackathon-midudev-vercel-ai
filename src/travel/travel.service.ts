import { APICallError } from 'ai'

import { generateObjectByModel } from '@/ai'

import { createPromptRecommendations } from './travel.prompts'
import { travelRecommendedResponseSchema } from './travel.schemas'
import { ITravelRecomendationsArgs, ITravelRecommended } from './travel.types'

class TravelService {
  getRecommendations = async (args: ITravelRecomendationsArgs): Promise<ITravelRecommended[] | null> => {
    try {
      const prompt = createPromptRecommendations(args)
      const { object } = await generateObjectByModel({
        prompt,
        schema: travelRecommendedResponseSchema,
        // modelIA: 'gpt-3.5-turbo',
        modelIA: 'llama3-70b-8192',
        // modelIA: 'gpt-4o',
      })
      return travelRecommendedResponseSchema.parse(object).data
    } catch (error) {
      console.log(error)
      const errorParsed = error as APICallError
      const responseBody = JSON.stringify(errorParsed.responseBody)
      console.error({ responseBody })
      throw new Error(JSON.stringify(errorParsed))
    }
  }
}

export const travelService = new TravelService()
