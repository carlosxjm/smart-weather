import { ForecastDay } from '../../../../types'
import { formatDate } from '../../../../utils/formatDate'
import './NextDaysForecastItem.css'

export const NextDaysForecastItem = (forecastDayItem: ForecastDay) => (
  <div className="next-days-forecast-item">
    <p>{forecastDayItem.day.avgtemp_c}°</p>
    <img
      src={forecastDayItem.day.condition.icon}
      alt={forecastDayItem.day.condition.text}
    />
    <p>{formatDate(forecastDayItem.date, 'short')}</p>
  </div>
)
