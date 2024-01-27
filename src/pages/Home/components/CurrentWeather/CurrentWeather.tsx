import { Card } from '../../../../components/Card/Card'
import { useSettingsContext } from '../../../../contexts/settings/useSettingsContext'
import { Current, Location } from '../../../../types'
import { formatDate } from '../../../../utils/formatDate'
import { getUnitSystemConfig } from '../../../../utils/getUnitSystemConfig'
import './CurrentWeather.css'

interface CurrentWeatherProps {
  current: Current
  location: Location
}

export const CurrentWeather = ({ current, location }: CurrentWeatherProps) => {
  const { unitSystem } = useSettingsContext()

  const { tempKey, tempUnit, velocityKey, velocityUnit } =
    getUnitSystemConfig(unitSystem)

  const localtime = formatDate(location?.localtime)

  return (
    <Card className="current-weather-wrapper">
      <div className="current-weather">
        <p className="temp">
          {current[tempKey]}°<span className="temp-unit">{tempUnit}</span>
        </p>
        <div className="local-info">
          <p className="city">
            {location.name}, {location.country}
          </p>
          <p className="localtime">{localtime}</p>
          <img src="/degrade-border.svg" aria-hidden="true" />
        </div>
        <p className="description">
          {current.condition.text}
          <img src={current.condition.icon} alt={current.condition.text} />
        </p>
        <div className="extra-info">
          <div className="extra-info-item">
            <img src="/images/icons/wind.svg" alt="" />
            Wind speed: {current[velocityKey]} {velocityUnit}
          </div>
          <div className="extra-info-item">
            <img src="/images/icons/drops.svg" alt="" />
            Humidity: {current.humidity}%
          </div>
          <div className="extra-info-item">
            <img src="/images/icons/cloud.svg" alt="" />
            Cloud cover: {current.cloud}%
          </div>
        </div>
      </div>
    </Card>
  )
}
