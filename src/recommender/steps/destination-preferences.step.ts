import { IRecommenderStep } from '../recommender.types'

export const STEP_DESTINATION_PREFERENCES: IRecommenderStep = {
  slug: 'destination-preferences',
  title: '¿Playa, montaña o ciudad ? ¡Tú eliges! 🏖️⛰️🏙️',
  videoUrl: 'https://videos.pexels.com/video-files/7108795/7108795-sd_360_640_25fps.mp4',
  description:
    '¿Qué tipo de destino te llama más la atención? ¿Eres de playa, montaña, ciudad o quizás algo más exótico como un desierto 🏜️ o una isla tropical 🌴? Cuéntanos tus gustos y te ayudaremos a encontrar el lugar perfecto para tus vacaciones. 😎',
  questions: [
    {
      label: '¿Qué tipo de destino prefieres?',
      helperText: 'Selecciona el entorno que más te gustaría visitar (puedes elegir varias)',
      errorMessage: 'Por favor, selecciona al menos un tipo de destino',
      name: 'destinationType',
      type: 'checkbox',
      options: [
        { emoji: '🏖️', label: 'Playa', value: 'beach' },
        { emoji: '🏔️', label: 'Montaña', value: 'mountain' },
        { emoji: '🏙️', label: 'Ciudad', value: 'city' },
        { emoji: '🌾', label: 'Rural', value: 'rural' },
        { emoji: '🏝️', label: 'Isla', value: 'island' },
        { emoji: '🏜️', label: 'Desierto', value: 'desert' },
      ],
    },
    {
      label: '¿Prefieres destinos populares o lugares menos conocidos?',
      helperText: 'Esto nos ayuda a sugerir destinos que se ajusten a tus preferencias de turismo',
      errorMessage: 'Por favor, selecciona tu preferencia de popularidad del destino',
      name: 'popularity',
      type: 'radio',
      defaultValue: 'anywhere',
      options: [
        { emoji: '🌟', label: 'Muy popular', value: 'veryPopular' },
        { emoji: '🏙️', label: 'Popular', value: 'popular' },
        { emoji: '🏘️', label: 'Moderadamente conocido', value: 'moderate' },
        { emoji: '🏡', label: 'Poco conocido', value: 'lessKnown' },
        { emoji: '🕵️', label: 'Fuera del radar turístico', value: 'offbeat' },
        { emoji: '🌎', label: 'Cualquiera', value: 'anywhere' },
      ],
    },
    {
      label: '¿Qué tipo de actividades te interesan?',
      helperText: 'Selecciona todas las actividades que te gustaría realizar durante tu viaje (puedes elegir varias)',
      errorMessage: 'Por favor, selecciona al menos una actividad',
      name: 'activities',
      type: 'checkbox',
      options: [
        { emoji: '🏛️', label: 'Cultura', value: 'culture' },
        { emoji: '🧗', label: 'Aventura', value: 'adventure' },
        { emoji: '🧘', label: 'Relax', value: 'relax' },
        { emoji: '🍽️', label: 'Gastronomía', value: 'food' },
        { emoji: '🚶', label: 'Senderismo', value: 'hiking' },
        { emoji: '🎭', label: 'Arte', value: 'art' },
        { emoji: '📸', label: 'Fotografía', value: 'photography' },
        { emoji: '🌿', label: 'Ecoturismo', value: 'ecotourism' },
      ],
    },
  ],
}
