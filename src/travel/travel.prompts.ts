import { travelRecommendedResponseSchema } from './travel.schemas'
import { ITravelRecomendationsArgs } from './travel.types'

const getTextIfArray = (text: string | string[]) => {
  if (Array.isArray(text)) return text.join(',')
  return text
}

const getTransportationText = (text: string | string[]) => {
  if (!text || text === '') return ''
  return `, teniendo en cuenta que el transporte preferido es ${getTextIfArray(text)}`
}

const getAdditionalRecommendationsText = (text: string | undefined) => {
  if (!text || text === '') return ''
  return `Se deben tener en cuenta los requisitos especiales: ${text}.`
}

const getAccomodationText = (text: string | string[]) => {
  if (!text || text === '') return ''
  return `Se debe tener en cuenta que prefiere alojarse en ${getTextIfArray(text)}`
}

const getDestinationTypeText = (text: string | string[]) => {
  if (!text || text === '') return ''
  return `El tipo de destino preferido es ${getTextIfArray(text)}`
}

const getActivitiesText = (text: string | string[]) => {
  if (!text || text === '') return ''
  return `Las actividades preferidas son ${getTextIfArray(text)}`
}

const getDietaryRestrictionsText = (text: string | string[]) => {
  if (!text || text === '') return ''
  return `Las restricciones alimenticias son ${getTextIfArray(text)}`
}

const getSpecialNeedsText = (text: string | string[]) => {
  if (!text || text === '') return ''
  return `Las necesidades especiales son ${getTextIfArray(text)}`
}

const getUserCountryText = (text: string) => {
  if (!text || text === '') return ''
  return `, para un viajero de ${text} en los que es muy importante tener en cuenta el tiempo de traslado y la distancia lógica para que los viajeros tengan tiempo para disfrutar lo máximo posible de horas en el lugar recomendado`
}

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
  country,
}: ITravelRecomendationsArgs) => {
  return `
    Eres un experto guía turístico con conocimiento mundial. Recomienda 6 lugares, por ejmplo como las Cataratas de Niagara, el Coliso, recorrer grecia... ${getUserCountryText(country)} ${getTransportationText(transportation)}. El viajero cuenta con ${duration} y con un presupuesto de ${budget}. Todos los precios se indicaran en moneda local y ${conversionCurrency}. 

    Usa el idioma ${language} para una descripción amigable, centrada en datos curiosos y recomendaciones locales, sin saludos ni bienvenidas.

    - Region: ${region}.
    - Epoca del año: ${season}.
    - Popularidad del lugar: ${popularity}. 
    - Tipo de viaje (pareja, solo...):${travellerType}.
    - Se desea disfrutar de la vida nocturna: ${nightlife}.
    - ¿Se require visa dependiendo de la nacionalidad?
    - ¿Se require seguro dependiendo de la nacionalidad?
    - El timeZone debe ser por ejemplo 'UTC+8', 'UTC+0', 'UTC+1', 'UTC-5'...
    
    ${getAccomodationText(accommodation)}
    ${getDestinationTypeText(destinationType)}
    ${getAdditionalRecommendationsText(additionalRecommendations)}
    ${getActivitiesText(activities)}
    ${getDietaryRestrictionsText(dietaryRestrictions)}
    ${getSpecialNeedsText(specialNeeds)}
    
    
    Responde solo con el JSON basado en el esquema proporcionado: ${typeof travelRecommendedResponseSchema}
  `
}
