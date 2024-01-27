import { ForecastDay } from '../../../../types'
import { NextDaysForecastItem } from '../NextDaysForecastItem/NextDaysForecastItem'
import './NextDaysForecast.css'

interface NextDaysForecastProps {
  nextDaysForecast: ForecastDay[]
}

export const NextDaysForecast = ({
  nextDaysForecast,
}: NextDaysForecastProps) => (
  <>
    <h3 className="forecast-list-title">Next days forecast</h3>
    <div className="forecast-list">
      {nextDaysForecast.map((forecastDayItem) => (
        <NextDaysForecastItem key={forecastDayItem.date} {...forecastDayItem} />
      ))}
    </div>
  </>
)
