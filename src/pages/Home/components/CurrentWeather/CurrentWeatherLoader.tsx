import { Card } from '../../../../components/Card/Card'
import { ElementLoader } from '../../../../components/ElementLoader/ElementLoader'
import './CurrentWeather.css'

export const CurrentWeatherLoader = () => {
  return (
    <Card className="current-weather-wrapper">
      <div className="current-weather">
        <p className="temp">
          <ElementLoader width={130} height={100} />
        </p>
        <div className="local-info">
          <p className="city">
            <ElementLoader width={200} height={40} />
          </p>
          <p className="localtime">
            <ElementLoader width={100} height={20} />
          </p>
          <img src="/degrade-border.svg" aria-hidden="true" />
        </div>
        <p className="description">
          <ElementLoader width={200} height={60} />
        </p>
        <div className="extra-info">
          <div className="extra-info-item">
            <ElementLoader width={16} height={16} />
            <ElementLoader width={180} height={16} />
          </div>
          <div className="extra-info-item">
            <ElementLoader width={16} height={16} />
            <ElementLoader width={180} height={16} />
          </div>
          <div className="extra-info-item">
            <ElementLoader width={16} height={16} />
            <ElementLoader width={180} height={16} />{' '}
          </div>
        </div>
      </div>
    </Card>
  )
}
