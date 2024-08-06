import { z } from 'zod'

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
