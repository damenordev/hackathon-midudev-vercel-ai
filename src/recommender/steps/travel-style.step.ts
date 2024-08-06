import { IRecommenderStep } from '../recommender.types'

export const STEP_TRAVEL_STYLE: IRecommenderStep = {
  slug: 'travel-style',
  title: '¿Aventurero o sibarita? ¡Tu viaje, tus reglas! 😎',
  videoUrl: 'https://videos.pexels.com/video-files/7658465/7658465-sd_360_640_30fps.mp4',
  description:
    '¿Eres un aventurero mochilero 🎒 o prefieres la comodidad de un resort 🏨? ¿Te gusta viajar en avión ✈️, tren 🚆 o coche 🚗? ¿Viajas solo 👤, en pareja 👫 o con amigos 👥? ¡Dinos cómo te gusta viajar y te encontraremos el alojamiento perfecto! 🏠',
  questions: [
    {
      label: '¿Cómo prefieres viajar?',
      helperText: 'Selecciona tus medios de transporte preferidos (puedes elegir varias)',
      errorMessage: 'Por favor, selecciona al menos un medio de transporte.',
      name: 'transportation',
      type: 'checkbox',
      options: [
        { emoji: '✈️', label: 'Avión', value: 'avión' },
        { emoji: '🚆', label: 'Tren', value: 'tren' },
        { emoji: '🚗', label: 'Coche', value: 'coche' },
        { emoji: '🚌', label: 'Autobús', value: 'autobús' },
        { emoji: '🏍️', label: 'Motocicleta', value: 'motocicleta' },
        { emoji: '🚢', label: 'Crucero', value: 'crucero' },
      ],
    },
    {
      label: '¿Viajas solo, en pareja, con amigos o en familia?',
      helperText: 'El tipo de grupo puede influir en las recomendaciones de alojamiento y actividades',
      errorMessage: 'Por favor, selecciona con quién planeas viajar',
      name: 'travellerType',
      type: 'radio',
      defaultValue: 'any',
      options: [
        { emoji: '🧑', label: 'Solo', value: 'solo' },
        { emoji: '👫', label: 'Pareja', value: 'couple' },
        { emoji: '👥', label: 'Amigos', value: 'friends' },
        { emoji: '👨‍👩‍👧‍👦', label: 'Familia', value: 'family' },
        { emoji: '🧑‍🤝‍🧑', label: 'Grupo organizado', value: 'group' },
        { emoji: '🤔', label: 'Aún no se', value: 'any' },
      ],
    },
    {
      label: '¿Qué nivel de comodidad buscas en el alojamiento?',
      helperText: 'Esto nos ayudará a sugerir opciones de alojamiento adecuadas (puedes elegir varias)',
      errorMessage: 'Por favor, selecciona tu preferencia de alojamiento',
      name: 'accommodation',
      type: 'checkbox',
      options: [
        { emoji: '🎒', label: 'Básico (mochilero)', value: 'basic' },
        { emoji: '🏨', label: 'Lujoso', value: 'luxury' },
        { emoji: '🏕️', label: 'Camping', value: 'camping' },
        { emoji: '🚐', label: 'Autocaravana', value: 'rv' },
        { emoji: '🏡', label: 'Alquiler vacacional', value: 'vacationRental' },
        { emoji: '🏖️', label: 'Resort', value: 'resort' },
      ],
    },
    {
      label: '¿Buscas un destino con vida nocturna activa o prefieres lugares más tranquilos?',
      helperText: 'Esto influirá en la selección de destinos y actividades nocturnas',
      errorMessage: 'Por favor, indica tu preferencia de vida nocturna',
      name: 'nightlife',
      type: 'radio',
      defaultValue: 'indifferent',
      options: [
        { emoji: '🎉', label: 'Muy activa', value: 'veryActive' },
        { emoji: '🍸', label: 'Moderadamente activa', value: 'active' },
        { emoji: '🌙', label: 'Tranquila', value: 'quiet' },
        { emoji: '🦉', label: 'Muy tranquila', value: 'veryQuiet' },
        { emoji: '🔄', label: 'Mezcla de ambas', value: 'mixed' },
        { emoji: '🤐', label: 'Indiferente', value: 'indifferent' },
      ],
    },
  ],
}
