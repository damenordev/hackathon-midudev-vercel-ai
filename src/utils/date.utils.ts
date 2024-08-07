const extractOffset = (utcString: string): number => {
  const match = utcString.match(/([+-])(\d+)/)
  if (!match) {
    throw new Error('Formato de cadena UTC no válido')
  }

  const sign = match[1]
  const offset = parseInt(match[2], 10)
  return sign === '+' ? offset : -offset
}

export const getDateAdjustedByUTC = (utcString: string): Date => {
  const offsetHours = extractOffset(utcString)
  const now = new Date()
  return new Date(now.getTime() + offsetHours * 60 * 60 * 1000)
}

export const getDateFormated = (utcString: string) => {
  const date = getDateAdjustedByUTC(utcString)
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }
  return new Intl.DateTimeFormat('es-ES', dateOptions).format(date)
}

export const getTimeFormated = (utcString: string): string => {
  const date = getDateAdjustedByUTC(utcString)
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  }
  return new Intl.DateTimeFormat('en-US', timeOptions).format(date)
}

// Función principal que utiliza las funciones separadas
export const getFormattedDateTime = (utcString: string): { dateFormated: string; timeFormated: string; date: Date } => {
  const date = getDateAdjustedByUTC(utcString)
  const dateFormated = getDateFormated(utcString)
  const timeFormated = getTimeFormated(utcString)

  return { dateFormated, timeFormated, date }
}
