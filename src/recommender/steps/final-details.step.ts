import { IRecommenderStep } from '../recommender.types'

export const STEP_FINAL_DETAILS: IRecommenderStep = {
  slug: 'final-details',
  title: 'Detalles que marcan la diferencia ✨',
  videoUrl: 'https://videos.pexels.com/video-files/10809835/10809835-sd_360_640_30fps.mp4',
  description:
    '¿Tienes alguna necesidad especial, como restricciones dietéticas 🥕 o de movilidad ♿? ¿Te interesa aprender un nuevo idioma 🗣️ o prefieres un destino sostenible 🌿? Cuéntanos un poco más sobre ti para que podamos personalizar tus recomendaciones. 😊',
  questions: [
    {
      label: '¿Tienes alguna restricción dietética?',
      helperText: 'Esto nos ayudará a recomendar destinos con opciones alimentarias adecuadas',
      errorMessage: 'Por favor, selecciona tus restricciones dietéticas, si las hay',
      name: 'dietaryRestrictions',
      type: 'checkbox',
      options: [
        { emoji: '🥕', label: 'Vegetariano', value: 'vegetarian' },
        { emoji: '🥬', label: 'Vegano', value: 'vegan' },
        { emoji: '🌾', label: 'Sin gluten', value: 'glutenFree' },
        { emoji: '🥛', label: 'Sin lactosa', value: 'lactoseFree' },
        { emoji: '🥜', label: 'Alergias a frutos secos', value: 'nutAllergy' },
        { emoji: '🍤', label: 'Alergia a mariscos', value: 'seafoodAllergy' },
      ],
    },
    {
      label: '¿Tienes alguna necesidad especial que deba considerarse?',
      helperText: 'Opcionalmente puedes indicar que tipo de necesidad especial tienes',
      errorMessage: 'Por favor, indica si tienes alguna necesidad especial',
      name: 'specialNeeds',
      type: 'checkbox',
      options: [
        { emoji: '♿', label: 'Accesibilidad para silla de ruedas', value: 'wheelchair' },
        { emoji: '🦮', label: 'Asistencia visual', value: 'visualAid' },
        { emoji: '🧑‍🦯', label: 'Movilidad reducida', value: 'limitedMobility' },
        { emoji: '✈️', label: 'Miedo a volar', value: 'fearOfFlying' },
        { emoji: '🚢', label: 'Preferencia por transporte terrestre', value: 'noFlying' },
        { emoji: '👶', label: 'Viaje con bebé', value: 'travelingWithInfant' },
      ],
    },
    {
      label: '¿Deseas indicarnos algunas recomendaciones adicionales?',
      helperText: 'Opcionalmente puedes indicar algunas recomendaciones adicionales',
      name: 'additionalRecommendations',
      type: 'textarea',
    },
  ],
}
