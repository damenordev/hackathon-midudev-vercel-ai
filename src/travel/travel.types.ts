import { z } from 'zod'
import { travelRecommendedResponseSchema, travelRecommendedSchema } from './travel.schemas'

export interface ITravelRecomendationsArgs {
  additionalRecommendations?: string
  region: string
  budget: string
  duration: string
  season: string
  destinationType: string | string[]
  popularity: string
  activities: string | string[]
  transportation: string | string[]
  travellerType: string
  accommodation: string | string[]
  nightlife: string
  dietaryRestrictions: string | string[]
  specialNeeds: string | string[]
  country: string
}

export type TTravelRecommendedResponse = z.infer<typeof travelRecommendedResponseSchema>
export interface ITravelRecommendedResponse extends TTravelRecommendedResponse {}

export type TTravelRecommended = z.infer<typeof travelRecommendedSchema>
export interface ITravelRecommended extends TTravelRecommended {}
