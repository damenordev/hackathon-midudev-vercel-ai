import { IRecommenderStep } from '../recommender.types'

export const STEP_BASIC_INFORMATION: IRecommenderStep = {
  slug: 'basic-information',
  title: 'Tu próxima aventura empieza aquí ✈️',
  videoUrl: 'https://videos.pexels.com/video-files/6117571/6117571-sd_506_960_25fps.mp4',
  description:
    'Comparte con nosotros algunos detalles sobre tu viaje ideal: ¿de dónde vienes? 🌍 ¿cuántos días tienes? 📆 ¿cuándo quieres viajar? 📅 y ¿cuánto quieres gastar? 💰',
  questions: [
    {
      label: '¿Hay algún continente o región específica que te interese?',
      helperText: 'Selecciona la región del mundo que más te llame la atención',
      errorMessage: 'Por favor, selecciona al menos una región de interés',
      name: 'region',
      type: 'radio',
      defaultValue: 'anywhere',
      options: [
        { emoji: '🌎', label: 'América', value: 'americas' },
        { emoji: '🌍', label: 'África', value: 'africa' },
        { emoji: '🌏', label: 'Asia', value: 'asia' },
        { emoji: '🇪🇺', label: 'Europa', value: 'europe' },
        { emoji: '🦘', label: 'Oceanía', value: 'oceania' },
        { emoji: '🌐', label: 'Cualquiera', value: 'anywhere' },
      ],
    },
    {
      label: '¿Cuál es tu presupuesto aproximado para el viaje?',
      helperText: 'Esto nos ayudará a sugerir opciones dentro de tu rango de presupuesto',
      errorMessage: 'Por favor, selecciona un rango de presupuesto',
      name: 'budget',
      type: 'radio',
      defaultValue: 'medium',
      options: [
        { emoji: '🪙', label: 'Muy económico', value: 'veryLow' },
        { emoji: '💰', label: 'Económico', value: 'low' },
        { emoji: '💵', label: 'Moderado', value: 'medium' },
        { emoji: '💸', label: 'Alto', value: 'high' },
        { emoji: '💎', label: 'Lujoso', value: 'luxury' },
        { emoji: '🤔', label: 'Indiferente', value: 'indifferent' },
      ],
    },
    {
      label: '¿Cuánto tiempo planeas viajar?',
      helperText: 'La duración del viaje nos ayuda a planificar mejor las actividades',
      errorMessage: 'Por favor, selecciona la duración aproximada de tu viaje',
      name: 'duration',
      type: 'radio',
      defaultValue: 'twoWeeks',
      options: [
        { emoji: '🕐', label: 'Fin de semana', value: 'weekend' },
        { emoji: '📅', label: 'Una semana', value: 'week' },
        { emoji: '📆', label: 'Dos semanas', value: 'twoWeeks' },
        { emoji: '🗓️', label: 'Un mes', value: 'month' },
        { emoji: '🏖️', label: 'Varios meses', value: 'severalMonths' },
        { emoji: '🌍', label: 'Un año o más', value: 'year' },
      ],
    },
    {
      label: '¿En qué época del año te gustaría viajar?',
      helperText: 'Cada estación ofrece experiencias únicas en diferentes destinos',
      errorMessage: 'Por favor, selecciona tu época preferida para viajar',
      name: 'season',
      type: 'radio',
      defaultValue: 'anytime',
      options: [
        { emoji: '🌸', label: 'Primavera', value: 'spring' },
        { emoji: '☀️', label: 'Verano', value: 'summer' },
        { emoji: '🍂', label: 'Otoño', value: 'autumn' },
        { emoji: '❄️', label: 'Invierno', value: 'winter' },
        { emoji: '🌈', label: 'Cualquiera', value: 'anytime' },
      ],
    },
  ],
}
