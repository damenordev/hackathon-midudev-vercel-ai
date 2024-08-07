import { APICallError } from 'ai'

import { generateObjectByModel } from '@/ai'

import { createPromptRecommendations } from './travel.prompts'
import { travelRecommendedResponseSchema } from './travel.schemas'
import { ITravelRecomendationsArgs, ITravelRecommended } from './travel.types'
import { DEV_DATA } from '@/data'

class TravelService {
  getRecommendations = async (args: ITravelRecomendationsArgs): Promise<ITravelRecommended[] | null> => {

    return DEV_DATA.recommendations
    try {
      const prompt = createPromptRecommendations(args)
      const { object } = await generateObjectByModel({ prompt, schema: travelRecommendedResponseSchema })
      return travelRecommendedResponseSchema.parse(object).data
    } catch (error) {
      console.log(error)
      const errorParsed = error as APICallError
      const responseBody = JSON.stringify(errorParsed.responseBody)
      console.error({ responseBody })
      // throw new Error(JSON.stringify(errorParsed))
      return DEV_DATA.recommendations
    }
  }
}

export const travelService = new TravelService()
