import { Card } from '../../components/Card/Card'
import { DefaultLayout } from '../../components/DefaultLayout/DefaultLayout'
import { CurrentWeatherLoader } from './components/CurrentWeather/CurrentWeatherLoader'
import { NextDaysForecastLoader } from './components/NextDaysForecast/NextDaysForecastLoader'

export const HomeLoader = () => {
  return (
    <DefaultLayout>
      <CurrentWeatherLoader />
      <Card className="forecast-list-wrapper">
        <NextDaysForecastLoader />
      </Card>
    </DefaultLayout>
  )
}
