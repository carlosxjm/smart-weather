import { ElementLoader } from '../../../../components/ElementLoader/ElementLoader'
import './NextDaysForecast.css'

export const NextDaysForecastLoader = () => (
  <>
    <h3 className="forecast-list-title">Next days forecast</h3>
    <div className="forecast-list">
      <ElementLoader width={80} height={104} />
      <ElementLoader width={80} height={104} />
      <ElementLoader width={80} height={104} />
      <ElementLoader width={80} height={104} />
      <ElementLoader width={80} height={104} />
    </div>
  </>
)
