import { APICallError } from 'ai'
import { z } from 'zod'

import { generateObjectByModel } from '@/ai'

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
}

export const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
})

export const currencySchema = z.object({
  base: z.object({ currency: z.string(), amount: z.number() }),
  converted: z.object({ currency: z.string(), amount: z.number() }).optional(),
})

export const travelRecommendedSchema = z.object({
  name: z.string(),
  city: z.string(),
  country: z.string(),
  continent: z.string(),
  coordinates: coordinatesSchema,
  wikipediaUrl: z.string().url(),
  description: z.string().min(100).max(1000),
  priceForDay: currencySchema,
  daysRecommended: z.number(),
  visaRequired: z.boolean(),
  insuranceRequired: z.boolean(),
  timeZone: z.string(),
})

export const travelRecommendedResponseSchema = z.object({
  data: z.array(travelRecommendedSchema),
})

export type TTravelRecommendedResponse = z.infer<typeof travelRecommendedResponseSchema>
export interface ITravelRecommendedResponse extends TTravelRecommendedResponse {}

export type TTravelRecommended = z.infer<typeof travelRecommendedSchema>
export interface ITravelRecommended extends TTravelRecommended {}

const getTextIfArray = (text: string | string[]) => {
  if (Array.isArray(text)) return text.join(',')
  return text
}

const getTransportationText = (text: string | string[]) => {
  if (!text) return ''
  return `, teniendo en cuenta que el transporte preferido es ${getTextIfArray(text)}`
}

const getAdditionalRecommendationsText = (text: string | undefined) => {
  if (!text || text === '') return ''
  return `Se deben tener en cuenta los requisitos especiales: ${text}.`
}

const getAccomodationText = (text: string | string[]) => {
  if (!text) return ''
  return `Se debe tener en cuenta que prefiere alojarse en ${getTextIfArray(text)}`
}

const getDestinationTypeText = (text: string | string[]) => {
  if (!text) return ''
  return `El tipo de destino preferido es ${getTextIfArray(text)}`
}

const getActivitiesText = (text: string | string[]) => {
  if (!text) return ''
  return `Las actividades preferidas son ${getTextIfArray(text)}`
}

const getDietaryRestrictionsText = (text: string | string[]) => {
  if (!text) return ''
  return `Las restricciones alimenticias son ${getTextIfArray(text)}`
}

const getSpecialNeedsText = (text: string | string[]) => {
  if (!text) return ''
  return `Las necesidades especiales son ${getTextIfArray(text)}`
}

const originCountry = 'España'
const conversionCurrency = 'EUR'
const language = 'es-ES'

export const createPromptRecommendations = ({
  accommodation,
  activities,
  budget,
  destinationType,
  duration,
  dietaryRestrictions,
  nightlife,
  popularity,
  region,
  season,
  specialNeeds,
  transportation,
  travellerType,
  additionalRecommendations,
}: ITravelRecomendationsArgs) => {
  return `
    Eres un experto guía turístico con conocimiento mundial. Recomienda 8 lugares, por ejmplo como las Cataratas de Niagara, para un viajero de ${originCountry} en los que es muy importante tener en cuenta el tiempo de traslado y la distancia lógica para que los viajeros tengan tiempo para disfrutar lo máximo posible de horas en el lugar recomendado ${getTransportationText(
    transportation
  )}. El viajero cuenta con ${duration} y con un presupuesto de ${budget}. Todos los precios se indicaran en moneda local y ${conversionCurrency}. 

    Usa el idioma ${language} para una descripción amigable, centrada en datos curiosos y recomendaciones locales, sin saludos ni bienvenidas.

    - Region: ${region}.
    - Epoca del año: ${season}.
    - Popularidad del lugar: ${popularity}. 
    - Tipo de viaje (pareja, solo...):${travellerType}.
    - Se desea disfrutar de la vida nocturna: ${nightlife}.
    - Necesidad de seguro médico o visa.
    
    ${getAccomodationText(accommodation)}
    ${getDestinationTypeText(destinationType)}
    ${getAdditionalRecommendationsText(additionalRecommendations)}
    ${getActivitiesText(activities)}
    ${getDietaryRestrictionsText(dietaryRestrictions)}
    ${getSpecialNeedsText(specialNeeds)}
    
    
    Responde solo con el JSON basado en el esquema proporcionado: ${typeof travelRecommendedResponseSchema}
  `
}

class TravelService {
  getRecommendations = async (args: ITravelRecomendationsArgs): Promise<ITravelRecommended[] | null> => {
    try {
      const prompt = createPromptRecommendations(args)
      const { object } = await generateObjectByModel({
        prompt,
        schema: travelRecommendedResponseSchema,
        modelIA: 'llama3-70b-8192',
        // modelIA: 'gpt-4o',
      })
      return travelRecommendedResponseSchema.parse(object).data
    } catch (error) {
      console.log(error)
      const errorParsed = error as APICallError
      const responseBody = JSON.stringify(errorParsed.responseBody)
      console.error({ responseBody })
      return null
    }
  }
}

export const travelService = new TravelService()
