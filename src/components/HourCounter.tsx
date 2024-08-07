'use client'
import React, { useEffect, useState } from 'react'

import { getDateAdjustedByUTC, getTimeFormated } from '@/utils'

export interface IHourCounterProps {
  utc: string
}

export const HourCounter: React.FC<IHourCounterProps> = ({ utc }) => {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const date = getDateAdjustedByUTC(utc)
      setCurrentTime(getTimeFormated(date.toString()))
    }
    updateTime()
    const intervalId = setInterval(updateTime, 1000)
    return () => clearInterval(intervalId)
  }, [utc])

  return <div>{currentTime}</div>
}
