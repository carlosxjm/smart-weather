import { useEffect } from 'react'
import { DefaultLayout } from '../../components/DefaultLayout/DefaultLayout'
import { useWeatherData } from '../../services/useWeatherData/useWeatherData'
import { NextDaysForecast } from './components/NextDaysForecast/NextDaysForecast'
import './Home.css'
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather'
import { Card } from '../../components/Card/Card'
import { useCityContext } from '../../contexts/city/useCityContext'
import { HomeLoader } from './HomeLoader'

const INTIAL_CITY = 'Paris'

export const Home = () => {
  const { loadData, data, isLoading } = useWeatherData()
  const { city } = useCityContext()

  useEffect(() => {
    loadData(city?.value || INTIAL_CITY)
  }, [city])

  if (isLoading || !data) {
    return <HomeLoader />
  }

  const { current, location, forecast } = data

  return (
    <DefaultLayout>
      <CurrentWeather current={current} location={location} />
      <Card className="forecast-list-wrapper">
        <NextDaysForecast nextDaysForecast={forecast.forecastday} />
      </Card>
    </DefaultLayout>
  )
}
