import { useState } from 'react'
import { getWeatherApiURL } from '../../utils/getWeatherApiURL'
import { WeatherData } from '../../types'

export const useWeatherData = () => {
  const [data, setData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const loadData = async (cityLatLong: string) => {
    try {
      setIsLoading(true)
      setHasError(false)

      const response = await fetch(
        getWeatherApiURL('forecast', { q: cityLatLong, days: '5' }),
      )
      const result = await response.json()
      setData(result)
    } catch {
      setHasError(true)
    }

    setIsLoading(false)
  }

  return {
    loadData,
    isLoading,
    data,
    hasError,
  }
}
